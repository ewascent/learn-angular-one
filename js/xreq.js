/*jslint white:true*/
/*jslint es6 */
/*XMLHttpRequest, console, XDomainRequest*/
import XMLHttpRequest;
export default function xreq(method, uri, withCredentials, contentType) {
    'use strict';
    var xhr = new XMLHttpRequest(); //set XDomainRequest
    xhr.withCredentials = withCredentials;
    xhr.open(method, uri, withCredentials);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    console.log('withCredentials in xhr: ' + xhr.withCredentials);
    return xhr;
}
