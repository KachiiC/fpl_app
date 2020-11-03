import json
from fpl_endpoint.models import *


def create_all_data(data_location):
    with open(data_location, 'r') as json_file:
        data = json.load(json_file)
        for match in data[0]["current"]:
            MatchDay(
                game_week=match["event"],
                game_week_points=match["points"],
                team_value=match["value"],
                game_week_transfers=match["event_transfers"],
                game_week_transfers_cost=match["event_transfers_cost"],
                bench_points=match["points_on_bench"]
            ).save()

    print("repop successful data")
