import React from 'react';
import { Helmet } from 'react-helmet-async';
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




function AllGames(props) {
    const params = {

    }

    return (
        <>
            <Helmet>
                <title>서브서브서브타이틀</title>
                <meta name="description" content="서브서브설명설명" />
                <meta name="keywords" content="서브서브키워드, 서브키워드1, 키워드2, 키워드3" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="서브서브타이틀" />
                <meta property="og:site_name" content="서브서브타이틀" />
                <meta property="og:description" content="서브서브설명설명" />
                <meta property="og:image" content="https://file.valofe.com/Valofe_file/web/meta/meta-tw-fishisland-sea.jpg" />
                <meta property="og:url" content="https://vfun.valofe.com/home" />

                <meta name="twitter:title" content="서브서브타이틀" />
                <meta name="twitter:description" content="서브서브설명설명" />
                <meta name="twitter:image" content="https://file.valofe.com/Valofe_file/web/meta/meta-tw-fishisland-sea.jpg" />

                <link rel="canonical" href="https://vfun.valofe.com/home" />
            </Helmet>
            <div id="wrapper" className="bg-even clearfix">
                <div id="content" className="clearfix">
                    <section className="sorting-nav">
                        <div className="row-w clearfix">
                            <h1>
                                All Games </h1>
                            <ul>
                                <li className="on" id="all_list"><a href="javascript:void(0);" title="All Games"
                                                                    onClick="changeType('ALL');"><span
                                    className="fas fa-list-ul"></span>&nbsp;All</a></li>
                                <li className="" id="pc_list"><a href="javascript:void(0);" title="PC&nbsp;Game"
                                                                 onClick="changeType('PC');"><span
                                    className="fas fa-desktop"></span></a></li>
                                <li className="" id="aos_list"><a href="javascript:void(0);" title="Android&nbsp;Game"
                                                                  onClick="changeType('Android');"><span
                                    className="fab fa-android"></span></a></li>
                                <li className="" id="ios_list"><a href="javascript:void(0);" title="iOS&nbsp;Game"
                                                                  onClick="changeType('iOS');"><span
                                    className="fab fa-apple"></span></a></li>
                            </ul>
                        </div>
                    </section>
                    <section className="game-line">
                        <div className="row-w">
                            <h1 className="text-left" id="list_title">
                                All Games </h1>

                            <article className="mt20">
                                {/*  전체게임 리스트 */}
                                <ul id="listView">

                                    <li className="game-line-cont clearfix">

                                        <div className="game-image pull-left "
                                             onClick="window.open('/game/more?idx=8', '_self');">
                                            <img
                                                src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210628/60d96aa163fd7.png"
                                                alt="ATLANTICA Global" />
                                        </div>
                                        <div className="game-txt pull-right aniInLeft">
                                            <div className="game-desc clearfix">
                                                <div className="pull-left">
                                                    <strong className="game-tit"><a href="/game/more?idx=8">ATLANTICA
                                                        Global</a></strong>
                                                    <div className="game-info">
                                                        <span className="genre">MMORPG</span>
                                                        <div className="wrap-device-all">
                                                            <div className="wrap-device desktop"><span
                                                                className="fa fa-desktop"></span><span
                                                                className="device-txt">PC</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="download-multi" id="down_8">
                                                        <div className="wrap-download">
                                                            <ul className="mb-down">
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('7','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('28','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li className="close-multi">
                                                                    <a href="javascript:void(0);"
                                                                       onClick="fnCloseDwMulti();"><span
                                                                        className="fa fa-times-circle-o"></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="desc-right">
                                                        <li>
                                                            <a className="btn-download" href="javascript:void(0);"
                                                               onClick="fnShowDwMulti('down_8')">
                                                                <span
                                                                    className="fa fa-download"></span>&nbsp;&nbsp;Download
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="btn-like" href="javascript:void(0);"
                                                               id="like8" onClick="COMMON.like('8');">
                                                                &nbsp;&nbsp;<span
                                                                className="fa fa-heart like"></span>&nbsp;&nbsp;Like
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="game-line-cont clearfix">

                                        <div className="game-image pull-left "
                                             onClick="window.open('/game/more?idx=33', '_self');">
                                            <img
                                                src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210712/60ebc2a060a0d.jpg"
                                                alt="C9 Global" />
                                        </div>
                                        <div className="game-txt pull-right aniInLeft">
                                            <div className="game-desc clearfix">
                                                <div className="pull-left">
                                                    <strong className="game-tit"><a href="/game/more?idx=33">C9
                                                        Global</a></strong>
                                                    <div className="game-info">
                                                        <span className="genre">MMORPG</span>
                                                        <div className="wrap-device-all">
                                                            <div className="wrap-device desktop"><span
                                                                className="fa fa-desktop"></span><span
                                                                className="device-txt">PC</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="download-multi" id="down_33">
                                                        <div className="wrap-download">
                                                            <ul className="mb-down">
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('86','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe+');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li className="close-multi">
                                                                    <a href="javascript:void(0);"
                                                                       onClick="fnCloseDwMulti();"><span
                                                                        className="fa fa-times-circle-o"></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="desc-right">
                                                        <li>
                                                            <a className="btn-download" href="javascript:void(0);"
                                                               onClick="COMMON.download('86','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe+');">
                                                                <span
                                                                    className="fa fa-download"></span>&nbsp;&nbsp;Download
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="btn-like" href="javascript:void(0);"
                                                               id="like33" onClick="COMMON.like('33');">
                                                                &nbsp;&nbsp;<span
                                                                className="fa fa-heart like"></span>&nbsp;&nbsp;Like
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="game-line-cont clearfix">

                                        <div className="game-image pull-left "
                                             onClick="window.open('/game/more?idx=2', '_self');">
                                            <img
                                                src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210906/6135ac048781a.jpg"
                                                alt="Combat Arms: Reloaded" />
                                        </div>
                                        <div className="game-txt pull-right aniInLeft">
                                            <div className="game-desc clearfix">
                                                <div className="pull-left">
                                                    <strong className="game-tit"><a href="/game/more?idx=2">Combat Arms:
                                                        Reloaded</a></strong>
                                                    <div className="game-info">
                                                        <span className="genre">FPS</span>
                                                        <div className="wrap-device-all">
                                                            <div className="wrap-device desktop"><span
                                                                className="fa fa-desktop"></span><span
                                                                className="device-txt">PC</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="download-multi" id="down_2">
                                                        <div className="wrap-download">
                                                            <ul className="mb-down">
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('2','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('21','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('19','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('20','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0);" className="mb-icon"
                                                                       onClick="COMMON.download('18','https%3A%2F%2Fvfun-cdn.valofe.com%2Fvlauncher%2FVFUNLauncherInstaller.exe');">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </a>
                                                                </li>
                                                                <li className="close-multi">
                                                                    <a href="javascript:void(0);"
                                                                       onClick="fnCloseDwMulti();"><span
                                                                        className="fa fa-times-circle-o"></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="desc-right">
                                                        <li>
                                                            <a className="btn-download" href="javascript:void(0);"
                                                               onClick="fnShowDwMulti('down_2')">
                                                                <span
                                                                    className="fa fa-download"></span>&nbsp;&nbsp;Download
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="btn-like" href="javascript:void(0);"
                                                               id="like2" onClick="COMMON.like('2');">
                                                                &nbsp;&nbsp;<span
                                                                className="fa fa-heart like"></span>&nbsp;&nbsp;Like
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </article>
                        </div>
                        <div className="row-w padding-none">
                            <div className="wrap-btn">
                                <a href="javascript:void(0);" className="more" onClick="readMore('ALL')"
                                   id="more_load_btn"><span className="fa fa-plus-circle"></span>&nbsp;more</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
);
}

export default AllGames;