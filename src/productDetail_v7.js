$(document).ready(function () {
    $(".category-products-list").hide();
    
    let productCategory = [];
    let notPresent = false;
    let breadcrumbTitle = pageSubHeading = pageBanner = detailHtml = catDetail = otherData= "";
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
                    pageBanner = "img/products/productpage/banner/chemical-banner.jpg";
                    pageSubHeading = "Robust labels for hazardous chemicals";
                    detailHtml = `
                        <p style='text-align:justify !important'>
                          <b>
                          Siva Group are a responsible supplier of labels into the manufacturing sectors that require labelling for hazardous products. Our knowledge on the IMDG and GHS regulations for the identification of these products allow us to offer guidance on best fit solutions for your labelling needs.
                          </b>
                        </p>
                        <p style='text-align:justify !important'>
                        Our manufacturing sites use only the highest quality materials to ensure that you are labelling up products and packaging in a responsible manner.
                        </p>
                        <p style='text-align:justify !important'>
                        Printing technology within this sector is rapidly changing as the shift from thermal printers to full colour solutions rapidly increases. At Siva we fully understand the challenges involved and are happy to offer guidance on best fit solutions, to improve efficiencies within your business. 
                        </p>
                        `;  
                     productCategory =[
                        {
                            name:"Laser Printable Labels",
                            desc:"Our BS5609 approved materials for printing through dry toner laser or LED printers come in standard sheet sizes and can be ordered from stock for quick turnaround. The face stock may also accept print from some inkjet technologies.<br/><br/> For a specific size/shape that is not available from our stock our aim is to put down future stock so you can avoid any concerns about lead time issues. We can supply sheets, rolls or fan-folded labels dependent on your needs. We will help plan upcoming deliveries and ensure you are not in a position where you cannot print a label.",
                            img:"../img/products/productpage/imgs/Laser-Printable-Labels-01.jpg",
                            products:[]
                        },{
                            name:"Thermal Transfer Printable Labels",
                            desc:"Lowest print cost still comes from using a thermal transfer printer, some of the popular models include Zebra, Brother, Toshiba, Sato, Cab and TSC.  We have a range of products to suit your packaging and to meet the GHS guidelines on label sizing.  Also finding the best ribbon to overprint the labels is very important, we can help guide and supply you with the best ribbon to ensure that your information stays on the label if stored outside or during the rigors of transportation.",
                            img:"../img/products/productpage/imgs/Thermal-Transfer-Printable-Labels-01.jpg",
                            products:[]
                        },{
                            name:"Printer Consumables",
                            desc:"A good quality label that is thermally overprinted needs to be carefully matched to the best ribbon combination, a good combination will ensure the data and warnings printed remain with the label through its journey. We are happy to recommend and supply the most suitable ribbons for our products to ensure that the data stays with the product.",
                            img:"../img/products/productpage/imgs/Printer-Consumables-01.jpg",
                            products:[]
                        },
                     ];
                     otherData=`
                     <br/><br/>
                        <div style="margin-left:20px;margin-right: 20px;">
                            <div class="row">
                                <h3><b>Size guide for GHS Labelling:</b></h3>
                                <div style="width:80% !important">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Container Size</th>
                                                <th>Min Size of GHS Label</th>
                                                <th>Size of Pictograms</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Up to 3 litres</td>
                                                <td>52mm x 74mm if possible</td>
                                                <td>Not smaller than 10mm x 10mm. If possible, at least 16mm x 16mm</td>
                                            </tr>
                                            <tr>
                                                <td>3 litres to 50 litres</td>
                                                <td>74mm x 105mm</td>
                                                <td>At least 23mm x 23mm</td>
                                            </tr>
                                            <tr>
                                                <td>50 litres to 500 litres</td>
                                                <td>105mm x 148mm</td>
                                                <td>At least 32mm x 32mm</td>
                                            </tr>
                                            <tr>
                                                <td>500 litres and over</td>
                                                <td>210mm x 148mm</td>
                                                <td>At least 46mm x 46mm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p style="color:#169e78 !important;">
                                        <i>
                                         **Europe, Singapore & Malaysia guidelines**
                                        </i>
                                    </p>
                                    <p style="">
                                    <img 
                                    src="../img/products/productpage/imgs/GHS-Labelling.jpg" alt="">
                                    </p>

                                </div>
                            </div>
                        </div>
                     `;
                    break;
                case "Horticulture Tags":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/Agriculture.jpg";
                    pageSubHeading = "Tags & Labels for Growers, Nurseries and Garden Centres";
                    detailHtml = `
                            <p style='text-align:justify !important'>
                            Siva Group manufactures and supplies a range of durable tags and labels to meet the demands of Growers, Nurseries and Garden Centre's. We use only the highest quality materials and are ISO9001:2015 certified across 5 key sites.
                            </p>
                            `;
                    productCategory = [
                        {
                            "name": "Loop Lock Tags",
                            "desc": "Loop Locks, Self-Ties, Tie-Wraps, Wrap Around labels… whatever you call them we make them. Ideal for identifying your plants through their journey from greenhouse to garden or home.",
                            img:"",
                            products: []
                        },
                        {
                            "name": "Stick In Tags",
                            "desc": "Stick In's, Pot Pointer's, Pointed-End Labels… again an array of descriptions for a tag that can be inserted into the compost of your pot or tray. They help to identify your plant and share important information to your customer. ",
                            img:"",
                            products: []
                        },
                        {
                            "name": "Sticky Labels",
                            "desc": "Labelling pots or trays that are coming into contact with composts, watering and weathering conditions can be challenging. Our self-adhesive “sticky” labels are available in a range of sizes to suit your needs and enable you to add your plant data (passport number, barcodes, descriptions, care instructions, pricing) knowing it will still be legible when the pot arrives with the customer.",
                            img:"",
                            products: []
                        },
                        {
                            "name": "Bed Cards",
                            "desc": "A great way to present your stock in a colourful and informative style to help you sell more products. Bed cards can be printed by colour desktop laser printers (OKI, Xerox, Canon, Lexmark etc.). Siva can supply blank media in tag or self-adhesive options to suit your needs.",
                            img:"",
                            products: []
                        },
                        {
                            "name": "Customised Tags & Labels",
                            "desc": "For a specific size/shape or a printed tag or label that is not available from our stock, we aim to work with you on a date to suit your needs. We can supply sheets, rolls or fan-folded tags dependent on your requirement. We will help plan upcoming deliveries and ensure you are not in a position where you cannot print a label or tag. <br/><br/> We have a range of stock that is readily available quickly and with a fast turnaround. Our tags are suitable for overprinting by thermal transfer (Toshiba, Zebra, Sato etc.) or desktop laser (OKI, Xerox, Canon, Lexmark etc.). Just be sure to let us know what type of printer you use. Get in touch.",
                            img:"",
                            products: []
                        },

                    ];
                    otherData=``;
                    break;
                case "Steel-Metals-and-Construction":
                    breadcrumbTitle = "Steel, Metals & Construction";
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/Steel1.jpg";
                    pageSubHeading = "Durable tags & labels to meet challenging environments in heavy industries";
                    detailHtml = `
                            <p style='text-align:justify !important'>
                                <b>
                                SIVA has developed a range of durable tags and labels to meet the demands of the Steel, Metals and Construction industries. We understand the demands placed on labelling in these heavy industries and we aim to match the tag or label to best suit your product, process, or packaging needs.
                                </b>
                            </p>
                            <p style='text-align:justify !important'>
                            Our manufacturing sites use only the highest quality materials, we are ISO9001:2015 certified across 4 key sites. Our team have been working in these markets for over 25 years.
                            </p>
                    `;
                    productCategory = [
                        {
                            name: "SIVA-100T - Heavy Duty Industrial Tags",
                            desc: "Our SIVA-100T is a highly durable and weather resistant tag made from a special white film. Designed to carry your variable data and to stay with your product whist sitting in stock, then through its journey to your client. Available in different shapes and formats, can be attached with a self-tie loop, a punched hole or with banding slots for strapping.<br/><br/> <a href='contactus.html'>For more info about SIVA-100T tags, get in touch with us</a>",
                            img:"../img/products/productpage/imgs/1/1.png",
                            products: []
                        },
                        {
                            name:"SIVA-HT200T - Heat Resistant Heavy Duty Tags",
                            desc:"We work with Steel Mills globally to supply tags that can withstand the heat involved with products that are cooling. HOT TAG ‘SIVA-HT200T’ is ideal for products like Re-bar, Flat Rods, Coiled Rods, Sections, Rounds, Ingots, Bars and Tubes. Where most tags begin to fail at 80°C the SIVA-HT200T tag can be used up to temperatures approaching 240°C.<br/><br/> <a href='contactus.html'>For more info about SIVA-HT200T tags, get in touch with us</a>",
                            img:"../img/products/productpage/imgs/1/2.jpg",
                            products:[],
                        },
                        {
                            name:"SIVA-HT300T - Heat Resistant Heavy Duty Tags",
                            desc:"We work with Steel Mills globally to supply tags that can withstand the heat involved with products that are cooling. HOT TAG ‘SIVA-HT300T’ is a tag ideal for products like Re-bar, Flat Rods, Coiled Rods, Sections, Rounds, Ingots, Bars and Tubes. It's triple layered make up allows it to resist temperatures around 300°C and slightly above, dependent on the positioning.<br/><br/> <a href='contactus.html'>For more info about SIVA-HT300T tags, get in touch with us</a>",
                            img:"../img/products/productpage/imgs/1/3.jpg",
                            products:[],
                        },
                        {
                            name:"SIVA-HT500T - High Temperature Heavy Duty Tags",
                            desc:"We work with Steel Mills globally to supply tags that can withstand the heat involved with products that are cooling. Our highest performer is the ‘SIVA-HT500T’, ideal for products like Blooms, Billets, Slabs, Re-bar, Flat Rods, Coiled Rods, Sections, Rounds, Ingots, Bars and Tubes. Its Polyimide properties with specialist coating allow it to resist temperatures up to 550°C, subject to the positioning and cooling profile of the steel/metal.<br/><br/> <a href='contactus.html'>For more info about SIVA-HT500T tags, get in touch with us</a>",
                            img:"../img/products/productpage/imgs/1/4.jpg",
                            products:[],
                        },
                        {
                            name:"STC-LTX - Laser Printable Durable Sheet Fed Tags",
                            desc:"Popular in distribution facilities, laser printable tags are supplied on sheets. These are usually supplied plain or printed with a logo (or CARES details) on the reverse. Printable through desktop laser printers such as Lexmark, HP, Canon, OKI, Brother & Sharp. Toner based inks on our temperature resistant polyester are a good combination for durable tagging of your products. We hold the main stock sizes of 4 per sheet, 5 per sheet and 8 per sheet in stock ready for you to call off.<br/><br/> <a href='contactus.html'>For more info about our SIVA-LT tags, get in touch with us</a>",
                            img:"../img/products/productpage/imgs/1/5.jpg",
                            products:[],
                        },
                        {
                            name:"Durable Self-Adhesive Labels",
                            desc:"Labelling products that need to withstand harsh conditions or just external weathering can be difficult. We can guide you to the right solution for your products, with various adhesives to suit different conditions. Labelling hot or cold products is possible with our range of self-adhesive labels.<br/><br/>We are currently developing a range of substrates and adhesives suitable for different surfaces or relevant to heat resistance. Please get in touch to explain your needs so we can guide you.",
                            img:"../img/products/productpage/imgs/1/6.jpg",
                        },
                        {
                            name:"Customized Tags & Labels",
                            desc:"For a specific size/shape or a printed tag or label that is not available from our stock we can manufacture any shape or size within the scope of our presses. We can supply sheets, rolls or fan-folded tags dependent on your requirement. We can supply plain or add print and logos as required. We will help plan upcoming deliveries carefully and ensure you are not in a position where you cannot print a label or tag.",
                            img:"../img/products/productpage/imgs/1/7.jpg",
                        },
                        {
                            name:"Tag Attachments",
                            desc:"When tagging product there is a host of methods for attaching, including clips, stud welding or nailing to product. We can supply attachments suitable for your application.",
                            img:"../img/products/productpage/imgs/1/8.jpg",
                        },
                        {
                            name:"Printer Consumables",
                            desc:"A good tag or label that is thermally overprinted needs to be carefully matched to the best ribbon combination that can also withstand the conditions your product goes through. We are happy to recommend and supply the most suitable ribbons for our products to ensure that the data stays with the product.",
                            img:"../img/products/productpage/imgs/1/9.jpg",
                        }

                    ];
                    otherData=``;
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

            ProductHtml = "";
            for (let p = 0; p < productCategory.length; p++) {
                let PRODUCT = "";

                let productList = "";
                let productTable="";
                if (productCategory[p].products) {
                    try {
                        for (let product of productCategory[p].products) {
                            let pListRow = `
                           <div class="row align-center">
                                <div class="col-1">
                                  <a href="">
                                  <img src="../img/datasheet-icon.png" style="height:20px;width:20px"/>
                                  <span>${product.ref}</span>
                                  </a>  
                                </div>
                                <div class="col-1">
                                    <span>${product.dimensions}</span>
                                </div>
                                <div class="col-1">
                                    <span>${product.format}</span>
                                </div>
                                <div class="col-1">
                                    <span>${product.printUsing}</span>
                                </div>
                            </div>
                           `;
                            productList += pListRow;
                        }

                        if(productCategory[p].products.length>0){
                            productTable = `
                            <div style="margin-left:20px;margin-right: 20px;">
                                <div class="row align-center background-grey-lighten-2">
                                    <div class="col-1">
                                    <div class="gap-1">&nbsp;</div>
                                    <span class="product-specs-heading">REF </span>
                                    <div class="gap-1">&nbsp;</div>
                                    </div>
                                    <div class="col-1">
                                    <div class="gap-1">&nbsp;</div>
                                    <span class="product-specs-heading">DIMENSIONS</span>
                                    </div>
                                    <div class="col-1">
                                    <div class="gap-1">&nbsp;</div>
                                    <span class="product-specs-heading">FORMAT</span>
                                    </div>
                                    <div class="col-1">
                                    <div class="gap-1">&nbsp;</div>
                                    <span class="product-specs-heading">PRINT USING</span>
                                    </div>
                                </div>
                                <div style="margin-top:-20px !important;">
                                ${productList}
                                </div>
                               
                            </div>
                        `;
                        }

                       
                    } catch (ex) { }
                }

                PRODUCT = `
                        <div class='container product-details'>
                            <div class='card'>
                                <div class="wrapper">
                                <div class="hoc container clear">
                                    <div style="margin-left:20px;margin-right: 20px;">
                                    <div class="group demo">
                                        <div class="one_third first">
                                        <img class="left-product-image" src=${productCategory[p].img}  alt="">
                                        </div>
                                        <div class="two_third">
                                        <div style=""> 
                                        <p style='text-align:justify !important;color:#424242 !important'>
                                            <b>
                                            ${productCategory[p].desc}
                                            </b>
                                        </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="gap">&nbsp;</div>
                                     ${productTable}
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

            ProductHtml+=otherData;

            $("#ProductHtml").html(ProductHtml);

        } else {
            catDetail = `
              <h1 class='theme-color'>Oops!</h1> 
              <h5>Nothing Found.</h5>
            `;
        }

        $("#categoryDiv").html(catDetail);
        $(".category-products-list").hide();


        $(".category-title-div").click(function () {
            var id = $(this).attr("id");
            //remove all hhighlight class.
            $("#product_list_" + id).toggle();
        });


    } catch (ex) { }

});