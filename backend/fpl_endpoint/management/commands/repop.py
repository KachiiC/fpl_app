import os
from django.core.management.base import BaseCommand
from fpl_endpoint.models import *
from fpl_endpoint.management.commands.repoppers import create_all_data

YOUTUBE_DATA_DIR = os.getcwd() + "/fpl_endpoints/data"


class Command(BaseCommand):
    def handle(self, *args, **options):
        MatchDay.objects.all().delete()
        create_all_data(os.getcwd() + "/fpl_endpoint/data/kachData.json")

        print("repop for your data successful!")
