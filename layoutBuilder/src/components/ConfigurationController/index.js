import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        showContent,
        showLeftNavbar,
        onToggleShowLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  onChange={onChangeContent}
                  checked={showContent}
                />
                <label className="label-text" htmlFor="content">
                  content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="LeftNavbar"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label className="label-text" htmlFor="LeftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="RightNavbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label className="label-text" htmlFor="RightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
