import React from 'react';
import { useEffect, useState, useRef} from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../assets/css/common/reset.css'
import '../../assets/css/common/common.css'
import '../../assets/css/main/main.css'
import '../../assets/css/common/fontawesome.css'
import '../../assets/css/main/mainBanner.css'
//import MetaTag from "../../routes/SEOMetaTag";




function Main(props) {
    // 메인배너 슬라이드
    let gameName = '';
    useEffect( ()=> {

        const visualSlider = document.getElementById('sync1');
        // 슬라이더 이미지
        const slickTrack = visualSlider.getElementsByClassName('slick-track');
        const slickList = slickTrack[0].getElementsByClassName('slick-slide');
        //console.log(slickTrack)

        // 슬라이더 네비게이션
        const slickDots = visualSlider.querySelectorAll('.slick-dots li');
        const slickDotsBtn = slickDots[0].getElementsByTagName('button');


        for (var i=0; i < slickList.length ; i++ ) {
            if( slickList[i].getAttribute('data-index') >= 0 ) {
                var gameText = slickList[i].getElementsByClassName('logo')[0].getAttribute('alt');
                //slickDots[i].childNodes.innerText = gameText[i];

                const realIndex = Number(slickDots.length + 2) // 앞부분 복제 2개씩
                if( i < realIndex) {
                    const slickBtns = slickDots[i-2].getElementsByTagName('button');

                    //console.log(slickBtns[0].innerText = gameText)
                    slickBtns[0].innerText = gameText;
                }
            }
        }

    },[]);
    const settingsVisual = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: true,
        pauseOnDotsHover: true,
    }
    const StyledSliderVisual = styled(Slider) `
        .slick-dots {
            display:flex; justify-content: center;
            bottom: 0; 
        }
        .slick-dots li {
            width: 12.5%;
            width: calc( 12.5% - 4px); 
            height:60px;
            margin: 0 2px;
            background:rgba(255,255,255,0.6);
        }
        .slick-dots li button {
            position:relative; z-index:2;
            min-width:auto;
            width: 100%; 
            height:100%; 
            border-radius:0px;
            /*background:rgba(255,255,255,0.6);*/    
            font-size: 1rem;
            color: #000;                  
        }
        .slick-dots li.slick-active button , .slick-dots li button:hover {
           /* background: #fff;*/
           
        }
        .slick-dots li button:before {content:none;}
        .slick-dots li:before {
            content:'';
            position:absolute;
            top:0; left:0; 
            width: 0%;   
            height:100%; 
            background: rgba(0,102,204,.7);
             animation: progressBar 3s linear; 
        }
        .slick-dots li.slick-active:before {
            animation: aniProgressBar 3s linear; 
            animation-fill-mode: forwards;
        }
        .slick-list:hover + .slick-dots li:before, .slick-dots li:hover:before {
            animation-play-state: paused;
        }
        
        @-webkit-keyframes slickDot {
            0% {width: 0px}
            100% {width: 100px}
        }
       
    `

    // 포인트샵 슬라이드
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
             <i className="slick-btn-next slick-arrow"  onClick={onClick}></i>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <i className="slick-btn-prev slick-arrow"  onClick={onClick}></i>
        );
    }
    const settingsShop = {
        dots: false,
        //useCSS: true,
        lazyLoad: true,
        autoplay: true,
        //draggable: false,
        touch: false,
        autoplaySpeed: 5000,
        centerMode: false,
        infinite: true, // 양방향 무한 모션 - 트루로 하면 앞쪽이 짤린다.
        slidesToShow: 4,
        pauseOnHover: true,
        // nextArrow: '<i class="slick-btn-next"></i>',
        // prevArrow: '<i class="slick-btn-prev"></i>',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {breakpoint: 1024, settings: {slidesToShow: 3}},
            {breakpoint: 768, settings: {slidesToShow: 2}},
            {breakpoint: 460, settings: {slidesToShow: 1.5}}
        ],
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 랭킹 탭
    const [weekly, setWeekly] = useState(false);

    // 올게임 리스트 토글
    const [AllGameType1, setAllGameType1] = useState(true);

    // vfun videos
    const settingsVideo = {
        dots: false,
        lazyLoad: true,
        autoplay: true,
        touch: false,
        autoplaySpeed: 5000,
        centerMode: false,
        infinite: true, // 양방향 무한 모션 - 트루로 하면 앞쪽이 짤린다.
        slidesToShow: 4,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {breakpoint: 960, settings: {slidesToShow: 3}},
            {breakpoint: 768, settings: {slidesToShow: 2}},
            {breakpoint: 460, settings: {slidesToShow: 1.5}}
        ],
    }
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    // Event +
    function EventNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <span id="event-next" className="cont-nav-next" onClick={onClick}><span className="fa fa-angle-right"></span></span>
        );
    }
    function EventPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <span id="event-prev" className="cont-nav-prev" onClick={onClick}><span className="fa fa-angle-left"></span></span>
        );
    }
    const settingsEvent = {
        slide: 'div',
        dots: false,
        lazyLoad: true,
        autoplay: true,
        touch: false,
        autoplaySpeed: 5000,
        centerMode: false,
        infinite: true, // 양방향 무한 모션 - 트루로 하면 앞쪽이 짤린다.
        slidesToShow: 1,
        pauseOnHover: true,
        nextArrow: <EventNextArrow />,
        prevArrow: <EventPrevArrow />,
        rows:1,
    }

    // News +
    const settingsNews = {
        dots: false,
        lazyLoad: true,
        autoplay: true,
        touch: false,
        autoplaySpeed: 5000,
        centerMode: false,
        infinite: true, // 양방향 무한 모션 - 트루로 하면 앞쪽이 짤린다.
        slidesToShow: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <>
            {/*<MetaTag
                title="메인메인타이틀"
                description="메인설명설명"
                keywords="메인키워드, 메인메인, 메인"
                ogimg="https://file.valofe.com/Valofe_file/web/blacksquad-r2/images/landing/pre_obt/meta_fb-min.jpg"
                twimg="https://file.valofe.com/Valofe_file/web/blacksquad-r2/images/landing/pre_obt/meta_tw-min.jpg"
                url="https://vfun.valofe.com/home"
            />*/}
            <div id="wrapper" className="bg-even clearfix">
                <div id="content" className="clearfix">
                    <section className="visual">
                        <div className="sliderContainer">
                            <div id="sync1" className="slider single-item">
                                <StyledSliderVisual {...settingsVisual}>
                                    {/* map */}
                                    <div
                                        className="click-area">
                                        <img className="img" src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/20220809/62f1f81e810dd.jpg" alt="VFUN Summer Event<br />Higher GRADE, more BONUS Gcoin!" />
                                        <article className="article">
                                            <img className="logo" src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_vfun_white.png" alt="VFUN" />
                                            <span className="tit">
                                                VFUN Summer Event<br />Higher GRADE, more BONUS Gcoin!                                            </span>
                                        </article>
                                    </div>
                                    <div
                                        className="click-area">
                                        <img className="img" src="https://file.valofe.com/Valofe_file/web/vfun-ko/images/game/enroll/o2jam-banner-min.jpg" alt="O2JAM"/>
                                        <article className="article">
                                            <img className="logo"
                                                 src="https://file.valofe.com/Valofe_file/web/vfun-ko/images/game/enroll/o2jam-logo-min.png"
                                                 alt="O2JAM"/>
                                            <span className="tit">
                                                VFUN Summer Event<br />Higher GRADE, more BONUS Gcoin!                                            </span>
                                        </article>
                                    </div>
                                    <div
                                        className="click-area">
                                        <img className="img"
                                             src="https://file.valofe.com/Valofe_file/web/vfun-ko/images/banner/20210927/6151236e26f6a.jpg"
                                             alt="피쉬아일랜드: 정령의 항로"/>

                                        <article className="article">
                                            <img className="logo"
                                                 src="https://file.valofe.com/Valofe_file/web/vfun-ko/images/game/enroll/fishisland-ko-logo-min.png"
                                                 alt="피쉬아일랜드: 정령의 항로"/>
                                            <span className="tit">
                                                VFUN Summer Event<br />Higher GRADE, more BONUS Gcoin!                                            </span>
                                        </article>
                                    </div>
                                    <div
                                        className="click-area">
                                        <img className="img"
                                             src="https://file.valofe.com/Valofe_file/web/vfun-ko/images/banner/20210927/6151236e26f6a.jpg"
                                             alt="피쉬아일랜드: 정령의 항로"/>

                                        <article className="article">
                                            <img className="logo"
                                                 src="https://file.valofe.com/Valofe_file/web/vfun-ko/images/game/enroll/fishisland-ko-logo-min.png"
                                                 alt="블랙스쿼드"/>
                                            <span className="tit">
                                                VFUN Summer Event<br />Higher GRADE, more BONUS Gcoin!                                            </span>
                                        </article>
                                    </div>
                                </StyledSliderVisual>
                            </div>
                        </div>
                    </section>

                    <div className="row-w clearfix see-all-top ">
                        <Link to="#allGame" className="go-to-section smooth-goto" ><span className="fas fa-angle-double-down"></span>&nbsp;All Games</Link>
                    </div>


                    <section className="pointshop">
                        <div className="row-w clearfix">
                            <h1 className="text-left">Point Shop&nbsp;<Link to="/stamp/shop" target="_self" className="main-more">See All Point shop Items&nbsp;<i className="fa fa-angle-right"></i></Link></h1>
                            <div className="wrap-pointshop">
                                <div id="pointShop">
                                    <Slider {...settingsShop}>
                                        {numbers.map((number) => (
                                            <div className="item" key={number}>
                                                <Link to="javascript:void(0);" className="clearfix">
                                                    <div className="game-image pull-left">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/icon_item_at1.png" alt="Recovery Stone (No Trade)"/>
                                                    </div>
                                                    <div className="game-txt pull-right">
                                                        <h4>ATLANTICA Global</h4>
                                                        <h5>Recovery Stone (No Trade)</h5>
                                                        <span className="price"><b>P</b><span>50</span></span>
                                                    </div>
                                                </Link>
                                            </div>
                                        ) )}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="main-cont">
                        <div className="row-w">
                            <div className="hot-game pull-left two-of-third">
                                <h1>
                                    HOTTEST GAME
                                    <Link to="/game/popular_games" target="_self" className="main-more"><i className="fa fa-plus"></i></Link>
                                </h1>
                                <ul className="clearfix">
                                    <li className="mb-style ">
                                        <div className="default clearfix">
                                            <div className="img-area pc">
                                                <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210628/60d96aa163fd7.png" alt="ATLANTICA Global"/>
                                            </div>
                                            <div className="desc">
                                                <h3>ATLANTICA Global</h3>
                                                <p>



                                                    <span className="fa fa-desktop"></span>&nbsp;
                                                    MMORPG                                            </p>
                                                <div className="btn-mb-download download-multi one">                                                         <div className="a-wrap clearfix">
                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-style update">
                                        <div className="default clearfix">
                                            <div className="img-area pc">
                                                <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210712/60ebc2a060a0d.jpg" alt="C9 Global"/>
                                            </div>
                                            <div className="desc">
                                                <h3>C9 Global</h3>
                                                <p>
                                                    <span className="fa fa-desktop"></span>&nbsp;
                                                    MMORPG                                            </p>
                                                <div className="btn-mb-download download-multi one">                                                             <div className="a-wrap clearfix">
                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-style ">
                                        <div className="default clearfix">
                                            <div className="img-area pc">
                                                <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210906/6135ac048781a.jpg" alt="Combat Arms: Reloaded"/>
                                            </div>
                                            <div className="desc">
                                                <h3>Combat Arms: Reloaded</h3>
                                                <p>



                                                    <span className="fa fa-desktop"></span>&nbsp;
                                                    FPS                                            </p>
                                                <div className="btn-mb-download download-multi one">                                                         <div className="a-wrap clearfix">
                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>

                                                </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-style update">
                                        <div className="default clearfix">
                                            <div className="img-area pc">
                                                <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210628/60d95ad761da1.jpg" alt="Riders of Icarus"/>
                                            </div>
                                            <div className="desc">
                                                <h3>Riders of Icarus</h3>
                                                <p>



                                                    <span className="fa fa-desktop"></span>&nbsp;
                                                    MMORPG                                            </p>
                                                <div className="btn-mb-download download-multi one">                                                             <div className="a-wrap clearfix">
                                                    <Link to="javascript:void(0);" className="mb-icon" style={{zIndex:'9990'}}>
                                                        <img src="images/common/icon-desktop.png" alt="desktop Download" name="icon-desktop"/>
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="ranking pull-right one-of-third">
                                <h1>Point Ranking</h1>
                                <ul className="tab-rank clearfix">
                                    <li className={"rank-type _1" + (weekly === true ? " on" : "")}>
                                        <Link to="#" onClick={ () => setWeekly(true)}>Weekly</Link>
                                    </li>
                                    <li className={"rank-type _2" + (weekly === true ? "" : " on")}>
                                        <Link to="#" onClick={ () => setWeekly(false)}>Monthly</Link>
                                    </li>
                                </ul>
                                {
                                    weekly ?
                                        <ol className="rank-list _1 on  clearfix">
                                            <li><span className="rank _1">1</span>&nbsp;<strong className="ellipsis">lawnoob</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _2">2</span>&nbsp;<strong className="ellipsis">skullmarc</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _3">3</span>&nbsp;<strong className="ellipsis">alancccai</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _4">4</span>&nbsp;<strong className="ellipsis">Ver0nka</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _5">5</span>&nbsp;<strong className="ellipsis">agaewaszym7804</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _6">6</span>&nbsp;<strong className="ellipsis">R500ULTRA</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _7">7</span>&nbsp;<strong className="ellipsis">karolinaszym2004</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                            <li><span className="rank _8">8</span>&nbsp;<strong className="ellipsis">lanzalot046</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">4,995</span></div></li>
                                        </ol>
                                        :
                                        <ol className="rank-list _2  on clearfix">
                                            <li><span className="rank _1">1</span>&nbsp;<strong className="ellipsis">aurelus11</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">21,978</span></div></li>
                                            <li><span className="rank _2">2</span>&nbsp;<strong className="ellipsis">RafiStefano</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">21,978</span></div></li>
                                            <li><span className="rank _3">3</span>&nbsp;<strong className="ellipsis">znek777</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">21,978</span></div></li>
                                            <li><span className="rank _4">4</span>&nbsp;<strong className="ellipsis">Ver0nka</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">20,979</span></div></li>
                                            <li><span className="rank _5">5</span>&nbsp;<strong className="ellipsis">agaewaszym7804</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">19,980</span></div></li>
                                            <li><span className="rank _6">6</span>&nbsp;<strong className="ellipsis">hauser2</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">19,980</span></div></li>
                                            <li><span className="rank _7">7</span>&nbsp;<strong className="ellipsis">alaannahueel</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">18,981</span></div></li>
                                            <li><span className="rank _8">8</span>&nbsp;<strong className="ellipsis">Negro_78</strong><div className="pull-right piling"><span className="blit">Points</span><span className="num">18,981</span></div></li>
                                        </ol>
                                }


                            </div>
                        </div>
                    </section>

                    <section className="main-cont all-game" id="allGame">
                        <div className="row-w">
                            <h1>
                                All Games
                                <Link to="#" className={"btn-type _1" + (AllGameType1 === true ? " on" : "")} onClick={()=> setAllGameType1(true)}></Link>
                                <Link to="#" className={"btn-type _2" + (AllGameType1 === true ? "" : " on")} onClick={()=> setAllGameType1(false)}></Link>
                            </h1>
                            {
                                AllGameType1 ?
                                    <div className="all-list _1 on clearfix">
                                        <div className="pc-list">
                                            <h2>PC Games</h2>
                                            <ul className="clearfix">
                                                <li className="update" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210712/60ebc2a117f80.png" alt="C9 Global"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210712/60ebc2a1d373e.png" alt="C9 Global"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>C9 Global</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>C9 Global</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=33" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210420/607e4d04bfad5.png" alt="Dekaron"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210420/607e4d05bafd3.png" alt="Dekaron"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Dekaron</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Dekaron</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=29" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/pc_small_blacksquad-tw-min.jpg" alt="BLACK SQUAD Global"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/20201112/5facf5af24389.png" alt="BLACK SQUAD Global"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>BLACK SQUAD Global</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;FPS</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>BLACK SQUAD Global</h3>
                                                        <p>FPS</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=31" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20210628/60d96aa248961.jpg" alt="ATLANTICA Global"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_at-min.png" alt="ATLANTICA Global"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>ATLANTICA Global</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>ATLANTICA Global</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=8" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=8" target="_self" >
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=8" target="_self" >
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/pc_small_cac-min.jpg" alt="Combat Arms: the Classic"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_cac-min.png" alt="Combat Arms: the Classic"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Combat Arms: the Classic</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;FPS</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Combat Arms: the Classic</h3>
                                                        <p>FPS</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=1" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=1" target="_self" >
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=1" target="_self" >
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="update" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20210628/60d95ad845ecd.jpg" alt="Riders of Icarus"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_ica_na-min.png" alt="Riders of Icarus"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Riders of Icarus</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Riders of Icarus</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=13" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=13" target="_self" >
                                                            Stamp Mission                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20210628/60d969fec2f6e.jpg" alt="ATLANTICA Europe"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_at-min.png" alt="ATLANTICA Europe"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>ATLANTICA Europe</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>ATLANTICA Europe</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=7" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=7" target="_self" >
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=7" target="_self" >
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="update" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/pc_small_gz-gl-min.jpg" alt="Luminary : Rise of the GoonZu"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_gz_gl-min.png" alt="Luminary : Rise of the GoonZu"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Luminary : Rise of the GoonZu</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Luminary : Rise of the GoonZu</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=4" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=4" target="_self">
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=4" target="_self">
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20210906/6135ac058d45f.jpg" alt="Combat Arms: Reloaded"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_car-min.png" alt="Combat Arms: Reloaded"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Combat Arms: Reloaded</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;FPS</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Combat Arms: Reloaded</h3>
                                                        <p>FPS</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=2" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=2" target="_self">
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=2" target="_self">
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20200911/5f5b55be1b1b2.jpg" alt="MU Legend"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_mu-min.png" alt="MU Legend"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>MU Legend</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>MU Legend</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=16" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/pc_game_slot-min.jpg" alt="Real Casino - Free Slots"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_slot-min.png" alt="Real Casino - Free Slots"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Real Casino - Free Slots</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;Casino, Card, Simulated Gambling</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Real Casino - Free Slots</h3>
                                                        <p>Casino, Card, Simulated Gambling</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/detail/realcasino" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20220408/624fe6eedc95a.jpg" alt="N-Age Online"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220331/6245808c9ff34.png" alt="N-Age Online"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>N-Age Online</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>N-Age Online</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=46" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="update" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20220126/61f13d9503aa5.jpg" alt="Bless Unleashed Global"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220125/61ef6849e5242.png" alt="Bless Unleashed Global"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>Bless Unleashed Global</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>Bless Unleashed Global</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=38" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20210628/60d96b4eced18.jpg" alt="アトランティカオンライン"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/main/main_logo_at-min.png" alt="アトランティカオンライン"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>アトランティカオンライン</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;MMORPG</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>アトランティカオンライン</h3>
                                                        <p>MMORPG</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=9" target="_self" className="event">
                                                            Details                                    </Link>
                                                        <Link to="/stamp?type=1&idx=9" target="_self">
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=9" target="_self">
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="update" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/banner/pc_small/20220629/62bbae3025cc9.jpg" alt="王牌对决"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/20220707/62c667ed9086f.png" alt="王牌对决"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>王牌对决</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;Action</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>王牌对决</h3>
                                                        <p>Action</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=49" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="" >
                                                    <div className="normal clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220210/62048279897b8.jpg" alt="R2Beat: 音速觉醒"/>
                                                            <span className="logo"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/logo/20220324/623bda6594c0f.png" alt="R2Beat: 音速觉醒"/></span>
                                                        </div>
                                                        <div className="tit">
                                                            <dl>
                                                                <dt>R2Beat: 音速觉醒</dt>
                                                                <dd><span className="fa fa-desktop"></span>&nbsp;&nbsp;Casual</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="hover clearfix">
                                                        <h3>R2Beat: 音速觉醒</h3>
                                                        <p>Casual</p>
                                                        <Link to="javascript:void(0)" className="event">
                                                            Go to play                                    </Link>
                                                        <Link to="/game/more?idx=41" target="_self" className="event">
                                                            Details                                    </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-list">
                                            <h2>Mobile Games</h2>
                                            <ul className="clearfix">

                                                <li className="update">
                                                    <div className="default clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/game-type1-icam-gl-new-min.jpg" alt="Icarus M: Riders of Icarus"/>
                                                        </div>
                                                        <div className="desc">
                                                            <h3>Icarus M: Riders of Icarus</h3>
                                                            <p>
                                                                <span className="fa fa-android"></span>&nbsp;

                                                                <span className="fa fa-apple"></span>&nbsp;

                                                                MMORPG                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hover-desc clearfix">
                                                        <h3>Icarus M: Riders of Icarus</h3>
                                                        <p>
                                                            <span className="fa fa-android"></span>&nbsp;

                                                            <span className="fa fa-apple"></span>&nbsp;

                                                            MMORPG                                        </p>

                                                        <div className="btn-mb-download download-multi one">                                                     <div className="a-wrap clearfix">
                                                            <Link to="javascript:void(0);"  className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-aos.png" alt="Android Download" name="icon-aos"/>
                                                            </Link>
                                                            <Link to="javascript:void(0);" className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-ios.png" alt="iOS Download" name="icon-ios"/>
                                                            </Link>
                                                        </div>
                                                        </div>
                                                        <Link to="/game/icarusm_global?idx=19" target="_self" className="btn-mb-download">
                                                            Details                                        </Link>
                                                        <Link to="/stamp?type=99&idx=19" target="_self" className="btn-mb-download">
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=19" target="_self" className="btn-mb-download">
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="default clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210224/6035ffed3b240.jpg" alt="Fantasy War Tactics R"/>
                                                        </div>
                                                        <div className="desc">
                                                            <h3>Fantasy War Tactics R</h3>
                                                            <p>
                                                                <span className="fa fa-android"></span>&nbsp;

                                                                <span className="fa fa-apple"></span>&nbsp;

                                                                RPG                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hover-desc clearfix">
                                                        <h3>Fantasy War Tactics R</h3>
                                                        <p>
                                                            <span className="fa fa-android"></span>&nbsp;

                                                            <span className="fa fa-apple"></span>&nbsp;

                                                            RPG                                        </p>

                                                        <div className="btn-mb-download download-multi one">                                                     <div className="a-wrap clearfix">
                                                            <Link to="javascript:void(0);"  className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-aos.png" alt="Android Download" name="icon-aos"/>
                                                            </Link>
                                                            <Link to="javascript:void(0);" className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-ios.png" alt="iOS Download" name="icon-ios"/>
                                                            </Link>
                                                        </div>
                                                        </div>
                                                        <Link to="/game/more?idx=14" target="_self" className="btn-mb-download">
                                                            Details                                        </Link>
                                                        <Link to="/stamp?type=1&idx=14" target="_self" className="btn-mb-download">
                                                            Stamp Mission                                    </Link>
                                                        <Link to="/stamp/shop?game_idx=14" target="_self" className="btn-mb-download">
                                                            Point Shop                                    </Link>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="default clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220221/621377e7343ec.jpg" alt="Raid the Dungeon"/>
                                                        </div>
                                                        <div className="desc">
                                                            <h3>Raid the Dungeon</h3>
                                                            <p>
                                                                <span className="fa fa-android"></span>&nbsp;

                                                                <span className="fa fa-apple"></span>&nbsp;

                                                                RPG                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hover-desc clearfix">
                                                        <h3>Raid the Dungeon</h3>
                                                        <p>
                                                            <span className="fa fa-android"></span>&nbsp;

                                                            <span className="fa fa-apple"></span>&nbsp;

                                                            RPG                                        </p>

                                                        <div className="btn-mb-download download-multi one">                                                     <div className="a-wrap clearfix">
                                                            <Link to="javascript:void(0);"  className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-aos.png" alt="Android Download" name="icon-aos"/>
                                                            </Link>
                                                            <Link to="javascript:void(0);" className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-ios.png" alt="iOS Download" name="icon-ios"/>
                                                            </Link>
                                                        </div>
                                                        </div>
                                                        <Link to="/game/raid_dungeon_gl" target="_self" className="btn-mb-download">
                                                            Details                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="default clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220203/61fb73a14513b.jpg" alt="O2JAM"/>
                                                        </div>
                                                        <div className="desc">
                                                            <h3>O2JAM</h3>
                                                            <p>
                                                                <span className="fa fa-android"></span>&nbsp;


                                                                Casual                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hover-desc clearfix">
                                                        <h3>O2JAM</h3>
                                                        <p>
                                                            <span className="fa fa-android"></span>&nbsp;


                                                            Casual                                        </p>

                                                        <div className="btn-mb-download download-multi one">                                                     <div className="a-wrap clearfix">
                                                            <Link to="javascript:void(0);"  className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-aos.png" alt="Android Download" name="icon-aos"/>
                                                            </Link>
                                                            <Link to="javascript:void(0);" className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-ios.png" alt="iOS Download" name="icon-ios"/>
                                                            </Link>
                                                        </div>
                                                        </div>
                                                        <Link to="/game/more?idx=40" target="_self" className="btn-mb-download">
                                                            Details                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="default clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220316/623198ffded5d.jpg" alt="Icarus M Vietnam"/>
                                                        </div>
                                                        <div className="desc">
                                                            <h3>Icarus M Vietnam</h3>
                                                            <p>
                                                                <span className="fa fa-android"></span>&nbsp;

                                                                <span className="fa fa-apple"></span>&nbsp;

                                                                RPG                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hover-desc clearfix">
                                                        <h3>Icarus M Vietnam</h3>
                                                        <p>
                                                            <span className="fa fa-android"></span>&nbsp;

                                                            <span className="fa fa-apple"></span>&nbsp;

                                                            RPG                                        </p>

                                                        <div className="btn-mb-download download-multi one">                                                     <div className="a-wrap clearfix">
                                                            <Link to="javascript:void(0);"  className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-aos.png" alt="Android Download" name="icon-aos"/>
                                                            </Link>
                                                            <Link to="javascript:void(0);" className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-ios.png" alt="iOS Download" name="icon-ios"/>
                                                            </Link>
                                                        </div>
                                                        </div>
                                                        <Link to="/game/icarusm_vi?idx=44" target="_self" className="btn-mb-download">
                                                            Details                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="default clearfix">
                                                        <div className="img-area">
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20220302/621f45ea5902a.jpg" alt="ちびっこヒーローズ"/>
                                                        </div>
                                                        <div className="desc">
                                                            <h3>ちびっこヒーローズ</h3>
                                                            <p>
                                                                <span className="fa fa-android"></span>&nbsp;

                                                                <span className="fa fa-apple"></span>&nbsp;

                                                                RPG                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hover-desc clearfix">
                                                        <h3>ちびっこヒーローズ</h3>
                                                        <p>
                                                            <span className="fa fa-android"></span>&nbsp;

                                                            <span className="fa fa-apple"></span>&nbsp;

                                                            RPG                                        </p>

                                                        <div className="btn-mb-download download-multi one">                                                     <div className="a-wrap clearfix">
                                                            <Link to="javascript:void(0);"  className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-aos.png" alt="Android Download" name="icon-aos"/>
                                                            </Link>
                                                            <Link to="javascript:void(0);" className="mb-icon">
                                                                <img src="/static/images/common/renewal_icon/icon-ios.png" alt="iOS Download" name="icon-ios"/>
                                                            </Link>
                                                        </div>
                                                        </div>
                                                        <Link to="/game/raid_dungeon_jp" target="_self" className="btn-mb-download">
                                                            Details                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <div className="all-list _2 on clearfix">
                                        <div className="pc-list">
                                            <h2>PC Games</h2>
                                            <ul className="clearfix">
                                                <li className="update">
                                                    <Link to="https://c9-gl.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210712/60ebc29f05b44.png"/>
                                                        C9 Global                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://dekaron.valofe.com/" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210420/607e4d030567c.jpg"/>
                                                        Dekaron                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://blacksquad-gl.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20201112/5facf5ae5fab6.png"/>
                                                        BLACK SQUAD Global                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="http://at.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210628/60d96aa0b6ada.png"/>
                                                        ATLANTICA Global                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://combatarms-c.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/icon_pc_ca_c.png"/>
                                                        Combat Arms: the Classic                                        </Link>
                                                </li>
                                                <li className="update">
                                                    <Link to="http://icarus-na.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210628/60d95ad50406d.png"/>
                                                        Riders of Icarus                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://at-eu.valofe.com/?service_code=at_eu" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210628/60d969fd28b6f.png"/>
                                                        ATLANTICA Europe                                        </Link>
                                                </li>
                                                <li className="update">
                                                    <Link to="http://luminary.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/icon_pc_lu.png"/>
                                                        Luminary : Rise of the GoonZu                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://combatarms-r.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210906/6135ac0399577.png"/>
                                                        Combat Arms: Reloaded                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://mulegend-gl.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20200911/5f5b55b4b52e8.png"/>
                                                        MU Legend                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="http://vfun.valofe.com/game/detail/realcasino" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/icon_web_realcasino_min.jpg"/>
                                                        Real Casino - Free Slots                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://nage-gl.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220331/6245808a911fc.png"/>
                                                        N-Age Online                                        </Link>
                                                </li>
                                                <li className="update">
                                                    <Link to="https://www.blessunleashedpc.com/" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220125/61ef68482ab3b.png"/>
                                                        Bless Unleashed Global                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://at-jp.valofe.com/main" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20210628/60d96b4ce2f79.png"/>
                                                        アトランティカオンライン                                        </Link>
                                                </li>
                                                <li className="update">
                                                    <Link to="https://lostsaga-cn.valofe.com/" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220624/62b518f0c9759.png"/>
                                                        王牌对决                                        </Link>
                                                </li>
                                                <li className="">
                                                    <Link to="https://r2beat-cn.valofe.com" target="_self">
                                                        <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220210/620482784b203.png"/>
                                                        R2Beat: 音速觉醒                                        </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-list">
                                            <h2>Mobile Games</h2>
                                            <ul className="clearfix">

                                                <li className="update">
                                                    <Link to="https://vfun.valofe.com/game/icarusm_global?idx=19" target="_blank"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/icon-mb-icam-gl-new-min.png"/>
                                                        Icarus M: Riders of Icarus                                        </Link>
                                                </li>

                                                <li className="">
                                                    <Link to="https://fwtr.valofe.com" target="_blank"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220314/622f148062247.png"/>
                                                        Fantasy War Tactics R                                        </Link>
                                                </li>

                                                <li className="">
                                                    <Link to="https://vfun.valofe.com/game/raid_dungeon_gl" target="_blank"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220221/621377e660921.png"/>
                                                        Raid the Dungeon                                        </Link>
                                                </li>

                                                <li className="">
                                                    <Link to="https://vfun.valofe.com/game/detail/o2jam" target="_blank"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220203/61fb73a08fefa.png"/>
                                                        O2JAM                                        </Link>
                                                </li>

                                                <li className="">
                                                    <Link to="https://vfun.valofe.com/game/icarusm_vi" target="_blank"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220314/622f50b098070.png"/>
                                                        Icarus M Vietnam                                        </Link>
                                                </li>

                                                <li className="">
                                                    <Link to="https://vfun.valofe.com/game/raid_dungeon_jp" target="_blank"><img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/20220302/621f45e9be76d.png"/>
                                                        ちびっこヒーローズ                                        </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            }
                        </div>
                    </section>

                    <section className="main-cont">
                        <div className="row-w">
                            <div className="youtube-wrapper clearfix">
                                <h1>
                                    VFUN VIDEOS&nbsp;<Link to="https://www.youtube.com/channel/UCBOhYvVCI0InwSoyCWsbPZw/videos" target="_blank" className="main-more"><i className="fa fa-plus"></i></Link>
                                    <div className="pull-right">
                                        <div className="g-ytsubscribe btn-youtube" data-channelid="UCBOhYvVCI0InwSoyCWsbPZw" data-layout="default" data-count="hidden"></div>
                                        <span className="wrap-page-num">
                                    Recently <span className="all-num">6</span>VIDEOS
                                </span>
                                    </div>
                                </h1>

                                <div className="youtube-list clearfix">
                                    <ul className="" id="youtube">
                                        <Slider {...settingsVideo}>
                                            <li>
                                                <div className="wrap-li">
                                                    <Link to="javascript:void(0)" className="btn-play">
                                                        <img src="https://i.ytimg.com/vi/gAYmoByyqRI/mqdefault.jpg" />
                                                    </Link>

                                                    <dl>
                                                        <dt>Super Fantasy War: Mộng Ảo Thánh Chiến Intro Scene</dt>
                                                        <dd>2022-08-23</dd>
                                                    </dl>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="wrap-li">
                                                    <Link to="javascript:void(0)" className="btn-play">
                                                        <img src="https://i.ytimg.com/vi/b7HAbmG6RDA/mqdefault.jpg" />
                                                    </Link>

                                                    <dl>
                                                        <dt>
                                                            [ICARUS M] The Sailor Collection                                                    </dt>

                                                        <dd>2022-08-19</dd>
                                                    </dl>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="wrap-li">
                                                    <Link to="javascript:void(0)" className="btn-play">
                                                        <img src="https://i.ytimg.com/vi/qq5e0UkS90E/mqdefault.jpg" />
                                                    </Link>

                                                    <dl>
                                                        <dt>
                                                            [CAC] Barbara the explorer now available!                                                    </dt>

                                                        <dd>2022-08-16</dd>
                                                    </dl>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="wrap-li">
                                                    <Link to="javascript:void(0)" className="btn-play">
                                                        <img src="https://i.ytimg.com/vi/EanOB6KDEfw/mqdefault.jpg" />
                                                    </Link>

                                                    <dl>
                                                        <dt>
                                                            Atlantica Online: Splash Around this August!                                                    </dt>

                                                        <dd>2022-08-11</dd>
                                                    </dl>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="wrap-li">
                                                    <Link to="javascript:void(0)" className="btn-play">
                                                        <img src="https://i.ytimg.com/vi/s9TiJguGVL0/mqdefault.jpg" />
                                                    </Link>

                                                    <dl>
                                                        <dt>
                                                            The Tiger Hunter: Yubok [Luminary]                                                    </dt>

                                                        <dd>2022-08-10</dd>
                                                    </dl>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="wrap-li">
                                                    <Link to="javascript:void(0)" className="btn-play">
                                                        <img src="https://i.ytimg.com/vi/nj_12lShTx4/mqdefault.jpg" />
                                                    </Link>

                                                    <dl>
                                                        <dt>
                                                            It&#39;s the VFUN Summer Event!                                                    </dt>

                                                        <dd>2022-08-09</dd>
                                                    </dl>
                                                </div>

                                            </li>
                                        </Slider>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="main-cont">
                        <div className="row-w">
                            <div className="pull-left half big-news">
                                <h1>
                                    Event&nbsp;
                                    <Link to="/community/event" target="_self" className="main-more"><i className="fa fa-plus"></i></Link>
                                    <div className="pull-right">
                                        <span className="wrap-page-num" id="eventNum"></span>
                                    </div>
                                </h1>
                                <div id="main-event" className="news-list">
                                    <Slider {...settingsEvent}>
                                        <div className="no-img">
                                            <Link to="#" target="_self">
                                                <div className="news-left">
                                                    <dl>
                                                        <dt>
                                                            <img src="https://file.valofe.com/Valofe_file/web/vfun/images/icon/icon_pc_at_ko.png"/>
                                                            Atlantica Online (NA)
                                                        </dt>
                                                        <dd className="ellipsis-multi line-2">Valkyria's Blessing (August)</dd>
                                                        <dd className="line-4 text">Atlantica Online (NA) Event!</dd>
                                                    </dl>
                                                    <span className="date">2022-08-11</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="has-img event_1">
                                            <Link to="https://forums.valofe.com/forum/icarus-global/news-and-announcements/contests-and-events/64701-pet-capture-fan-art-contest"
                                                  target="_self" tabIndex="0">
                                                <div className="news-right eventRight_1">
                                                    <img src="https://forums.valofe.com/filedata/fetch?id=64702&amp;d=1663739881" />
                                                </div>
                                                <div className="news-left eventLeft_1">
                                                    <dl>
                                                        <dt>
                                                            Riders of ICARUS
                                                        </dt>
                                                        <dd className="ellipsis-multi line-4">
                                                            Pet Capture Fan Art Contest!
                                                        </dd>
                                                    </dl>
                                                    <span className="date">2022-09-21</span>
                                                </div>

                                            </Link>
                                        </div>
                                    </Slider>
                                </div>
                            </div>


                            <div className="box pull-right half small-news">
                                <h1>
                                    News&nbsp;<Link to="/community/news" target="_self" className="main-more"><i className="fa fa-plus"></i></Link>
                                    <div className="pull-right">
                            <span className="wrap-page-num" id="newsNum">
                                <span className="current-num">1</span>/<span className="all-num">5</span>
                            </span>
                                        <div className="cont-nav" id="news-nav">
                                            <span className="nav-prev" id="news-prev"><span className="fa fa-angle-left"></span></span>
                                            <span className="nav-next" id="news-next"><span className="fa fa-angle-right"></span></span>
                                        </div>
                                    </div>
                                </h1>

                                <ul id="main-news" className="news-list">

                                    <li className="has-img news_1" data-dot="1" >
                                        <Link to="https://forums.valofe.com/forum/icarus-global/news-and-announcements/patch-notes/64008-scheduled-maintenance-–-august-24-2022" className="" target="_blank">
                                            <div className="news-top newsTop_1">
                                                <img src="https://forums.valofe.com/filedata/fetch?id=64010&amp;d=1661243417"/></div>
                                            <div className="news-bottom">
                                                <dl className="newsBottom_1">
                                                    <dt>
                                                        Riders of ICARUS                                                    </dt>
                                                    <dd className="ellipsis-multi line-2">
                                                        Scheduled Maintenance – August 24, 2022                                                    </dd>
                                                </dl>
                                                <span className="date">2022-08-23</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="has-img news_2" data-dot="2" >
                                        <Link to="https://forums.valofe.com/forum/mu-legend/official-announcement/news-aa/63962-complete-razer-system-maintenance" className="" target="_blank">
                                            <div className="news-top newsTop_2"><img src="https://forums.valofe.com/filedata/fetch?id=63963&amp;d=1660645026" /></div>
                                            <div className="news-bottom">
                                                <dl className="newsBottom_2">
                                                    <dt>
                                                        MU Legend                                                    </dt>
                                                    <dd className="ellipsis-multi line-2">
                                                        [Complete] Razer System Maintenance                                                    </dd>
                                                </dl>
                                                <span className="date">2022-08-22</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="has-img news_3" data-dot="3" >
                                        <Link to="https://forums.valofe.com/forum/combat-arms-reloaded/official-news-updates-aa/news-aa/63958-​-razer-gold-and-silver-service-downtime-maintenance​" className="" target="_blank">
                                            <div className="news-top newsTop_3"><img src="https://forums.valofe.com/filedata/fetch?id=63959&amp;d=1660894914"/></div>
                                            <div className="news-bottom">
                                                <dl className="newsBottom_3">
                                                    <dt>
                                                        Combat Arms: Reloaded                                                    </dt>
                                                    <dd className="ellipsis-multi line-2">
                                                        ​ Razer Gold and Silver Service Downtime Maintenance​                                                    </dd>
                                                </dl>
                                                <span className="date">2022-08-19</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="has-img news_4" data-dot="4" >
                                        <Link to="https://forums.valofe.com/forum/icarus-global/news-and-announcements/official-news/63954-razer-gold-–-scheduled-system-maintenance-notice" className="" target="_blank">
                                            <div className="news-top newsTop_4"><img src="https://forums.valofe.com/filedata/fetch?id=63955&amp;d=1660654464"/></div>
                                            <div className="news-bottom">
                                                <dl className="newsBottom_4">
                                                    <dt>
                                                        Riders of ICARUS                                                    </dt>
                                                    <dd className="ellipsis-multi line-2">
                                                        RAZER GOLD – Scheduled System Maintenance Notice                                                    </dd>
                                                </dl>
                                                <span className="date">2022-08-19</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="has-img news_5" data-dot="5" >
                                        <Link to="https://forums.valofe.com/forum/mu-legend/official-announcement/news-aa/63952-razer-system-maintenance" className="" target="_blank">
                                            <div className="news-top newsTop_5"><img src="https://forums.valofe.com/filedata/fetch?id=63953&amp;d=1660645026"/></div>
                                            <div className="news-bottom">
                                                <dl className="newsBottom_5">
                                                    <dt>
                                                        MU Legend                                                    </dt>
                                                    <dd className="ellipsis-multi line-2">
                                                        Razer System Maintenance                                                    </dd>
                                                </dl>
                                                <span className="date">2022-08-19</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <input type="hidden" id="rowIdx" name="rowIdx" value="" />
                                <input type="hidden" id="worldKey" name="worldKey" value="" />
                                <input type="hidden" id="serviceCode" name="serviceCode" value="" />
                                <input type="hidden" id="charName" name="charName" value="" />
                                <input type="hidden" id="charKey" name="charKey" value="" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>




        </>
);
}

export default Main;