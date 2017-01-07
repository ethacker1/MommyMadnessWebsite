<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mommy Madness - Reviews</title>
    <link href="../main.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<?php include_once ("../Main/header.php") ?>

<div class="section" id="about">
    <h2> The Mommy Behind the Madness</h2>
    <p id="personal">Mommy's Mad Reviews</p>
    <p id="user">The Madness Reviews</p>
    <button id="submitReviewButton">Submit a Review</button>
</div>

<div class="section" id="home">

</div>
<div class="section" id="submitReviewForm">
   <form id="submitReview">
       Name: <input type="text" name="name"><br>
       Product: <input type="text" name="product"><br>
       Review: <input type="text" name="content"><br>
       <input type="submit">
   </form>
</div>
</body>
</html>