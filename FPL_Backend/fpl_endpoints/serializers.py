from rest_framework import serializers
from .models import MatchDay, Player


class MatchDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchDay
        fields = ('pk', 'game_week', 'game_week_points', 'team_value', 'game_week_transfers',
                  'game_week_transfers_cost', 'bench_points')


class Player(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('player_name', 'player_id', 'matches')
