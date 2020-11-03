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
            print(f"repop for {player} successful")

    print("All Repops Complete")
