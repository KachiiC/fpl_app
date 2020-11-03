from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Player, MatchDay
from .serializers import PlayerSerializer, MatchDaySerializer

@api_view(['GET', 'POST'])
def players_list(request):
    if request.method == 'GET':
        data = Player.objects.all()

        serializer = PlayerSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PlayerSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)