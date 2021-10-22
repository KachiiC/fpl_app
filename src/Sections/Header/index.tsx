// DATA
import DataOverview from "Data/DataOverview"
import { DataObjects } from "Data/Main/Displayed/DisplayedPagesData"
// COMPONENTS
import SiteNavbar from "./SiteNavbar"

const headerData = DataOverview.navbar_data

const SiteHeader = (
    <SiteNavbar
        title={headerData.title}
        data={DataObjects}
        menu_number={headerData.menu_number}
    />
)

export default SiteHeader