<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Forum XML feed test</title>
</head>

<body>

<?php
$xml = new SimpleXMLElement('https://forum.textpattern.io/extern.php?action=feed&type=xml&show=10&order=posted', 0, TRUE);
?>

<ol id="forum-topics">

<?php foreach ($xml->topic as $topicElement) :?>
    <li>
      <a href="<?php echo $topicElement->link; ?>"><?php echo $topicElement->title; ?></a>
      by <?php echo $topicElement->author->name; ?>
      on <time datetime="<?php echo $topicElement->postedutc; ?>"><?php echo $topicElement->posted; ?></time>
    </li>
<?php endforeach; ?>

</ol>

</body>
</html>
