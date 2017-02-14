<?php

$url = 'http://cqu.pt';

$curl = curl_init();

curl_setopt( $curl, CURLOPT_URL, $url );
curl_setopt( $curl, CURLOPT_HEADER, false );
curl_setopt( $curl, CURLOPT_NOBODY, true);
curl_setopt( $curl, CURLOPT_TIMEOUT, 8 );  //超时8s
curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );

$res = curl_exec ( $curl );

echo $res;

curl_close( $curl );

?>