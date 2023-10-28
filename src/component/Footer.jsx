import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
function Footer() {
  return (
    <footer>
      <div>
        <div className="footer">
          <div className="list-footer">
            <ul>
              <h3>Company</h3>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
            <ul>
              <h3>Communities</h3>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
            <ul>
              <h3>Useful links</h3>
              <li>Support</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
          
          <div className="footer-icon">
            <ul>
              <li>
                <a href="https://www.instagram.com/ngoduc.bien/" className="icon">
                  <InstagramOutlined style={{width:'35px', height:'35px',background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FF9A8B)', display:'flex', justifyContent:'center', borderRadius:'50px'}}/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ngobien09" className="icon">
                  <TwitterOutlined style={{width:'35px', height:'35px', background:'#292929', display:'flex', justifyContent:'center', borderRadius:'50px', color:'#33CCFF'}}/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/"className="icon">
                  <FacebookOutlined style={{width:'35px', height:'35px', background:'#292929', display:'flex', justifyContent:'center', borderRadius:'50px', color:'#0099FF	'}}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-bottom">
            <ul>
              <li>Legal</li>
              <li>Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Accessibility</li>
            </ul>
            <p>© 2023 Spotify AB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
