
$(() => {
    let $dropDown = $("#bookDropdown");
    let $container = $("#container");
    let arr = ["novel", "anthology"];

    $dropDown.append(`<option value=""></option>`);


    arr.forEach((s) => {
        $dropDown.append(`<option value="">${s}</option>`);
    });

    $dropDown.on('change', function (event) {
        $container.html("");
        if ($dropDown.find("option:selected").text() === "novel") {
            $("#container").append(`
                <label for="title">Title</label>
                <input type="text" id="title">  
                <br>
                <label for="publisher">Publisher</label>      
                <input type="text" id="publisher">  
                <br>
                <label for="yearOfPublication">Year of publication</label>      
                <input type="number" id="yearOfPublication">   
                <br>
                <label for="lengthInPages">Length in pages</label>
                <input type="number" id="lengthInPages">   
                <br>
                <label for="digitIsbn">Digit ISBN</label>
                <input type="number" id="digitIsbn">   
                <br>
                <label for="review">Review</label>
                <input type="text" id="review">   
                <br>
                <label for="author">Author</label>
                <input type="text" id="author">   
                <br>
                <label for="series">Series</label>
                <input type="text" id="series">   
                <br>
                <label for="seriesNumber">Series number</label>
                <input type="number" id="seriesNumber"><br>`)


        }

        else {
            $("#container").append(`
                <label for="title">Title</label>
                <input type="text" id="title">  
                <br>
                <label for="publisher">Publisher</label>      
                <input type="text" id="publisher">  
                <br>
                <label for="yearOfPublication">Year of publication</label>      
                <input type="number" id="yearOfPublication">   
                <br>
                <label for="lengthInPages">Length in pages</label>
                <input type="number" id="lengthInPages">   
                <br>
                <label for="digitIsbn">Digit ISBN</label>
                <input type="number" id="digitIsbn">   
                <br>
                <label for="review">Review</label>
                <input type="text" id="review">   
                <br>
                <label for="editor">Editor</label>
                <input type="text" id="editor">   
                <br>
                <label for="titleOfTheStory">Title of the story</label>
                <input type="text" id="titleOfTheStory">  
                <br>
                <label for="original">original</label>
                <input type="text" id="original">  
                <br>`)
        }
    });



    let $title = $("#title");
    let $publisher = $("#publisher");
    let $yearOfPublication = $("#yearOfPublication");
    let $lengthInPages = $("#lengthInPages");
    let $digitIsbn = $("#digitIsbn");
    let $review = $("#review");
    let $author = $("#author");
    let $series = $("#series");
    let $seriesNumber = $("#seriesNumber");
    let $submit = $("#submit");


    let arrTwo = [];
    // arrTwo = localStorage.getItem('f') !== null ? (localStorage.getItem('f')) : [];
    arrTwo = localStorage.getItem('f')!==null? JSON.parse(localStorage.getItem('f')):[];
    console.log(arrTwo);
    $("#submit").on('click', function (event) {
        if ($dropDown.find("option:selected").text() === "novel") {
            let novela = new Novel($("#title").val(), $("#publisher").val(), $("#yearOfPublication").val(), $("#lengthInPages").val(), $("#digitIsbn").val(), $("#review").val(), $("#author").val(), $("#series").val(), $("#seriesNumber").val());
            arrTwo.push(novela);
        } else {
            let anthology = new Anthology($("#title").val(), $("#publisher").val(), $("#yearOfPublication").val(), $("#lengthInPages").val(), $("#digitIsbn").val(), $("#review").val(), $("#author").val(), $("#series").val(), $("#seriesNumber").val());
            arrTwo.push(anthology);
        }
        let js = JSON.stringify(arrTwo);

        localStorage.setItem('f', js);
    });

});