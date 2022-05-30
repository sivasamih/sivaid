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
                    pageBanner = "img/products/productpage/banner/banner-chemical-labelling.jpg";
                    pageSubHeading = "Robust Labels for Chemicals";
                    detailHtml = `
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                   
            `;

                    break;
                case "Horticulture":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/banner_horticulture.jpg";
                    pageSubHeading = "RFID in the agriculture and horticulture sector";
                    detailHtml = `
           
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
           
            `;
                    break;
                case "Steel":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/banner_steel.jpg";
                    pageSubHeading = "Robust Labels for Steel";
                    detailHtml = `
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
            <img id="pageBanner" class="pageBanner" src=${pageBanner} alt=""></br></br>
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