import { FcMusic } from "react-icons/fc";
import {BsMusicNote} from "react-icons/bs"
import {IoMusicalNoteOutline} from "react-icons/io5"
const Loading = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "45%",
      zIndex: 99,
    }}
  >
    <div className="waviy">
          <span style={{ "--i": 1 }}><FcMusic/></span>
          <span style={{ "--i": 2 }}><BsMusicNote/></span>
          <span style={{ "--i": 3 }}><IoMusicalNoteOutline/></span>
        </div>
  </div>
);

export default Loading;
