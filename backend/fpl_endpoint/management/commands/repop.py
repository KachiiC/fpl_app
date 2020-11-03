import os
from django.core.management.base import BaseCommand
from fpl_endpoint.models import *
from fpl_endpoint.management.commands.repoppers import create_all_data

YOUTUBE_DATA_DIR = os.getcwd() + "/fpl_endpoints/data"

data_point = '/fpl_endpoint/data/{}Data.json'

players = ["ant", "dan", "elijha", "fara", "hayden", "kach", "michael", "ricky", "shirley", "zeen"]


class Command(BaseCommand):
    def handle(self, *args, **options):
        MatchDay.objects.all().delete()
        Player.objects.all().delete()

        for player in players:
            create_all_data(os.getcwd() + data_point.format(player))

        # players_list = Player.objects.all()
        match_days = MatchDay.objects.all()

        for match in match_days:
            if match.player_id == 2341747:
                player_info = Player.objects.get(player_id=2341747)
                player_info.matches.add(match)
            elif match.player_id == 158159:
                player_info = Player.objects.get(player_id=158159)
                player_info.matches.add(match)
            elif match.player_id == 213553:
                player_info = Player.objects.get(player_id=213553)
                player_info.matches.add(match)
            elif match.player_id == 34170:
                player_info = Player.objects.get(player_id=34170)
                player_info.matches.add(match)
            elif match.player_id == 1639999:
                player_info = Player.objects.get(player_id=1639999)
                player_info.matches.add(match)
            elif match.player_id == 684633:
                player_info = Player.objects.get(player_id=684633)
                player_info.matches.add(match)
            elif match.player_id == 1867039:
                player_info = Player.objects.get(player_id=1867039)
                player_info.matches.add(match)
            elif match.player_id == 979495:
                player_info = Player.objects.get(player_id=979495)
                player_info.matches.add(match)
            elif match.player_id == 4316712:
                player_info = Player.objects.get(player_id=4316712)
                player_info.matches.add(match)
            elif match.player_id == 1029246:
                player_info = Player.objects.get(player_id=1029246)
                player_info.matches.add(match)
        print("Matches Repops Complete")
