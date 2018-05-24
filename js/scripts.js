$(document).ready(function() {
        var url = "http://api.football-data.org/v1/competitions/398/leagueTable";

        $.getJSON(url)
        .done(function (data) {
            data["standing"].forEach(function (team) {
                $('tbody').append(`
                <tr>
                    <th scope="row">${team.position}</th>
                    <td><img style="height:50px; margin-right: 10px" src=" ${team.crestURI}">${team.teamName}</td>
                    <td>${team.playedGames}</td>
                    <td>${team.goals}</td>
                    <td>${team.goalsAgainst}</td>
                    <td>${team.goalDifference}</td>
                    <td>${team.points}</td>
                </tr>
                `);
            });
        });
});