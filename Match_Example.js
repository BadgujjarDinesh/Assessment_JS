<!DOCTYPE html>
<Html>
    <head>
        <title>

        </title>

        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </head>

    <body>
        <div class="container"><br>
        <h1 class="text-success text-center"> Cricket Match</h1><br>
        
            <div class="col-lg-8 m-auto d-block">

                <form class="bg-light" action="#" onsubmit="return MatchResult()">

                    <div class="form-group">

                        <label> Enter the 1st team name: </label>
                        <input type="text" name="1stTeam"  class="form-control" id="FTeam" >
                        <span id ="First_team" class= " text-danger font-weight-bold"></span>
                    <div>


                    <div class="form-group">
                        <label> Score 1: </label>
                        <input type="text" name="score1"  class="form-control" id="1st_score">
                        <span id ="Score_1" class= " text-danger font-weight-bold"></span>
                     </div>
                         
                    <div class="form-group">
                        <label> Enter 2nd Team name: </label>
                        <input type="text" name="2ndteam"  class="form-control" id="STeam">
                        <span id ="Second_team" class= " text-danger font-weight-bold"></span>
                    </div>


                    <div class="form-group">

                        <label> Score 2: </label>
                        <input type="text" name="score2"  class="form-control" id="2nd_score">
                        <span id ="2_score" class= " text-danger font-weight-bold"></span>

                    </div>

                    
                    <input type="submit" name="Result" placeholder="Result" value="Result" class="btn btn-success"> 
                </form>
            </div>
        </div>

        <script type="text/javascript">

            function MatchResult(){

                var First_Team = document.getElementById("FTeam").value;
                var Score_1 = document.getElementById("1st_score").value;
                var Second_Team = document.getElementById("STeam").value;
                var Score_2 = document.getElementById("2nd_score").value;

                if(First_Team==""){
                    document.getElementById("First_team").innerHTML="** Please fill the First team  name";
                    return false;
                }


               


                if(Score_1==""){
                    document.getElementById("Score_1").innerHTML="** Please fill the 1st score field";
                    return false;
                }


                if(Second_Team==""){
                    document.getElementById("Second_team").innerHTML="** Please fill the second team  name";
                    return false;
                }



                if(Score_2==""){
                    document.getElementById("2_score").innerHTML="** Please fill the second score field";
                    return false;
                }

                
                
 
            }
        </script>
        
    </body>
</Html>