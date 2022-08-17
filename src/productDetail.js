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
                    pageBanner = "img/products/productpage/banner/Chemical.jpg";
                    pageSubHeading = "Robust labels for hazardous chemicals";
                    detailHtml = `
                        <p>
                          <b>
                          Siva Group are a responsible supplier of labels into the manufacturing sectors that require labelling for hazardous products. Our knowledge on the IMDG and GHS regulations for the identification of these products allow us to offer guidance on best fit solutions for your labelling needs.
                          </b>
                        </p>
                        <p>
                        Our manufacturing sites use only the highest quality materials to ensure that you are labelling up products and packaging in a responsible manner.
                        </p>
                        <p>
                        Printing technology within this sector is rapidly changing as the shift from thermal printers to full colour solutions rapidly increases. At Siva we fully understand the challenges involved and are happy to offer guidance on best fit solutions, to improve efficiencies within your business. 
                        </p>
                        `;
                     productCategory =[
                        {
                            name:"Laser Printable Labels",
                            desc:"Our BS5609 approved materials for printing through dry toner laser or LED printers come in standard sheet sizes and can be ordered from stock for quick turnaround. The face stock may also accept print from some inkjet technologies.<br/><br/> For a specific size/shape that is not available from our stock our aim is to put down future stock so you can avoid any concerns about lead time issues. We can supply sheets, rolls or fan-folded labels dependent on your needs. We will help plan upcoming deliveries and ensure you are not in a position where you cannot print a label.",
                            products:[
                                {
                                    ref: "CHEMLABEL-1",
                                    dimensions: "210mm x 296mm",
                                    format: "1 per A4 Sheet",
                                    printUsing: "Laser Toner Printer (Inkjet maybe)"
                                },
                                {
                                    ref: "CHEMLABEL-2",
                                    dimensions: "210mm x 148mm",
                                    format: "2 per A4 Sheet",
                                    printUsing: "Laser Toner Printer (Inkjet maybe)"
                                },
                                {
                                    ref: "CHEMLABEL-4",
                                    dimensions: "105mm x 148mm",
                                    format: "4 per A4 Sheet",
                                    printUsing: "Laser Toner Printer (Inkjet maybe)"
                                },
                                {
                                    ref: "CHEMLABEL-2",
                                    dimensions: "105mm x 74mm",
                                    format: "2 per A4 Sheet",
                                    printUsing: "Laser Toner Printer (Inkjet maybe)"
                                },
                            ]
                        },{
                            name:"Thermal Transfer Printable Labels",
                            desc:"Lowest print cost still comes from using a thermal transfer printer, some of the popular models include Zebra, Brother, Toshiba, Sato, Cab and TSC.  We have a range of products to suit your packaging and to meet the GHS guidelines on label sizing.  Also finding the best ribbon to overprint the labels is very important, we can help guide and supply you with the best ribbon to ensure that your information stays on the label if stored outside or during the rigors of transportation.",
                            products:[]
                        },{
                            name:"Printer Consumables",
                            desc:"A good quality label that is thermally overprinted needs to be carefully matched to the best ribbon combination, a good combination will ensure the data and warnings printed remain with the label through its journey. We are happy to recommend and supply the most suitable ribbons for our products to ensure that the data stays with the product.",
                            products:[]
                        },
                     ];
                    break;
                case "Horticulture Tags":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/Agriculture.jpg";
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
                            products: []
                        },
                        {
                            "name": "Stick In Tags",
                            "desc": "Stick In's, Pot Pointer's, Pointed-End Labels… again an array of descriptions for a tag that can be inserted into the compost of your pot or tray. They help to identify your plant and share important information to your customer. ",
                            products: []
                        },
                        {
                            "name": "Sticky Labels",
                            "desc": "Labelling pots or trays that are coming into contact with composts, watering and weathering conditions can be challenging. Our self-adhesive “sticky” labels are available in a range of sizes to suit your needs and enable you to add your plant data (passport number, barcodes, descriptions, care instructions, pricing) knowing it will still be legible when the pot arrives with the customer.",
                            products: []
                        },
                        {
                            "name": "Bed Cards",
                            "desc": "A great way to present your stock in a colourful and informative style to help you sell more products. Bed cards can be printed by colour desktop laser printers (OKI, Xerox, Canon, Lexmark etc.). Siva can supply blank media in tag or self-adhesive options to suit your needs.",
                            products: []
                        },
                        {
                            "name": "Customised Tags & Labels",
                            "desc": "For a specific size/shape or a printed tag or label that is not available from our stock, we aim to work with you on a date to suit your needs. We can supply sheets, rolls or fan-folded tags dependent on your requirement. We will help plan upcoming deliveries and ensure you are not in a position where you cannot print a label or tag. <br/><br/> We have a range of stock that is readily available quickly and with a fast turnaround. Our tags are suitable for overprinting by thermal transfer (Toshiba, Zebra, Sato etc.) or desktop laser (OKI, Xerox, Canon, Lexmark etc.). Just be sure to let us know what type of printer you use. Get in touch.",
                            products: []
                        },

                    ];
                    break;
                case "Tags for Steel and Construction":
                    $("meta[name='keywords']").attr('content', 'example keywords');
                    $("meta[name='description']").attr('content', 'example description');
                    pageBanner = "img/products/productpage/banner/Steel.jpg";
                    pageSubHeading = "Heat Resistant Robust tags for Steel, Metals & Construction";
                    detailHtml = `
                            <p>
                                <b>
                                Siva Group have developed a range of durable tags and labels to meet the demands of the Steel, Metals and Construction industries. We understand the demands placed on labelling in these heavy industries, we aim to match the tag or label to best suit your product, process, or packaging needs.
                                </b>
                            </p>
                            <p>
                              Our manufacturing sites use only the highest quality materials, we are ISO9001:2015 certified across 4 key sites. Our team have been working in these markets for over 25 years.
                            </p>
                    `;
                    productCategory = [
                        {
                            name: "RUGGED TAGS - Tough Tags for heavy industry",
                            desc: "Our SIVA-100T is a highly durable and weather resistant HDPE tag. Designed to carry your variable data and to stay with your product whist sitting in stock, then through its journey to your client. Available in different shapes and formats, can be attached with a self-tie loop, a punched hole or with banding slots for strapping. Find more info about SIVA-100T tags download the spec sheet here.",
                            products: [
                                {
                                    ref: "ROLLTAG-1",
                                    dimensions: "100mm x 152mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },
                                {
                                    ref: "ROLLTAG-2",
                                    dimensions: "100mm x 101.6mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },
                                {
                                    ref: "ROLLTAG-3",
                                    dimensions: "76mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },
                                {
                                    ref: "ROLLTAG-4",
                                    dimensions: "90mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                }
                            ]
                        },
                        {
                            name:"SIVA-200T HOT TAGS - Heat resistant tags for up to 240c",
                            desc:"We work with Steel Mills globally to supply tags that can withstand the heat involved with products that are cooling. HOT TAG ‘SIVA-200T’ is ideal for products like Re-bar, Flat Rods, Coiled Rods, Sections, Rounds, Ingots, Bars and Tubes.  Where most tags begin to fail at 80c the SIVA-200T tag can be used up to temperatures approaching 240c. <br/><br/> For more info see our spec sheet for SIVA-200T",
                            products:[
                                {
                                    ref: "HT-200T-1",
                                    dimensions: "100mm x 152mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-200T-2",
                                    dimensions: "100mm x 101.6mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-200T-3",
                                    dimensions: "76mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-200T-4",
                                    dimensions: "90mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },
                            ],
                        },
                        {
                            name:"SIVA-300T HOT TAGS - Heat resistant tags up to 300c",
                            desc:"We work with Steel Mills globally to supply tags that can withstand the heat involved with products that are cooling. HOT TAG ‘SIVA-300T’ is a tag ideal for products like Re-bar, Flat Rods, Coiled Rods, Sections, Rounds, Ingots, Bars and Tubes.  Its triple layered make up allows it to resist temperatures around 300c and slight above dependent on positioning.<br/><br/> For more info see our spec sheet for SIVA-300T",
                            products:[
                                {
                                    ref: "HT-300T-1",
                                    dimensions: "100mm x 152mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-300T-2",
                                    dimensions: "100mm x 101.6mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-300T-3",
                                    dimensions: "76mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-300T-4",
                                    dimensions: "90mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },
                            ],
                        },
                        {
                            name:"SIVA-500T HOT TAGS - Heat resistant tags for temperatures up to 550c",
                            desc:"We work with Steel Mills globally to supply tags that can withstand the heat involved with products that are cooling. Our highest performer is the ‘SIVA-500T’, ideal for products like Blooms, Billets, Slabs, Re-bar, Flat Rods, Coiled Rods, Sections, Rounds, Ingots, Bars and Tubes.  Its Polyimide properties with specialist coating allows it to resist temperatures up to 550c, subject to positioning and cooling profile of the steel/metal.<br/><br/>For more info see our spec sheet for SIVA-500T ",
                            products:[
                                {
                                    ref: "HT-500T-1",
                                    dimensions: "100mm x 152mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-500T-2",
                                    dimensions: "100mm x 101.6mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-500T-3",
                                    dimensions: "76mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },{
                                    ref: "HT-500T-4",
                                    dimensions: "90mm x 127mm",
                                    format: "Rolls of 500, 76mm Core",
                                    printUsing: "Thermal Transfer Printer"
                                },
                            ],
                        },
                        {
                            name:"Laser printable tags",
                            desc:"Popular in distribution facilities are laser printable tags supplied on sheets. These are usually supplied plain or printed with a logo (or CARES details) on reverse. Printable through desktop laser printers such as Lexmark, HP, Canon, OKI, Brother & Sharp. Toner based inks on our temperature resistant polyester is a good combination for durable tagging of your products. We hold the main stock sizes of 4 per sheet, 5 per sheet and 8 per sheet in stock ready for you to call off.<br/><br/>For more info about our SIVA-LT range here.",
                            products:[
                                {
                                    ref: "SIVA-LT4",
                                    dimensions: "210mm x 74mm (40mm tab)",
                                    format: "4/Sheet, Packs of 250 Sheets",
                                    printUsing: "Laser - Toner"
                                },{
                                    ref: "SIVA-LT5",
                                    dimensions: "210mm x 59mm (80mm tab)",
                                    format: "5/Sheet, Packs of 250 Sheets",
                                    printUsing: "Laser - Toner"
                                },{
                                    ref: "SIVA-LT8",
                                    dimensions: "105mm x 74mm (no tab)",
                                    format: "8/Sheet, Packs of 250 Sheets",
                                    printUsing: "Laser - Toner"
                                },
                            ],
                        },
                        {
                            name:"Durable Self-Adhesive Labels",
                            desc:"Labelling products that need to withstand harsh conditions or just external weathering can be difficult. We can guide you to the right solution for your products, with various adhesives to suit different conditions. Labelling hot or cold products is possible with our range of self-adhesive labels. <br/>br/> We are currently developing a range of substrates and adhesives suitable for different surfaces or relevant to heat resistance. Please get in touch to explain your needs so we can guide you.",
                        },
                        {
                            name:"Customized Tags & Labels",
                            desc:"For a specific size/shape or a printed tag or label that is not available from our stock we can manufacture any shape or size within the scope of our presses. We can supply sheets, rolls or fan-folded tags dependent on your requirement. We can supply plain or add print and logos as required. We will help plan upcoming deliveries carefully and ensure you are not in a position where you cannot print a label or tag.",
                        },
                        {
                            name:"Tag Attachments",
                            desc:"When tagging product there is a host of methods for attaching, including clips, stud welding or nailing to product. We can supply attachments suitable for your application.",
                        },
                        {
                            name:"Printer Consumables",
                            desc:"A good tag or label that is thermally overprinted needs to be carefully matched to the best ribbon combination that can also withstand the conditions your product goes through. We are happy to recommend and supply the most suitable ribbons for our products to ensure that the data stays with the product.",
                        }

                    ];
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
                           <div class="row align-center ">
                                <div class="col-1">
                                    <span>${product.ref}</span>
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
                                <div class="row align-center background-grey-lighten-4">
                                    <div class="col-1">
                                    <div class="gap">&nbsp;</div>
                                    <span class="product-specs-heading">REF </span><br/><br/>
                                    </div>
                                    <div class="col-1">
                                    <div class="gap">&nbsp;</div>
                                    <span class="product-specs-heading">DIMENSIONS</span><br/><br/>
                                    </div>
                                    <div class="col-1">
                                    <div class="gap">&nbsp;</div> 
                                    <span class="product-specs-heading">FORMAT</span><br/><br/>
                                    </div>
                                    <div class="col-1">
                                    <div class="gap">&nbsp;</div>
                                    <span class="product-specs-heading">PRINT USING</span><br/><br/>
                                    </div>
                                </div>
                                ${productList}
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
                                        <img class="left-product-image" src="img/products/productpage/Steel.jpg"  alt="">
                                        </div>
                                        <div class="two_third">
                                        <div style="margin-left: 20px;"> 
                                        <p>
                                            ${productCategory[p].desc}
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
            //$(".category-products-list").hide();
            var id = $(this).attr("id");
            //remove all hhighlight class.
            $("#product_list_" + id).toggle(
                //function(){ $("#"+id).addClass("category-title-div-clicked");} 
            );

        });


    } catch (ex) { }

});