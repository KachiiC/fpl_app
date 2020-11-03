from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from fpl_endpoint.models import Player, MatchDay
from fpl_endpoint.serializers import PlayerSerializer


class PlayersListTest(APITestCase):
    players_list_endpoint = reverse('players_list')

    match_day_1 = MatchDay(
        player_id=12345,
        game_week=1,
        game_week_points=75,
        team_value=1000,
        game_week_transfers=0,
        game_week_transfers_cost=0,
        bench_points=3
    )

    match_day_2 = MatchDay(
        player_id=11111,
        game_week=1,
        game_week_points=76,
        team_value=1010,
        game_week_transfers=2,
        game_week_transfers_cost=4,
        bench_points=3
    )

    player_1 = Player(
        player_name="Kach",
        player_id=12345,
    )

    player_2 = Player(
        player_name="Dan",
        player_id=11111,
    )

    expected_matches = [match_day_1, match_day_2]
    expected_players = [player_1, player_2]

    def setUp(self):
        """Saving matches and players"""
        for obj in self.expected_matches:
            obj.save()

        for obj in self.expected_players:
            obj.save()

    def test_matches_to_player(self):
        """ Testing adding match to player"""
        all_videos = MatchDay.objects.all()

        kach = Player.objects.get(player_name="Kach")
        dan = Player.objects.get(player_name="Dan")

        for match in all_videos:
            if match.player_id == 12345:
                kach.matches.add(match)

            elif match.player_id == 11111:
                dan.matches.add(match)

        assert kach.matches.count() == 1
        assert dan.matches.count() == 1


