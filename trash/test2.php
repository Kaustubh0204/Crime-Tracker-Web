<script>
    
    <?php 
        error_reporting(0); 
        file_put_contents("databas.json", "");
        $text1 .="{\n".'"type": "FeatureCollection",' ."\n".'"features": [';
        $textend .=' ]}';
        $fh = fopen('databas.geojson', "w") or die("Could not open log file.");
        fwrite($fh, $text1) or die("Could not write file!");
        // foreach($data as $key=> $value) 
        
    ?>
  
       
            <?php
            $text .= '{
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": ['.$lon.','.$lat.']
                },
                "properties": {
                "prop0": "value0"
                }
            }';  
        ?>
        
  

        
        <?php 
            fwrite($fh, $text) or die("Could not write file!");
            fwrite($fh, $textend) or die("Could not write file!");
            fclose($fh); 
        ?>
        
</script>
