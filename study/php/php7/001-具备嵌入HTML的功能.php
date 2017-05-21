<body>
    <?php
    $name = ["father", "mother", "tom", "cindy"];
    ?>
    <h2 style="color:red;"> tom一家人名字： </h2>
    <?php
    for($i=0;$i<count($name);$i++){
        echo $name[$i]."<br>";
    }
    ?>
</body>