$(document).ready(function () {
    $(".category-products-list").hide();
    let productCategory = [];
    let notPresent = false;
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
                    pageSubHeading = "Robust labels for hazardous chemicals";
                    detailHtml = `
                        <p>
                        SIVA is a responsible supplier of labels for the manufacturing sectors that require labelling for hazardous products. Our knowledge of the IMDG and GHS regulations for the identification of these products allows us to offer guidance on best fit solutions for your labelling needs. Our manufacturing sites use only the highest quality materials to ensure that you are labelling the packaging in a responsible manner. Printing technology within this sector is rapidly changing as the shift from thermal printers to full-colour solutions rapidly increases. At SIVA, we fully understand the challenges involved and are happy to offer guidance on best fit solutions that will allow your business to run efficiently.
                        </p>
                   
            `;
                    break;
                case "Horticulture Tags":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/banner_horticulture.jpg";
                    pageSubHeading = "Tags & Labels for Growers, Nurseries and Garden Centres";
                    detailHtml = `
           
            <p>
            Siva Group manufactures and supplies a range of durable tags and labels to meet the demands of Growers, Nurseries and Garden Centre's. We use only the highest quality materials and are ISO9001:2015 certified across 5 key sites.
            </p>
           
            `;
                    productCategory = [
                        {
                            "name": "Loop Lock Tags",
                            "desc": "Loop Locks, Self-Ties, Tie-Wraps, Wrap Around labels… whatever you call them we make them. Ideal for identifying your plants through their journey from greenhouse to garden or home.",
                            products:[]
                        },
                        {
                            "name": "Stick In Tags",
                            "desc": "Stick In's, Pot Pointer's, Pointed-End Labels… again an array of descriptions for a tag that can be inserted into the compost of your pot or tray. They help to identify your plant and share important information to your customer. ",
                            products:[]
                        },
                        {
                            "name": "Sticky Labels",
                            "desc": "Labelling pots or trays that are coming into contact with composts, watering and weathering conditions can be challenging. Our self-adhesive “sticky” labels are available in a range of sizes to suit your needs and enable you to add your plant data (passport number, barcodes, descriptions, care instructions, pricing) knowing it will still be legible when the pot arrives with the customer.",
                            products:[]
                        },
                        {
                            "name": "Bed Cards",
                            "desc": "A great way to present your stock in a colourful and informative style to help you sell more products. Bed cards can be printed by colour desktop laser printers (OKI, Xerox, Canon, Lexmark etc.). Siva can supply blank media in tag or self-adhesive options to suit your needs.",
                            products:[]
                        },
                        {
                            "name": "Customised Tags & Labels",
                            "desc": "For a specific size/shape or a printed tag or label that is not available from our stock, we aim to work with you on a date to suit your needs. We can supply sheets, rolls or fan-folded tags dependent on your requirement. We will help plan upcoming deliveries and ensure you are not in a position where you cannot print a label or tag.",
                            products:[]
                        },
                         
                    ];
                    break;
                case "Tags for Steel and Construction":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/banner_steel.jpg";
                    pageSubHeading = "Heat Resistant Robust tags for Steel, Metals & Construction";
                    detailHtml = `
                    <p>
                    Siva Group has developed a range of durable tags and labels to meet the demands of the Steel, Metals and Construction industries. As we understand the demands placed on labelling in these heavy industries, we aim to match the tag or label to best suit your product or packaging needs. Our manufacturing sites use only the highest quality materials, we are ISO9001:2015 certified across 4 key sites. Our team has been working in these markets for over 25 years.
                    </p>
            `;
                    break;
                default:
                    notPresent = true;
                    break;
            }
        } else {
            notPresent = true;
        }



        if (notPresent === false) {
            $("#breadcrumbTitle").text(breadcrumbTitle);
            $("#pageBanner").html(`
            <img id="pageBanner" class="pageBanner" src=${pageBanner} alt=""></br></br>
            `);
            $("#pageSubHeading").html(pageSubHeading);
            $("#detailHtml").html(detailHtml);

            ProductHtml= "";
            for (let p = 0; p < productCategory.length; p++) {
                let PRODUCT = "";
                PRODUCT = `
                        <div class='container product-details'>
                            <div class='card'>
                                <div class="wrapper">
                                <div class="hoc container clear">
                                    <div style="margin-left:20px;margin-right: 20px;">
                                    <div class="group demo">
                                        <div class="one_third first">
                                        <img class="left-product-image" src="img/products/productpage/Steel.jpg"  alt="">
                                        </div>
                                        <div class="two_third">
                                        <div style="margin-left: 20px;"> 
                                        <p>
                                            ${productCategory[p].desc}
                                        </p>
                                        <p>
                                            <a class="blue-para-hover-green" href="#">Download datasheet</a>
                                        </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="gap">&nbsp;</div>
                                    <div style="margin-left:20px;margin-right: 20px;">
                                    <div class="row align-center background-grey-lighten-4">
                                        <div class="col-1">
                                        <div class="gap">&nbsp;</div>
                                        <span class="product-specs-heading">Type </span><br/><br/>
                                        <span>info</span>
                                        <div class="gap">&nbsp;</div>
                                        </div>
                                        <div class="col-1">
                                        <div class="gap">&nbsp;</div>
                                        <span class="product-specs-heading">Dimensions</span><br/><br/>
                                        <span>info</span>
                                        <div class="gap">&nbsp;</div>
                                        </div>
                                        <div class="col-1">
                                        <div class="gap">&nbsp;</div> 
                                        <span class="product-specs-heading">Sheet Size </span><br/><br/>
                                        <span>info</span>
                                        <div class="gap">&nbsp;</div>
                                        </div>
                                        <div class="col-1">
                                        <div class="gap">&nbsp;</div>
                                        <span class="product-specs-heading">Read Range </span><br/><br/>
                                        <span>info</span>
                                        <div class="gap">&nbsp;</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                </div>
                `;
                ProductHtml += `
                <div id='c_${p}' class='category-title-div card' title='Click to View Category'>
                    <div class='list-div-inner'>
                        <h3 class='list-div-h3'>${productCategory[p].name}</h3>
                    </div>
                </div>
    
                <div id='product_list_c_${p}' class='category-products-list'>
                    ${PRODUCT}
                    <div class='category-div-margin'></div>
                </div>
               
                `;
               
            }

            $("#ProductHtml").html(ProductHtml);

        } else {
            catDetail = `
              <h1 class='theme-color'>Oops!</h1> 
              <h5>Nothing Found.</h5>
            `;
        }

        $("#categoryDiv").html(catDetail);



        $(".category-title-div").click(function () {
            //$(".category-products-list").hide();
            var id = $(this).attr("id");
            //remove all hhighlight class.
            $("#product_list_" + id).toggle(
                //function(){ $("#"+id).addClass("category-title-div-clicked");} 
            );

        });


    } catch (ex) { }

});