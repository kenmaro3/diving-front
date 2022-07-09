import React, { FC, useEffect, useState, useRef, ReactNode } from "react";
import "./prefectureselect.scss";
import listenForOutsideClick from "../../utils/listen-for-outside-clicks";
import mapPng from "../../images/map.png";

interface PrefectureSelectProps {
  children?: ReactNode;
  className: string;
  //   functions: Map<string, any>;
  //   user: IUser;
}

const PrefectureSelect: FC<PrefectureSelectProps> = (props) => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [functions, setFunctions] = useState<Map<string, any>>(new Map([]));

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  useEffect(() => {
    //   setFunctions(props.functions)
    //   setUser(props.user)

  }, [props])

  const itemClicked = (key: string) => {
    functions.get(key)()
  }

  return (
    <div ref={menuRef} className={isOpen ? `prefectureSelectContainer -active ${props.className}` : `prefectureSelectContainer ${props.className}`}>
      <div className="inside" onClick={toggle}>
        {props.children}
      </div>
      <div className="containerOutside">
        <div className="containerInside">
          <div className="menuHeader">
            <div className="menuHeaderTitle">エリア絞り込み</div>
            {/* <h4 className="menuHeaderUsername">{user?.user_name}</h4> */}
          </div>
          <div className="itemContainer">
            <div className="japan_map">
              <img src={mapPng} alt="日本地図" />
              <span className="area_btn area1" data-area="1">北海道・東北</span>
              <span className="area_btn area2" data-area="2">関東</span>
              <span className="area_btn area3" data-area="3">中部</span>
              <span className="area_btn area4" data-area="4">近畿</span>
              <span className="area_btn area5" data-area="5">中国・四国</span>
              <span className="area_btn area6" data-area="6">九州・沖縄</span>

              <div className="area_overlay"></div>
              <div className="pref_area">
                <div className="pref_list" data-list="1">
                  <div data-id="1">北海道</div>
                  <div data-id="2">青森県</div>
                  <div data-id="3">岩手県</div>
                  <div data-id="4">宮城県</div>
                  <div data-id="5">秋田県</div>
                  <div data-id="6">山形県</div>
                  <div data-id="7">福島県</div>
                  <div></div>
                </div>

                <div className="pref_list" data-list="2">
                  <div data-id="8">茨城県</div>
                  <div data-id="9">栃木県</div>
                  <div data-id="10">群馬県</div>
                  <div data-id="11">埼玉県</div>
                  <div data-id="12">千葉県</div>
                  <div data-id="13">東京都</div>
                  <div data-id="14">神奈川県</div>
                  <div></div>
                </div>

                <div className="pref_list" data-list="3">
                  <div data-id="15">新潟県‎</div>
                  <div data-id="16">富山県‎</div>
                  <div data-id="17">石川県‎</div>
                  <div data-id="18">福井県‎</div>
                  <div data-id="19">山梨県‎</div>
                  <div data-id="20">長野県‎</div>
                  <div data-id="21">岐阜県</div>
                  <div data-id="22">静岡県</div>
                  <div data-id="23">愛知県‎</div>
                  <div></div>
                </div>

                <div className="pref_list" data-list="4">
                  <div data-id="24">三重県</div>
                  <div data-id="25">滋賀県</div>
                  <div data-id="26">京都府</div>
                  <div data-id="27">大阪府</div>
                  <div data-id="28">兵庫県</div>
                  <div data-id="29">奈良県</div>
                  <div data-id="30">和歌山県</div>
                  <div></div>
                </div>

                <div className="pref_list" data-list="5">
                  <div data-id="31">鳥取県</div>
                  <div data-id="32">島根県</div>
                  <div data-id="33">岡山県</div>
                  <div data-id="34">広島県</div>
                  <div data-id="35">山口県</div>
                  <div data-id="36">徳島県</div>
                  <div data-id="37">香川県</div>
                  <div data-id="38">愛媛県</div>
                  <div data-id="39">高知県</div>
                  <div></div>
                </div>

                <div className="pref_list" data-list="6">
                  <div data-id="40">福岡県</div>
                  <div data-id="41">佐賀県</div>
                  <div data-id="42">長崎県</div>
                  <div data-id="43">熊本県</div>
                  <div data-id="44">大分県</div>
                  <div data-id="45">宮崎県</div>
                  <div data-id="46">鹿児島県</div>
                  <div data-id="47">沖縄県</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default PrefectureSelect