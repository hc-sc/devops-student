import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <div id="wb-bnr" class="container">
                <div class="row">
                    <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
                    <h2 class="wb-inv">Language selection</h2>
                    <ul class="list-inline mrgn-bttm-0">
                        <li>
                        <a lang="fr" hreflang="fr" href="#">
                            <span class="hidden-xs">Français</span>
                            <abbr title="Français" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
                        </a>
                        </li>
                    </ul>
                    </section>
                    <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" resource="#wb-publisher" typeof="GovernmentOrganization">
                    <a href="https://www.canada.ca/en.html" property="url">
                        <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg" alt="" property="logo"/><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>
                    </a>
                    <meta property="areaServed" typeof="Country" content="Canada"/>
                    <link property="logo" href="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg"/>
                    </div>
                    <section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
                    <h2>Search</h2>
                    {/* Search bar functionality is currently disabled - needs to be coded in with React. */}
                    <form action="#" method="post" name="cse-search-box" role="search">
                        <div class="form-group wb-srch-qry">
                        <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
                        <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"/>
                        <datalist id="wb-srch-q-ac">
                        </datalist>
                        </div>
                        <div class="form-group submit">
                        <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button>
                        </div>
                    </form>
                    </section>
                </div>
                </div>
                <nav class="gcweb-menu" typeof="SiteNavigationElement">
                <div class="container">
                    <h2 class="wb-inv">Menu</h2>
                    <button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
                    <ul role="menu" aria-orientation="vertical">
                    <li role="presentation"><Link to="/" role="menuitem">Home</Link></li>
                    <li role="presentation"><Link to="/form" role="menuitem">Submit a form</Link></li>
                    <li role="presentation"><a role="menuitem" href="http://localhost:3000/data">View submissions table</a></li>
                    </ul>
                </div>
                </nav>
                <nav id="wb-bc" property="breadcrumb">
                <h2>You are here:</h2>
                <div class="container">
                    <ol class="breadcrumb">
                    <li><a href="https://www.canada.ca/en.html">Canada.ca</a></li>
                    </ol>
                </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;