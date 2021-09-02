// This is the dev builds of Velstart
// Velstart.js
// A simple, BSD-3 Licensed, JavaScript library.
// Designed to help make functional start pages.
//
// ----------------------------------------------------------------------------------
// BSD 3-Clause License
//
// Copyright (c) 2021, The Potabi Foundation
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this
//    list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its
//    contributors may be used to endorse or promote products derived from
//    this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// ----------------------------------------------------------------------------------
//
// Velstart Usage Policy:
// Velstart has an additional clause for developers using it. 
//
// - Using Velstart for any form of start page requires the following statement
//   on the page using the software must include the following disclaimer in the
//   footer of the webpage document:
//   "Start page functionality from Velstart by The Potabi Foundation"

// Get search bar identification 
var searchBar = document.getElementById("vel-search");
var timeFunction = document.getElementById("vel-time");

// Get time format
function getTimeFormat(){
    var timeDefault = timeFunction.getAttribute("vel-time-format");
    switch (timeDefault.toLowerCase()){
        case "24h":
            setupTime("twentyfour");
        break;

        case "12h":
            setupTime("twelve");
        break;
        default: unknownTimeFormat();
    }
}

// Get search engine
function getSearchEngine(){
    var searchDefault = searchBar.getAttribute("vel-search-default");
    switch (searchDefault.toLowerCase()) {
        case "ask":
            setupSearch("https://www.ask.com/web?q=");
        break;
        
        case "bing":
            setupSearch("https://www.bing.com/search?q=");
        break;

        case "duckduckgo":
            setupSearch("https://duckduckgo.com/?q=");
        break;

        case "ecosia":
            setupSearch("https://www.ecosia.org/search?q=");
        break;

        case "google":
            setupSearch("https://www.google.com/search?q=");
        break;

        case "yahoo":
            setupSearch("https://search.yahoo.com/search?p=");
        break;

        case "yandex":
            setupSearch("https://yandex.com/search/?text=");
        break;
        
        default: unknownSearch();
    }
}

function search(url){
    var toSearch = document.getElementById("vel-search-1").value;
    for (i in toSearch){
        var toSearch = String( toSearch.replace(" ", "+"));
    }
    var finalSearch = String( url + toSearch.replace(" ", "+"));
    location = String( finalSearch );
    return false;
}

function setupTime(format){
    if (format == "twentyfour"){
        timeFunction.innerHTML = `
            <p>ahs</p>
        `;
    } else if (format == "twelve"){
        timeFunction.innerHTML = `
            <p>ahsss</p>
        `;
    }
}

function setupSearch(url){
    searchBar.innerHTML = `
        <form onsubmit="return search(\'`+ String(url) + `\');">
            <input id="vel-search-1" type="text" name="vel-search" placeholder="Search for...">
            <input type="submit" value="Search" name="button">
        </form>
    `;
}

function unknownSearch(){
    searchBar.innerHTML = `
    <p>Velstart error: Unknown search engine, please check implementation!</p>
    `;
}

function unknownTimeFormat(){
    timeFunction.innerHTML = `
        <p>Velstart error: Unknown time format</p>
    `;
}

if (searchBar){
    getSearchEngine();
}

if (timeFunction){
    getTimeFormat();
}