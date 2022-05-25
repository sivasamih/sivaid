$(document).ready(function () {
    let productList = [];
    productList=[{
        "image": "img/products/productthumbnail/thumbnail.jpg",
        "name": "Sample product",
        "desc": "This is a sample product, which is for dummy showcase",
        "dimensions": "-",
        "read-range": "-",
        "link": "#",
        "isNew": ""
    }]
    let notPresent=false;
    let breadcrumbTitle = pageSubHeading = pageBanner = detailHtml = catDetail = "";
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const product = urlParams.get('product');
        console.log("product > ", product);

        if (product) {
            document.title = 'Product detail :: ' + product;
            breadcrumbTitle = product;
            $("meta[name='title']").attr('content', 'Product detail :: ' + product);
            switch (product) {
                case "Chemical Labelling":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "images/header/header1.jpg";
                    pageSubHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
                    detailHtml = `
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              
            </p>
            <p>
               
            </p>
            `;

                    break;
                case "Horticulture":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "images/header/header1.jpg";
                    pageSubHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
                    detailHtml = `
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              
            </p>
            <p>
               
            </p>
            `;
                    break;
                case "Steel":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "images/header/header1.jpg";
                    pageSubHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
                    detailHtml = `
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              
            </p>
            <p>
              
            </p>
            `;
                    break;
                default:
                    notPresent=true;
                    break;
            }
        }else{
            notPresent=true;  
        }

       

        if (notPresent === false) {
            $("#breadcrumbTitle").text(breadcrumbTitle);
            $("#pageBanner").html(`
            <img id="pageBanner" src=${pageBanner} alt=""></br></br>
            `);
            $("#pageSubHeading").html(pageSubHeading);
            $("#detailHtml").html(detailHtml);
            var tr = "";
            for (var j = 0; j < productList.length; j++) {
                tr = tr + "<tr><td data-label='PRODUCT' class='align-center mobile-align-right'> <a href='" + productList[j]['link'] + "'><img class='card' src='" + productList[j]['image'] + "'/> </a></td> <td data-label='PRODUCT NAME'> <h2 class='table-h2'> <a href='" + productList[j]['link'] + "'>" + productList[j]['name'] + "</a> " + productList[j]['isNew'] + "</h2> <p>" + productList[j]['desc'] + "</p> </td> <td  data-label='DIMENSIONS' class='align-right'><p> " + productList[j]['dimensions'] + " </p></td> <td data-label='READ RANGE' class='align-right'><p> " + productList[j]['read-range'] + " </p></td>   </tr>";

            }
            
            catDetail = "<h1 class='align-center theme-color'><b>PRODUCT LIST</b></h1><br /><div id='product_list_c' class='category-products-list'>" +
                "<div class='container product-details'>" +
                "<div class='card'>" +
                "<table id='product_table_c'>" +
                "<thead>" +
                "<tr>" +
                "<th class='product-col-width'>PRODUCT</th>" +
                "<th class='product-name-col-width'>PRODUCT NAME</th>" +
                "<th class='dimension-col-width'>DIMENSIONS</th>" +
                "<th class='read-range-col-width'>READ RANGE</th>" +

                "</tr>" +
                "</thead>" +
                "<tbody>" + tr +
                "</tbody>" +
                "</table>" +
                "</div>" +
                "</div>" +
                "</div>";
        } else {
            catDetail=`
              <h1 class='theme-color'>Oops!</h1> 
              <h5>Nothing Found.</h5>
            `;
         }
      
        $("#categoryDiv").html(catDetail);


    } catch (ex) { }

});