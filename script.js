/* File Comments
Date:	January 24, 2016
Author: Alex Cholakis
E-Mail: coder314159@gmail.com
Source:	Lynda.com - Web - Web Design
Course:	JavaScript: Functions Course
URL:	www.lynda.com/JavaScript-tutorials/
		Challenge-Social-media-navigation/148137/158400-4.html
Task:	Place a list of picture objects with links into the DOM
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

// This Object was given
// Object has key:value pairs
var socialMedia = { 	
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

// Code creations begins here
// create Parent node - ul element 
var nodeUi = function () {
	var ulnode = document.createElement('ul');
	var ulNodeNew = nodeList( ulnode );
	return ulNodeNew;	
};

// create child node - li element  	
var nodeList = function ( ulnodeIn ) {
	var keyStr, value;
	// get key from socialMedia obj
	for (key in socialMedia) {
		keyStr = key.toString();
		// get value from socialMedia obj
		value = socialMedia[key];
		
		var listnode = document.createElement( 'li' );
		listnode.setAttribute( "id", keyStr );
		
		var nodeImage = nodeImg( keyStr );
		
		var linkA = nodeLink( value.toString(), nodeImage );
		
		listnode.appendChild( linkA );
		ulnodeIn.appendChild( listnode );	
	}
	return ulnodeIn;
};

// function creates attribute href node
var nodeLink = function ( valueIn, nodeImages ) {		
	var linkNode = document.createElement( 'a' );
	linkNode.setAttribute( 'href', valueIn );
	linkNode.appendChild( nodeImages );	
	return linkNode;
};

// function creates image (img) node
var nodeImg = function ( keyStrIn ) {		
	var img = 'images/' + keyStrIn + '.png';
	var imagenode = document.createElement( 'img' );
	imagenode.setAttribute( 'alt', 'icon for ' + keyStrIn );
	imagenode.setAttribute( 'src', img );
	return imagenode;
};


medialen = document.getElementsByClassName( 'socialmediaicons' ).length;

for ( index = 0; index < medialen; index++ ) {
	var childUi = nodeUi();
	document.getElementsByClassName( 'socialmediaicons' )[index].appendChild( childUi );
};