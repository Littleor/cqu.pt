<?php

$url = 'http://jwzx.cqupt.congm.in';

$ch = curl_init();

$options = array(
    CURLOPT_URL => $url,
    CURLOPT_HEADER => false,
    CURLOPT_NOBODY => true,
    CURLOPT_TIMEOUT => 8
);

curl_setopt_array( $ch, $options );

curl_exec( $ch );

$code = curl_getinfo( $ch, CURLINFO_HTTP_CODE );
$ping = curl_getinfo( $ch, CURLINFO_CONNECT_TIME );

echo json_encode( [ $code, ceil($ping * 1000) ] );

curl_close( $ch );

?>