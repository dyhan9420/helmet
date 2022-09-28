import React from 'react';
// MetaTag from "../../routes/SEOMetaTag";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../assets/css/common/reset.css'
import '../../assets/css/common/common.css'





function AllGames(props) {
    const params = {

    }

    return (
        <>
            {/*<MetaTag
                title="서브서브타이틀11"
                description="서브설명설명"
                keywords="서브키워드, 서브, 서브"
                ogimg="https://file.valofe.com/Valofe_file/web/meta/meta-fb-fishisland-sea.jpg"
                twimg="https://file.valofe.com/Valofe_file/web/meta/meta-tw-fishisland-sea.jpg"
                url="https://vfun.valofe.com/home"
            />*/}
            <div id="wrapper" className="bg-even clearfix">
                <div id="content" className="clearfix">
                    <section className="sorting-nav">
                        <div className="row-w clearfix">
                            <h1>
                                All Games </h1>
                            <ul>
                                <li className="on" id="all_list"><Link to="#" title="All Games">
                                    <span className="fas fa-list-ul"></span>&nbsp;All</Link></li>
                                <li className="" id="pc_list"><Link to="#" title="PC&nbsp;Game">
                                    <span className="fas fa-desktop"></span></Link></li>
                                <li className="" id="aos_list"><Link to="#" title="Android&nbsp;Game">
                                    <span className="fab fa-android"></span></Link></li>
                                <li className="" id="ios_list"><Link to="#" title="iOS&nbsp;Game">
                                    <span className="fab fa-apple"></span></Link></li>
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

                                        <div className="game-image pull-left ">
                                            <img
                                                src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210628/60d96aa163fd7.png"
                                                alt="ATLANTICA Global" />
                                        </div>
                                        <div className="game-txt pull-right aniInLeft">
                                            <div className="game-desc clearfix">
                                                <div className="pull-left">
                                                    <strong className="game-tit"><Link to="/game/more?idx=8">ATLANTICA
                                                        Global</Link></strong>
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
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li className="close-multi">
                                                                    <Link to="#"><span
                                                                        className="fa fa-times-circle-o"></span></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="desc-right">
                                                        <li>
                                                            <Link to="#" className="btn-download">
                                                                <span
                                                                    className="fa fa-download"></span>&nbsp;&nbsp;Download
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="btn-like">
                                                                &nbsp;&nbsp;<span
                                                                className="fa fa-heart like"></span>&nbsp;&nbsp;Like
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="game-line-cont clearfix">

                                        <div className="game-image pull-left ">
                                            <img
                                                src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210712/60ebc2a060a0d.jpg"
                                                alt="C9 Global" />
                                        </div>
                                        <div className="game-txt pull-right aniInLeft">
                                            <div className="game-desc clearfix">
                                                <div className="pull-left">
                                                    <strong className="game-tit"><Link to="/game/more?idx=33">C9
                                                        Global</Link></strong>
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
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li className="close-multi">
                                                                    <Link to="#"><span
                                                                        className="fa fa-times-circle-o"></span></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="desc-right">
                                                        <li>
                                                            <Link to="#" className="btn-download">
                                                                <span
                                                                    className="fa fa-download"></span>&nbsp;&nbsp;Download
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="btn-like"
                                                               id="like33">
                                                                &nbsp;&nbsp;<span
                                                                className="fa fa-heart like"></span>&nbsp;&nbsp;Like
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="game-line-cont clearfix">

                                        <div className="game-image pull-left ">
                                            <img
                                                src="https://file.valofe.com/Valofe_file/web/vfun/images/thumbnail/game/20210906/6135ac048781a.jpg"
                                                alt="Combat Arms: Reloaded" />
                                        </div>
                                        <div className="game-txt pull-right aniInLeft">
                                            <div className="game-desc clearfix">
                                                <div className="pull-left">
                                                    <strong className="game-tit"><Link to="/game/more?idx=2">Combat Arms:
                                                        Reloaded</Link></strong>
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
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" className="mb-icon">
                                                                        <img
                                                                            src="https://file.valofe.com/Valofe_file/web/vfun/images/common/icon-comm-pc.png"
                                                                            title="PC Download" />
                                                                    </Link>
                                                                </li>
                                                                <li className="close-multi">
                                                                    <Link to="#"><span
                                                                        className="fa fa-times-circle-o"></span></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="desc-right">
                                                        <li>
                                                            <Link to="#" className="btn-download">
                                                                <span
                                                                    className="fa fa-download"></span>&nbsp;&nbsp;Download
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="btn-like">
                                                                &nbsp;&nbsp;<span
                                                                className="fa fa-heart like"></span>&nbsp;&nbsp;Like
                                                            </Link>
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
                                <Link to="#" className="more"
                                   id="more_load_btn"><span className="fa fa-plus-circle"></span>&nbsp;more</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
);
}

export default AllGames;