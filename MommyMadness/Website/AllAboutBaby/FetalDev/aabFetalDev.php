<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mommy Madness - Fetal Development</title>
    <link href="../../main.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    <?php include_once("../../Main/header.php") ?>


    <div class="section" id="about">
        <h2>The Mommy Behind the Madness</h2>
            <div class="fdSlideAbout" id="aboutSlide">
                Use the buttons above to navigate through the weeks of your pregnancy!
                <br>
                Each week contains information about the little thing that is growing inside you!
                <br>
                Each section lists:
                <ul>
                    <li> the week, month, and trimester you're in.</li>
                    <li>any vital organs that are making themselves known.</li>
                    <li>what to compare the size of baby to for the week.</li>
                </ul>
            </div>
    </div>
    <div class="section" id="home">
        <h2>Fetal Development</h2>
        <?php include_once("fdNav.php") ?>
    </div>
    <div class="section">
        <?php include_once ("fdSlides.php")?>
        <br>
        <div id="fdNavLinks">
            <div class="slideNav">
                <button class="fdNavButton" id="pPage">Last Week</button>
                <button class="fdNavButton" id="nPage"> Next Week</button>
            </div>
        </div>
    </div> <!--closing slide section-->


    <script src="fetalDev.js"></script>
    <script src="fetalDevButtons.js"></script>
    <script src="fetalDevMonthSlides.js"></script>
</body>
</html>