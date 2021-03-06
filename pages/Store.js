// packages
import Head from 'next/head';
import uuid from 'react-uuid';

// internal
import Product from '../src/components/Product';
import Product_Harp from '../src/components/Product_Harp';
import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';
import StoreCss from '../src/styles/store.css';

const Store = (props) => {
    return (
        <>
        <Head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1" id="snipcart"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            <link type="text/css" href="mysnip.css" rel="stylesheet /"></link>
        </Head>
        <div className='index' style={{height: 'fit-content'}}>
            {/* <PageTitle maintitle='HarpTisha Store ' subtitle='A selection of harps, cds, and preowned music' /> */}
            <h2 className="product-list-header">Preowned Harps</h2>
            <div className="product-list">
                {props.products_harps.map((product, index) => <Product_Harp product={product} key={index}/>)}
            </div>
            <img className= 'divider' src="img/purplegrey_tapered_line.png" style={{width: '100%', maxHeight: '7px'}}/>
            <h2 className="product-list-header">CDs by Tisha Murvihill</h2>
            <div className="product-list" >
                {props.products_cds.map((product, index) => <Product product={product} key={index}/>)}
            </div>
            <img className= 'divider' src="img/purplegrey_tapered_line.png" style={{width: '100%', maxHeight: '7px'}}/>
            <h2 className="product-list-header">Preowned Music</h2>
            <div className="product-list" >
                {props.products_music.map((product, index) => <Product product={product} key={index}/>)}
            </div>
        </div>
        <IndexCss />
        <StoreCss />
        </>
    )
}

Store.getInitialProps = () => {
    return {
        products_harps: [
            {
                id: uuid(), 
                name: "Dusty Strings FH36B", 
                price: 4300.00, 
                image: "static/img/harps/orrDustyStringsFH36B.jpg", 
                description: "Can ship to US or Canada. Contact Tisha to hear and see this extrodinary harp over Zoom/Skype/Facetime. This is an outstanding instrument. Rarely have I heard such a beautiful, even, present sound in an instrument. Built in 1996."
            },
            {
                id: uuid(), 
                name: "Markwood Wire Harp", 
                price: 1600.00, 
                image: "static/img/harps/markwood29standing.jpg", 
                description: "Markwood 29-string bronze wire harp. Can ship to US or Canada. Contact Tisha to see and hear this harp played over Zoom/Skype/Facetime. Take home a classic! Built by Mark Bolles in 1988. The sound of a wire-strung harp takes you immediately to a different time and place. Beautiful cover with real sheepswool lining. Blade levers."
            },
            {
                id: uuid(), 
                name: "Pilgrim Ashdown Harp", 
                price: 1950.00, 
                image: "static/img/harps/pilgrim.jpg", 
                description: "Can ship to US or Canada. 1994 Pilgrim Ashdown harp made in Wales. Price reduced due to structural crack in neck. Purchase at your own risk. Beautiful, mellow, soft, sweet tone. Pilgrim levers have a reversed technology, down is engaged, up is disengaged."
            },
            {
                id: uuid(), 
                name: "Pierpont Irish Style 29 strings", 
                price: 1400.00, 
                image: "static/img/harps/pierpont.jpg", 
                description: "Can ship to US or Canada. Contact seller to see and hear this harp played over Zoom/Skype/Facetime. Nice, big sound. Tuning key, cover, legs included. Legs added by first owner. An excellent instrument!"
            },
            {
                id: uuid(), 
                name: "Lindeman Semi-Grand", 
                price: 1500.00, 
                image: "static/img/harps/Lindeman.jpg", 
                description: "A fixer-upper. This harp is not playable. Can ship to US or Canada. Contact seller to see this historically important harp over Zoom/Skype/Facetime. Gold is flaked off in a few places. Extreme cracking in the sound-board. Can not be pulled up to pitch. Pedals work okay. 44 Strings."
            },
            {
                id: uuid(), 
                name: "Zebrawood 25-string Lap Harp", 
                price: 450.00, 
                image: "static/img/harps/unknownwinset.jpg", 
                description: "A beautiful sounding lap-harp. Significant crack in the neck (see inset). Purchase at your own risk. Partially levered (Cs, Fs). Maker unknown."
            }
        ],   
        products_cds: [
            {
                id: uuid(), 
                name: "If Brahms Wrote For Harp CD", 
                price: 15.00, 
                image: "static/img/cds/IfBrahmsWrote.webp", 
                description: "“Stunning Presentation of the music of Johannes Brahms” - The HarpColumn, Jan. ‘04. 11 Intermezzi and a Rhapsody Arranged and performed by Tisha Murvihill, harp."
            },
            {
                id: uuid(), 
                name: "A Quiet Afternoon CD", 
                price: 15.00, 
                image: "static/img/cds/QuietAfternoon.webp", 
                description: "Winner, Instrumental Album of the Year, GMAC. Fourteen beautiful arrangements of some of our most beautiful worship melodies, including: I Exalt Thee; Oh, How He Loves You and Me; Fairest Lord Jesus; As the Deer; Jesus, Name Above All Names."
            },
            {
                id: uuid(), 
                name: "Come Just As You Are CD", 
                price: 15.00, 
                image: "static/img/cds/ComeJustAs.webp", 
                description: "Nominee, Instrumental Album of the Year, GMAC​​.Come Just As You Are is a follow-up CD to Tisha’s award winning CD, A Quiet Afternoon. The CD features 14 inspirational praise and worship songs including Amazing Grace, Draw Me Close to You, Lord Be Glorified, and You Are My All in All."
            },
        ],  
        products_music: [
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "static/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "static/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "static/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "static/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "static/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            }
        ]   
    }
}
export default Store;
