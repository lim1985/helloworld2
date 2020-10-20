<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
  <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->

  <div>
    <div v-show="showHome" class="header">
      <van-row>
        <van-col style="text-align: left; line-height: 10px" span="24">
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
          -->
          <!-- {{fullWidth}}{{UA}}- -->

          <!-- http://info.dxzc.gov.cn/images/2020/7/header.jpg -->
          <!-- <span>    <img alt="Vue logo" width="100%" src="../../assets/C_header.jpg" /></span> -->
          <span>
            <img
              alt="Vue logo"
              width="100%"
              src="http://info.dxzc.gov.cn/images/2020/7/header.jpg"
            />
          </span>
        </van-col>
      </van-row>
      <van-row v-if="false">
        <van-col style="text-align: left" offset="1" span="9">
          <!-- <span style="color: red;">
                        <van-icon class="icon iconfont icon-zhiyuanfuwu-01" class-prefix='icon'  />
          </span>-->
          <div>
            <h2>
              我是志愿者
              <span>
                <van-icon
                  class="icon iconfont icon-zhiyuanfuwu-01"
                  class-prefix="icon"
                />
              </span>
            </h2>
          </div>
          <!-- <h2> <van-icon class="icon iconfont icon-zhiyuanfuwu-01" class-prefix='icon'  />我是志愿者</h2> -->
          <!-- <span>{{ tt }}</span> -->

          <!-- <br>
         <span>{{ nitev.length }}</span>
         <br>
          <span>{{ nitev }}</span>-->
        </van-col>
        <van-col style="text-align: left" span="11">
          <div
            style="
              margin-block-start: 1.83em;
              margin-block-end: 1.13em;
              margin-inline-start: 6em;
              margin-inline-end: 0px;
            "
          >
            <span>
              <b>积分</b>
            </span>
            <span style="margin-inline-start: 0.5em">0</span>
          </div>
        </van-col>
        <van-col style="text-align: left" span="3">
          <div
            style="
              margin-block-start: 1.63em;
              margin-block-end: 1.13em;
              margin-inline-start: 0em;
              margin-inline-end: 0px;
            "
          >
            <span class="arrowText">
              <van-icon name="question-o" />
            </span>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <!-- <van-col
          style="text-align: left;"  span="3">
          <div style="margin-block-start:0em;
    margin-block-end:0em;
    margin-inline-start:0em;
    margin-inline-end: 0px;">

                    <span style="padding: 0px 20px;color: red;">
                        <van-icon class="icon iconfont icon-zhiyuanfuwu-01" class-prefix='icon'  />
                        </span> 
    </div>
    
        </van-col>-->
      </van-row>
      <van-row>
        <van-col style="text-align: left" offset="1" span="14">
          <div @click="showxzqh()">
            <div style="float: left">
              <h2>{{ villageName }}</h2>
            </div>
            <div style="line-height: 56px">
              <van-icon :name="'arrow-' + arrow" />
            </div>

            <!-- <h2>曹婆井社区<div style="float: left;margin-right: 115px;line-height: 30px;"> <van-icon name="arrow-down" /> </div> </h2> -->
            <!-- <span style="   
              font-size: 1.5em;
              margin-block-start: 0.83em;
              margin-block-end: 0.83em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
            font-weight: bold;">曹婆井社区 </span><span> <van-icon name="arrow-down" />  </span>-->
          </div>
        </van-col>

        <van-col style="text-align: left" span="9">
          <div class="textleft">
            <div>
              <van-row>
                <van-col style="text-align: right" span="16">
                  <span @click="getView('Villageinfo')" style="color: #c0c4cc"
                    >村社区介绍</span
                  >
                </van-col>
                <van-col
                  style="text-align: left; border-right: 1px solid #f2f6fc"
                  span="8"
                >
                  <span class="arrowText">
                    <van-icon name="arrow" />
                  </span>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- <van-row>
        <van-col>
          <div>{{loginInfo}}</div>
        </van-col>
      </van-row>-->
      <van-row>
        <van-col style="text-align: left; padding: 0 12px" span="24">
          <div class="content_1">
            <van-row>
              <van-col
                style="text-align: left; border-right: 1px solid #f2f6fc"
                span="8"
              >
                <div class="content_2">
                  <van-row>
                    <van-col span="14">
                      <span>{{ villagecountPersion }}</span>
                      <br />
                      <span style="color: #323233">居民</span>
                    </van-col>
                    <van-col span="10">
                      <div class="icon_left">
                        <van-icon name="friends" />
                      </div>
                    </van-col>
                  </van-row>
                </div>
              </van-col>
              <van-col
                style="text-align: left; border-right: 1px solid #f2f6fc"
                span="8"
              >
                <div class="content_2">
                  <van-row>
                    <van-col span="14">
                      <span>{{ dangyuanCount }}</span>
                      <br />
                      <span style="color: #323233">党员</span>
                    </van-col>
                    <van-col span="10">
                      <div class="icon_right">
                        <van-icon name="manager" />
                      </div>
                    </van-col>
                  </van-row>
                </div>
              </van-col>
              <van-col
                style="text-align: left; border-right: 1px solid #f2f6fc"
                span="8"
              >
                <div @click="showlist('communitylist')" class="content_2">
                  <van-row>
                    <van-col span="14">
                      <span>{{ zhiyuanzheCount }}</span>
                      <br />
                      <span style="color: #323233">志愿者</span>
                    </van-col>
                    <van-col span="10">
                      <div class="icon_left">
                        <van-icon
                          class="icon iconfont icon-zhiyuanfuwu-01"
                          class-prefix="icon"
                        />
                      </div>
                    </van-col>
                  </van-row>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col style="text-align: left" offset="1" span="14">
          <h2>村社通告</h2>
        </van-col>
        <van-col style="text-align: left" span="9">
          <div class="textleft">
            <div>
              <van-row>
                <van-col style="text-align: right" span="16">
                  <span style="color: #c0c4cc">村社区通告</span>
                </van-col>
                <van-col
                  style="text-align: left; border-right: 1px solid #f2f6fc"
                  span="8"
                >
                  <span class="arrowText">
                    <van-icon name="arrow" />
                  </span>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
        <!-- <van-col
          style="text-align:left;"  span="6">          
          <div class="textleft">
            <div>
              <span>
               更多通知 
              </span>
                <span class="arrowText">
                  <van-icon style="padding-left:2px;" name="arrow" />        
              </span>
          
            </div> 
           
           </div> 
        </van-col>-->
      </van-row>
      <van-row>
        <van-col style="text-align: left" offset="1" span="22">
          <van-swipe :autoplay="3000" :show-indicators="false">
            <template>
              <van-swipe-item
                class="my_swipe_item"
                v-for="(item, index) in publicNoticeList"
                :key="index"
              >
                <div
                  @click="getView('publicNotice', index)"
                  class="tongzhiList"
                >
                  <span>{{ `“${item.publicNoticeTitle}”` }}</span>
                </div>
              </van-swipe-item>
            </template>
          </van-swipe>
        </van-col>
        <van-col style="text-align: left" span="1"></van-col>
      </van-row>
      <van-row>
        <van-col style="text-align: left" offset="1" span="10">
          <h2>群众直通车</h2>
        </van-col>
      </van-row>
      <van-row style="padding-left: 3.2%">
        <van-col style="text-align: left" span="8">
          <!-- <van-button icon="star-o" type="primary">按钮</van-button> -->
          <div class="buttons">
            <van-button
              icon="comment"
              @click="
                go('https://ztclets.daxiang.gov.cn/#/pages/keyappeal/index')
              "
              plain
              type="danger"
              >事件上报</van-button
            >
          </div>
        </van-col>
        <van-col style="text-align: left" span="8">
          <!-- <van-button icon="star-o" type="primary">按钮</van-button> -->
          <div class="buttons">
            <van-button
              icon="service"
              @click="
                go(
                  'https://ztclets.daxiang.gov.cn/#/pages/infosquare/list/index?moduleType=claimTracking'
                )
              "
              plain
              hairline
              type="primary"
              >事件追踪</van-button
            >
          </div>
        </van-col>
        <van-col style="text-align: left" span="8">
          <!-- <van-button icon="star-o" type="primary">按钮</van-button> -->
          <div class="buttons">
            <van-button
              icon="todo-list"
              @click="
                go(
                  'https://ztclets.daxiang.gov.cn/#/pages/infosquare/list/index?moduleType=applyTodo'
                )
              "
              plain
              hairline
              type="info"
              >申请代办</van-button
            >
          </div>
        </van-col>
      </van-row>
      <!-- 附近网格员 -->
      <van-row v-if="shownativeItude">
        <van-col style="text-align: left" offset="1" span="14">
          <h2>附近的网格员</h2>
        </van-col>
        <van-col style="text-align: left" span="9">
          <div class="textleft">
            <div>
              <van-row>
                <van-col style="text-align: right" span="16">
                  <span style="color: #c0c4cc">刷新网格员</span>
                </van-col>
                <van-col
                  style="text-align: left; border-right: 1px solid #f2f6fc"
                  span="8"
                >
                  <span class="arrowText">
                    <van-icon name="location" />
                  </span>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row>
      <!--网格员信息获取 http://172.22.255.15:8080/media/mediaManage/findGridMember.action?departmentNo=430503001003004 -->
      <!--网格员编号： 430503001003001；430503001003002；430503001003003；430503001003004 -->
      <van-row v-if="shownativeItude">
        <van-col style="text-align: left" span="24">
          <!-- <van-button icon="star-o" type="primary">按钮</van-button> -->
          <div class="content_3">
            <div class="userinfo">
              <van-row>
                <van-col style="text-align: left" span="5">
                  <div class="User">
                    <van-image
                      round
                      width="3.5rem"
                      height="3.5rem"
                      fit="cover"
                      :src="`${lonlatInfo.headerUrl}`"
                    />
                    <!-- 
                          lonlatInfo:{
       departmentNo:'',
       fullOrgName:'',
       OrgName:'',
       OrgUserName:'',
       mobile:'',
       headerUrl:''
                    },-->
                    <!-- <img :src="`${hostName+'/'+MywangGe.imgurl}`"/>
                    <van-icon name="award" />-->
                  </div>
                </van-col>
                <van-col style="text-align: left; padding-top: 5px" span="19">
                  <van-row>
                    <van-col style="text-align: left" span="6">
                      <div>
                        <span>{{ lonlatInfo.OrgUserName }}</span>
                      </div>
                    </van-col>
                    <van-col style="text-align: left" span="16">
                      <div>
                        <van-tag
                          round
                          style="color: #409eff; background-color: aliceblue"
                          >网格员</van-tag
                        >
                      </div>
                    </van-col>
                  </van-row>
                  <van-row>
                    <van-col style="text-align: left" span="12">
                      <div>
                        <span>{{ lonlatInfo.OrgName }}</span>
                      </div>
                    </van-col>

                    <van-row style="padding-bottom: 5px">
                      <van-col style="text-align: left" span="12">
                        <div style="line-height: 18px">
                          <van-row>
                            <van-col style="text-align: left" span="24">
                              <div style="float: right">
                                <van-button
                                  plain
                                  icon="phone"
                                  @click="tel(lonlatInfo.mobile)"
                                  size="small"
                                  type="info"
                                  >一键呼叫</van-button
                                >
                              </div>
                            </van-col>
                          </van-row>
                        </div>
                      </van-col>
                    </van-row>
                  </van-row>
                </van-col>
              </van-row>
              <van-row>
                <van-col style="text-align: left; padding-top: 5px" span="24">
                  <van-divider />
                  <van-row>
                    <van-col
                      style="text-align: left; padding-top: 5px"
                      span="24"
                    >
                      <div>{{ lonlatInfo.fullOrgName }}</div>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- end 网格员 -->
      <!-- <van-row>
        <van-col style="text-align: left;" offset="1" span="14">
          <h2>我的网格员</h2>
        </van-col>
        <van-col style="text-align: left;" span="9">
          <div class="textleft">
            <div>
              <van-row>
                <van-col style="text-align: right;" span="16">
                  <span style="color:#C0C4CC;">切换网格</span>
                </van-col>
                <van-col style="text-align: left;border-right: 1px solid #F2F6FC;" span="8">
                  <span class="arrowText">
                    <van-icon name="arrow" />
                  </span>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
    
      </van-row> -->
      <!--网格员信息获取 http://172.22.255.15:8080/media/mediaManage/findGridMember.action?departmentNo=430503001003004 -->
      <!--网格员编号： 430503001003001；430503001003002；430503001003003；430503001003004 -->
      <!-- <van-row>
        <van-col style="text-align: left;" span="24">
     
          <div class="content_3">
            <div class="userinfo">
              <van-row>
                <van-col style="text-align: left;" span="5">
                  <div class="User">
                    <van-image
                      round
                      width="3.5rem"
                      height="3.5rem"
                      fit="cover"
                      :src="`${hostName+'/'+MywangGe.imgurl}`"
                    />
                  
                  </div>
                </van-col>
                <van-col style="text-align: left;padding-top: 5px;" span="19">
                  <van-row>
                    <van-col style="text-align: left;" span="6">
                      <div>
                        <span>{{ MywangGe.username}}</span>
                      </div>
                    </van-col>
                    <van-col style="text-align: left;" span="16">
                      <div>
                        <van-tag round style="color:#409EFF;background-color: aliceblue;">网格员</van-tag>
                      </div>
                    </van-col>
                  </van-row>
                  <van-row>
                    <van-col style="text-align: left;" span="16">
                      <div>
                        <span>{{ MywangGe.wgName}}</span>
                      </div>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row>
                <van-col style="text-align: left;padding-top: 5px;" span="24">
                  <van-divider />
                  <van-row>
                    <van-col style="text-align: left;padding-top: 5px;" span="12">
                      <div>大祥区街道办事处</div>
                    </van-col>
                    <van-col style="text-align: right;padding-top: 5px;" span="12">
                      <div>
                        <div style="color:#409EFF">
                          <span>进入网格群</span>
                          <span class="arrowText">
                            <van-icon style="padding-left:2px;" name="arrow" />
                          </span>
                        </div>
                      </div>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row> -->
      <van-row>
        <van-col style="padding: 15px 15px 0 15px">
          <span>
            <img
              alt="Vue logo"
              style="border-radius: 5px"
              height="50%"
              width="100%"
              src="http://info.dxzc.gov.cn/images/banner1.jpg "
            />
          </span>
        </van-col>
      </van-row>
      <!-- <van-row>       
        <van-col
          style="text-align: left;" offset='1' span="14">
            <h2>村社通告</h2>
        
        </van-col>
           <van-col
          style="text-align: left;"  span="9">          
          <div class="textleft">
            <div>
               <van-row>   
               <van-col
          style="text-align: right;"  span="16">
              <span style="color:#C0C4CC;">
              切换网格员
              </span>
                </van-col>
              <van-col
          style="text-align: left;border-right: 1px solid #F2F6FC;"  span="8">
              <span class="arrowText">
                  <van-icon name="arrow" />        
              </span>
               </van-col>
                </van-row>
            </div>            
          </div> 
        </van-col>
     
      </van-row>
          <van-row>       
        <van-col
          style="text-align: left;" offset='1' span="22">
        
          <div class="tongzhiList">             
              <span>
               “请曹婆井社区开展七一讲党课活动”
              </span>
          </div>
        
        </van-col>        
      </van-row>-->

      <van-row>
        <van-col style="text-align: left" offset="1" span="14">
          <h2>村社亮相台</h2>
        </van-col>
        <van-col style="text-align: left" span="9">
          <div class="textleft">
            <div>
              <van-row>
                <van-col
                  @click="getView('VillageManagers')"
                  style="text-align: right"
                  span="16"
                >
                  <span style="color: #c0c4cc">查看亮相台</span>
                </van-col>
                <van-col
                  style="text-align: left; border-right: 1px solid #f2f6fc"
                  span="8"
                >
                  <span class="arrowText">
                    <van-icon name="arrow" />
                  </span>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
        <!-- <van-col
          style="text-align:left;" offset='6' span="7">          
          <div class="textleft">
            <div>
              <span>
                查看亮相台
              </span>
              <span class="arrowText">
                  <van-icon style="padding-left:2px;" name="arrow" />        
              </span>
            </div> 
           
           </div> 
        </van-col>-->
      </van-row>

      <!-- <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
  <van-swipe-item>
    <div class="swipeItem"> 1</div>
  </van-swipe-item>
  <van-swipe-item> <div class="swipeItem">2</div></van-swipe-item>
  <van-swipe-item> <div class="swipeItem">3</div></van-swipe-item>
  <van-swipe-item> <div class="swipeItem">4</div></van-swipe-item>
      </van-swipe>-->

      <van-row>
        <van-col style="text-align: left" span="24">
          <!-- <van-button icon="star-o" type="primary">按钮</van-button> -->
          <div class="content_3">
            <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
            </van-swipe>-->
            <template>
              <van-swipe
                class="my-swipe"
                :autoplay="3000"
                :show-indicators="false"
                indicator-color="white"
              >
                <van-swipe-item
                  class="my_swipe_item"
                  v-for="(item, index) in managerList"
                  :key="index"
                >
                  <div class="userinfo2">
                    <van-row>
                      <van-col style="text-align: left" span="5">
                        <div class="User">
                          <van-image
                            round
                            width="3.5rem"
                            height="3.5rem"
                            fit="cover"
                            :src="`${hostName + '/' + item.imgurl}`"
                          />
                        </div>
                      </van-col>
                      <van-col
                        style="text-align: left; padding-top: 5px"
                        span="19"
                      >
                        <van-row style="padding-bottom: 15px">
                          <van-col style="text-align: left" span="8">
                            <div>
                              <span>{{ item.name }}</span>
                              <span style="padding: 0px 10px; color: red">
                                <van-icon
                                  class="icon iconfont icon-dangwugongkai"
                                  class-prefix="icon"
                                />
                              </span>
                            </div>
                          </van-col>
                          <van-col style="text-align: left" span="14">
                            <van-tag
                              round
                              style="
                                color: #409eff;
                                background-color: aliceblue;
                              "
                              >{{ item.duty }}</van-tag
                            >
                          </van-col>
                        </van-row>
                        <van-row style="padding-bottom: 5px">
                          <van-col style="text-align: left" span="12">
                            <div style="line-height: 18px">
                              <van-row>
                                <van-col style="text-align: left" span="5">
                                  <div
                                    style="
                                      padding: 2px;
                                      border-radius: 50%;
                                      margin-top: -2px;
                                    "
                                  >
                                    <van-icon
                                      class="myicon icon-phone"
                                      name="phone"
                                    />
                                  </div>
                                </van-col>
                                <van-col
                                  style="text-align: left"
                                  offset="1"
                                  span="5"
                                >
                                  <span>{{ item.contactsPhone }}</span>
                                </van-col>
                              </van-row>
                            </div>
                          </van-col>

                          <van-col style="text-align: left" span="12">
                            <div style="float: right">
                              <van-button
                                plain
                                icon="phone"
                                @click="tel(item.contactsPhone)"
                                size="small"
                                type="info"
                                >一键呼叫</van-button
                              >
                            </div>
                          </van-col>
                        </van-row>

                        <van-row>
                          <van-col style="text-align: left" span="24">
                            <div style="line-height: 18px">
                              <van-row>
                                <van-col
                                  style="text-align: left; width: 10.5%"
                                  span="2"
                                >
                                  <div
                                    style="
                                      padding: 2px;
                                      border-radius: 50%;
                                      margin-top: -4px;
                                    "
                                  >
                                    <van-icon
                                      class="myicon icon-star"
                                      name="star"
                                    />
                                  </div>
                                </van-col>
                                <van-col
                                  style="text-align: left"
                                  offset="1"
                                  span="14"
                                >
                                  <span>{{ item.introduction }}</span>
                                </van-col>
                              </van-row>
                            </div>
                            <!-- <div style="line-height: 32px;">
                       <span
                       style="padding: 3px;border-radius: 50%;border: solid #DCDFE6 1px;">   <van-icon name="star" /></span>
                       <span>{{  item.introduction  }}</span>
                            </div>-->
                          </van-col>
                        </van-row>
                      </van-col>
                    </van-row>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </template>
            <!-- <div class="userinfo"> 
              <van-row>       
                <van-col
                  style="text-align: left;" span="5">
                    <div class="User">
                          <van-image
                          round
                          width="3.4rem"
                          height="3.4rem"
                          :src="`${hostName+'/'+manager.imgurl}`"
                        />
                    </div>
                  </van-col>    
                  <van-col
                  style="text-align: left;padding-top: 5px;" span="19">
              <van-row>       
              <van-col
                  style="text-align: left;" span="8">
                    <div>
                      <span>{{ manager.username  }}</span>
                      <span style="padding: 0px 10px;color: red;"><van-icon class="icon iconfont icon-dangwugongkai" class-prefix='icon'  /></span>                      
                    </div>                  
                  </van-col>   
                  <van-col
                     style="text-align: left;" span="14">   
                      <van-tag round style="color:#409EFF;background-color: aliceblue;">{{ manager.duty }}</van-tag>                   
                  </van-col>          
                </van-row>
                <van-row>       
                <van-col
                  style="text-align: left;" span="12">
                  
                     <div style="line-height: 42px;">
                       <span
                       style="padding: 3px;border-radius: 50%;border: solid #DCDFE6 1px;"><van-icon name="phone" /></span>
                      <span>{{manager.phoneNum}}</span>
                      </div>       
                  </van-col> 
                       <van-col
                  style="text-align: left;" span="12">
                  
                     <div style="float:right;" >
                     <van-button plain icon="phone" @click="tel(manager.phoneNum)" size="small" type="info">一键呼叫</van-button>                    
                      </div>       
                  </van-col> 
                </van-row>
                    <van-row>       
                <van-col
                  style="text-align: left;" span="24">

                     <div style="line-height: 32px;">
                       <span
                       style="padding: 3px;border-radius: 50%;border: solid #DCDFE6 1px;">   <van-icon name="star" /></span>
                       <span>{{  manager.introduction  }}</span>
                      </div>  
                </van-col> 
                </van-row>
                  </van-col>            
                </van-row>
            </div>-->
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col style="padding: 15px 15px 0 15px" span="24">
          <div class="banner">
            <img
              alt="Vue logo"
              style="border-radius: 5px"
              height="30%"
              width="100%"
              src="http://info.dxzc.gov.cn/images/banner2.jpg"
            />
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col style="text-align: left" offset="1" span="14">
          <h2>{{ villageName }}群众自治</h2>
        </van-col>
        <!-- <van-col
          style="text-align: left;"  span="9">          
          <div class="textleft">
            <div>
               <van-row>   
               <van-col
          style="text-align: right;"  span="16">
              <span style="color:#C0C4CC;">
             更多风采
              </span>
                </van-col>
              <van-col
          style="text-align: left;border-right: 1px solid #F2F6FC;"  span="8">
              <span class="arrowText">
                  <van-icon name="arrow" />        
              </span>
               </van-col>
                </van-row>
            </div>            
          </div> 
        </van-col>-->
        <!-- <van-col
          style="text-align:left;" offset='6' span="6">          
          <div class="textleft">
            <div>
              <span>
                更多风采
              </span>
              <span class="arrowText">
                  <van-icon style="padding-left:2px;" name="arrow" />        
              </span>
            </div> 
           
           </div> 
        </van-col>-->
      </van-row>
      <!-- kaishi -->

      <van-collapse @change="changeColl" v-model="activeName" accordion>
        <div v-for="(item, index) in ServiceTeamList" :key="index">
          <van-collapse-item :name="index">
            <template #title>
              <div
                :class="[
                  isAction && actionIndex == index
                    ? 'activeClass'
                    : 'liveClass',
                ]"
              >
                <van-icon
                  :class="[
                    isAction && actionIndex == index
                      ? 'icon-star'
                      : 'icon-livestar',
                  ]"
                  name="star"
                />
                {{ item.teamName }}
                ({{ actionIndex == index ? current + 1 : 1 }}/{{
                  item.RecordCount
                }})
              </div>
            </template>
            <!-- <van-row>      
       <van-col
          style="text-align:left;font-size: 16px;
    color: darkorange;"  offset="1" span="1">   
          <van-icon name="star" />
        </van-col>
           <van-col
          style="text-align:left;font-size: 14px;padding-left:8px;line-height: 18px;
            color: darkorange;"  span="15">-->
            <!-- ServiceTeam:{
       ServiceRecord:[],
       serviceTeamRemark:'',
            teamName:''-->
            <!-- {{ ServiceTeam.teamName }} -->
            <!-- </van-col> -->
            <!-- <van-col
          style="text-align:left;font-size: 14px;line-height: 18px;color:#C0C4CC;"  offset="1" span="6">  
             <span >  服务宗旨 <van-icon  name="arrow" />     </span>
        </van-col> 
            </van-row>-->
            <van-swipe
              :ref="'swip' + index"
              @change="onChangeSwipe"
              class="my-swipe"
              :loop="isloop"
              :show-indicators="false"
              indicator-color="white"
            >
              <template v-for="(image, index) in item.ServiceRecord">
                <van-swipe-item class="my_swipe_item" :key="index">
                  <van-row>
                    <van-col style="text-align: left" span="24">
                      <div class="textleft2">
                        <div>
                          <van-row>
                            <van-col
                              @click="viewImages(index)"
                              :key="index"
                              style="text-align: left; padding: 10px"
                              span="24"
                            >
                              <div class="imgslist">
                                <van-image
                                  lazy-load
                                  width="100%"
                                  height="12em"
                                  fit="cover"
                                  :src="`${
                                    hostName +
                                    '/' +
                                    image.serviceFile.split(',')[0]
                                  }`"
                                />
                                <!-- <img  width="100%" :src="`${hostName+'/'+item.serviceFile.split(',')[0]}`" alt=""> -->
                                <!-- <img  width="100%" src="http://info.dxzc.gov.cn/UploadFiles/2020/7/202076181340.jpg" alt=""> -->
                              </div>
                              <div class="imgText">
                                {{ image.serviceContent }}
                                <br />
                                时间：{{ image.occurDate }}
                              </div>
                            </van-col>
                          </van-row>
                        </div>
                      </div>
                    </van-col>
                  </van-row>
                </van-swipe-item>
              </template>
            </van-swipe>
          </van-collapse-item>
        </div>
      </van-collapse>

      <!-- end -->
      <!-- <footer>-->
      <van-grid clickable direction="horizontal" :column-num="2">
        <van-grid-item icon="home-o" text="首页" to="/community" />
        <van-grid-item icon="search" text="搜索" />
      </van-grid>

      <!-- </footer> -->

      <div class="viewImges" @click="showImglist = false" v-if="showImglist">
        <van-swipe
          class="my-swipeview"
          style="padding-top: 35%"
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item
            class="my_swipe_item"
            v-for="(item, index) in imagesView"
            :key="index"
          >
            <van-image
              width="100%"
              height="100%"
              fit="contain"
              :src="`${item.url}`"
            />
          </van-swipe-item>
        </van-swipe>
        <van-row
          style="
            padding-top: 10px;
            position: fixed;
            top: 62%;
            left: 0%;
            right: 0px;
            background-color: rgba(0, 0, 0, 0.4);
          "
        >
          <van-col offset="2" span="22">
            <div
              style="
                text-align: left;
                float: left;
                color: #fff;
                font-size: 16px;
                line-height: 22px;
              "
            >
              时间：{{ ServiceTeamInfo.occurDate }}
            </div>
          </van-col>
          <van-col offset="2" span="22">
            <div
              style="
                text-align: left;
                float: left;
                color: #fff;
                font-size: 16px;
                line-height: 22px;
              "
            >
              地点：{{ ServiceTeamInfo.occurPlace }}
            </div>
          </van-col>

          <!-- <van-col offset="2" span="20">
  <div style="text-align:left;float:left;color:#fff;font-size:16px;line-height:22px;">人员：{{ ServiceTeamInfo.serviceMembers }}</div>
    </van-col>
       <van-col offset="2" span="20">
  <div style="text-align:left;float:left;color:#fff;font-size:16px;line-height:22px;">对象：{{ ServiceTeamInfo.serviceObjects }}</div>
          </van-col>-->
          <van-col offset="2" span="20">
            <div
              style="
                text-align: left;
                float: left;
                color: #fff;
                font-size: 16px;
                line-height: 22px;
              "
            >
              内容：{{ ServiceTeamInfo.serviceContent }}。
            </div>
          </van-col>
        </van-row>
        <!-- 服务地点
服务人员
服务对象
        服务内容-->

        <!-- <van-uploader v-model="imagesView" multiple :show-upload='false'/> -->
      </div>

      <div class="lodingDiv">
        <van-overlay :show="showloding">
          <div class="wrapper" @click.stop>
            <div class="block">
              <div style="height: 100%; width: 100%; margin-top: 255px">
                <van-loading color="#1989fa" size="24px" vertical
                  >数据加载中...</van-loading
                >
              </div>
            </div>
          </div>
        </van-overlay>
      </div>
      <div ref="container" id="container"></div>
    </div>
    <v-xzqh @iscolse="colesxzqh" ref="xzqh"></v-xzqh>
  </div>

  <!-- </div> -->
</template>

<script>
import vXzqh from "@/components/community/";
// import { checkLsinfo } from "@/components/lsUser";
import Vue from "vue";
// import { mapState } from "vuex";
import { village } from "@/store/mutation-types"; //MD5Tel AdminInfo
//  import eruda from 'eruda'
// IsAdmin ,Version,AdminInfo,

import { Amap } from '@/tools/Amap';
// import AMapLoader from '@amap/amap-jsapi-loader';
import {
  GridMember,
  ServiceTeam,
  publicNotice,
  VillageManagers,
  Villageinfo,
  GetcurretGridMember,
  listserviceTeams,
  DangyuanCount

  // seletDepCount,
  // adddxrm,
  // // finduserByTel,
  // getdeplist,
  // // checkAdmin,//检测管理员
  // getUserInfo,
  // GetArticleList
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
// import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "community",
  components: {
    vXzqh
    // navigations
  },
  computed: {
    // ...mapState({
    //   Userinfo: state => state.user.userinfo
    // })
  },
  watch: {
    // DepCount(val) {
    //   setTimeout(() => {
    //     this.DepCount = val;
    //   }, 500);
    // }
  },
  props: {
    msg: String
  },
  created () {
    this.showHome = true;
    this.initImagesWH();
    //  this.auth();
  },
  mounted () {
    // if(Vue.ls.get(villageID))
    //console.log(Vue.ls.get(village))
    console.log(this.village)
    if (this.village) {
      this.villageName = this.village.villageName
      this.wanggeNum = Vue.ls.get(village.gridId);
      this.selectVillageAll(this.village.code);
    }
    else {
      this.villageName = `曹婆井社区`
      this.selectVillageAll(430503001003);
      this.wanggeNum = [430503001003001, 430503001003002, 430503001003003, 430503001003004]
    }

    this.getnativeItude();
    this.loginTorednet();

    //  console.log(this.$refs.container)
    // this.init(this.$refs.container);
  },
  data () {

    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
    //  this.UA=function(){
    //      let flag = navigator.userAgent.match(
    //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    //     );
    //     return flag
    //   };
    return {
      loginInfo: '',
      DXdepartmentNo: 0,
      village: Vue.ls.get(village),
      showHome: false,
      isAction: true,
      actionIndex: 0,
      arrow: "down",
      isloop: false,
      activeName: 0,
      shownativeItude: false,
      showloding: false,
      imagesView: [],
      imglist: [],
      showImglist: false,
      allData: {},
      villagecountPersion: 0,
      zhiyuanzheCount: 0,
      dangyuanCount: 0,
      hostName: 'https://api.daxiang.gov.cn/village',
      wanggeNum: [],
      publicNoticeList: [],
      MywangGe: {
        username: '',
        wgName: '',
        phoneNum: '',
        imgurl: ''
      },
      manager:
      {
        username: '',
        duty: '',
        introduction: '',
        imgurl: '',
        phoneNum: ''
      },
      managerList: [],
      ServiceTeam: {
        ServiceRecord: [],
        serviceTeamRemark: '',
        teamName: '',
        ServiceRecordCount: '1'
      },
      ServiceTeamInfo: {},
      lonlatInfo:
      {
        departmentNo: '',
        fullOrgName: '',
        OrgName: '',
        OrgUserName: '',
        mobile: '',
        headerUrl: ''
      },
      villageName: '',
      ServiceTeamList: [],
      currServiceList: [],
      current: 0,

      // personTitle:''
    };
  },
  methods:
  {
    async showlist (routeName) {

      let _village = Vue.ls.get(village);

      let res = await listserviceTeams({ departmentNo: _village.code })

      if (JSON.stringify(res.data) === '{}') {
        this.$toast.fail(`暂无志愿者信息`)
      }
      else {
        this.$router.push({ name: routeName, params: { serviceTeamList: res.data, villageName: _village.villageName, departmentNo: _village.code } });
      }

      // "{"value":{"gridId":["430503202101001","430503202101002","430503202101003","430503202101004","430503202101005"],"code":"430503202101","villageName":"蔡锷村"},"expire":null}"
      // this.$router.push({ name: routeName, params: { departmentNo: code } });
    },
    onChangeSwipe (index) {

      console.log(index);
      this.current = index
    },
    async selectVillageAll (code) {
      console.log(code)
      this.showloding = true;

      this.wanggeNum = !this.village ? [430503001003001, 430503001003002, 430503001003003, 430503001003004] : this.village.gridId
      const Gridmember = new Promise((resolve) => {
        let gridlist = []
        for (let x = 0; x < this.wanggeNum.length; x++) {
          GridMember({ departmentNo: this.wanggeNum[x] }).then(res => {
            if (!res.data) {
              return
            }
            if (res.data.length > 0) {
              gridlist.push(res.data)
            }
          })
        }
        resolve(gridlist);
      })
      const allVillageInfo = new Promise(resolve => {
        this.$axios.all([
          //  Amap.initAmap(this.$refs.container),//经纬度获取
          ServiceTeam({ departmentNo: code }),//430503004002,430503001003
          publicNotice({ departmentNo: code }),
          VillageManagers({ departmentNo: code }),
          listserviceTeams({ departmentNo: code }),
          DangyuanCount({ departmentNo: code }),
          Villageinfo({ departmentNo: code })]).
          then(this.$axios.spread(function (ServiceTeam, publicNotice, VillageManagers, listserviceTeams, DangyuanCount, Villageinfo) {
            let obj = new Object();

            obj.ServiceTeam = ServiceTeam
            obj.publicNotice = publicNotice
            obj.VillageManagers = VillageManagers
            obj.Villageinfo = Villageinfo
            obj.Amap = Amap
            obj.DangyuanCount = DangyuanCount
            obj.listserviceTeams = listserviceTeams
            resolve(obj)
          }))
      })
      let gridlist = await Gridmember;
      let result = await allVillageInfo;
      console.log(result)
      if (result) {
        this.showloding = false
      }
      //  let wgs84= this.gcj02Towgs84(result.Amap.lng,result.Amap.lat)
      //     console.log(wgs84)
      //     console.log([result.Amap.lng,result.Amap.lat])
      // let bd=this.gd2bd(result.Amap.lng,result.Amap.lat)

      //   if(result.ServiceTeam.data)
      // { 
      //   let ServiceObj=new Object()

      //     for(let x =0;x<result.ServiceTeam.data.length;x++)
      //     {

      //       ServiceObj.ServiceRecord=  result.ServiceTeam.data[x].ServiceRecord
      //       console.log( ServiceObj.ServiceRecord.length)

      //       for(let y=0;y<ServiceObj.ServiceRecord.length;y++)
      //       {
      //         // console.log(ServiceObj.ServiceRecord[y].serviceFile)
      //         if(ServiceObj.ServiceRecord[y].serviceFile=='')
      //         {
      //           // SeviceRecordArr.push(ServiceObj.ServiceRecord[y])
      //            console.log(y)
      //            console.log(ServiceObj.ServiceRecord[y])    
      //           ServiceObj.ServiceRecord.splice(y, 1);             
      //         }
      //       }

      //       // ServiceObj.ServiceRecord.map((item,index,arr)=>{


      //       //   //  if(item.serviceFile=='')
      //       //   //  {
      //       //     //  console.log(x)
      //       //     //  console.log(item.serviceFile)
      //       //     //  console.log(index)
      //       //       arr.splice(index, 1);
      //       //       console.log(arr)
      //       //   //  }
      //       //  })
      //       this.ServiceTeamList.push(ServiceObj)
      //     }
      // }

      if (result.ServiceTeam.data) {
        let _arrServiceRecord = []
        for (let x = 0; x < result.ServiceTeam.data.length; x++) {
          let obj = new Object();
          obj.serviceTeamRemark = result.ServiceTeam.data[x].serviceTeamRemark
          obj.teamName = result.ServiceTeam.data[x].teamName
          _arrServiceRecord = result.ServiceTeam.data[x].ServiceRecord
          // console.log(obj.ServiceRecord.length);
          // let temp=[]
          // console.log(_arrServiceRecord)
          // for(let y=_arrServiceRecord.length;y>0;y--)
          // {
          //     if(_arrServiceRecord[y].serviceFile=='')
          //   {
          //         _arrServiceRecord.splice(y,1)
          //   }
          // }
          for (let y = _arrServiceRecord.length - 1; y >= 0; y--) {

            if (_arrServiceRecord[y].serviceFile == '') {
              _arrServiceRecord.splice(y, 1);
            }
            else {
              let _arr = _arrServiceRecord[y].serviceFile.split(',')
              _arrServiceRecord[y].newimglist = _arr
              _arrServiceRecord[y].occurDate = this.$moment(_arrServiceRecord[y].occurDate).format('YYYY-MM-DD')
            }
            // _arrServiceRecord[y].occurDate=this.$moment(  _arrServiceRecord[y].occurDate).format('YYYY-MM-DD')             
          }

          obj.ServiceRecord = _arrServiceRecord
          if (obj.ServiceRecord.length > 0) {
            obj.RecordCount = obj.ServiceRecord.length
            //   console.log(obj.ServiceRecord.length);
            this.ServiceTeamList.push(obj)
          }
        }
        this.currServiceList = this.ServiceTeamList[0]
      }
      let _gridlist = { gridlist };
      console.log(result)
      console.log(_gridlist)

      this.allData = Object.assign(result, _gridlist);
      console.log(this.allData);
      this.managerList = result.VillageManagers.data
      //     this.ServiceTeam.serviceTeamRemark=result.ServiceTeam.data[0].serviceTeamRemark
      //     this.ServiceTeam.teamName=result.ServiceTeam.data[0].teamName
      //     this.ServiceTeam.ServiceRecordCount=this.ServiceTeamList.length;
      //     this.ServiceTeam.ServiceRecord=result.ServiceTeam.data[0].ServiceRecord
      //     this.ServiceTeam.ServiceRecord.map(item=>{      
      //     let _arr=item.serviceFile.split(',')
      //     item.occurDate=this.$moment(item.occurDate).format('YYYY-MM-DD')
      //     this.imglist.push(_arr)
      // })

      if (!result.VillageManagers == undefined) {
        this.manager.username = result.VillageManagers.data[0].name
        this.manager.duty = result.VillageManagers.data[0].duty
        this.manager.introduction = result.VillageManagers.data[0].introduction
        this.manager.imgurl = result.VillageManagers.data[0].imgurl
        this.manager.phoneNum = result.VillageManagers.data[0].contactsPhone
      }

      // console.log(gridlist);

      this.zhiyuanzheCount = Object.keys(result.listserviceTeams.data).length === 0 ? 0 : result.listserviceTeams.data.allTeamMemberCount
      this.dangyuanCount = !result.DangyuanCount.data ? 0 : result.DangyuanCount.data.sum
      // if (result.listserviceTeams.data) {
      //   this.zhiyuanzheCount = result.listserviceTeams.data.allTeamMemberCount || 0
      // }
      // if (result.DangyuanCount.data) {
      //   this.dangyuanCount = result.DangyuanCount.data.sum || 0
      // }
      // this.MywangGe.username=gridlist[0][0].name
      // this.MywangGe.wgName=gridlist[0][0].orgName
      // this.MywangGe.phoneNum=gridlist[0][0].mobile
      // this.MywangGe.imgurl=gridlist[0][0].imgurl


      this.villagecountPersion = !result.Villageinfo.data ? 0 : result.Villageinfo.data.floatingPopulation + result.Villageinfo.data.householdStaff
      // = !result.DangyuanCount.data ? 0 : result.Villageinfo.data.floatingPopulation + result.Villageinfo.data.householdStaff;
      this.publicNoticeList = result.publicNotice.data.map(item => {
        return { publicNoticeTitle: item.publicNoticeTitle }
      })
    },

    colesxzqh (villageInfo) {
      console.log(villageInfo);
      //  console.log(code)
      //   console.log(name)

      Vue.ls.set(village, villageInfo);
      this.villageName = villageInfo.villageName;
      this.selectVillageAll(villageInfo.code)
      this.showHome = true;
      this.ServiceTeamList = []
      //  Vue.ls.set(village, {id:code,villageName:name});
      //  this.selectVillageAll(code)
      //  this.showHome=true;
      //  console.log(`出发父组件`)
    },
    showxzqh () {
      this.allData = [];
      this.arrow = this.arrow == "down" ? "up" : "down";
      console.log(`选择社区`)
      this.showHome = false;
      this.$refs.xzqh.go();
    },
    changeColl (e) {
      console.log(e);
      this.current = 0;
      this.actionIndex = e
      this.isAction = true;
      this.currServiceList = this.ServiceTeamList[e]

    },
    loginTorednet () {
      Amap.loginRednet('requireUserToLogin', async res => {
        this.loginInfo = res;
        // alert(res)
        // this.$toast.fail(res)
      })
    },
    getnativeItude () {
      //  this.nitev=[];
      Amap.nativeItude("getLocationCoordinate", async (longitude, latitude) => {
        //  this.lon=longitude;
        //  this.lat=latitude;           
        let _GridMember = await GetcurretGridMember({ lat: latitude, lon: longitude })
        // this.tt=_GridMember
        if (_GridMember.data.org.orgName) {
          this.shownativeItude = true;
          this.lonlatInfo = {
            departmentNo: _GridMember.data.org.departmentNo,
            fullOrgName: _GridMember.data.org.fullOrgName,
            OrgName: _GridMember.data.org.orgName,
            OrgUserName: _GridMember.data.user.name,
            mobile: _GridMember.data.user.mobile,
            headerUrl: !_GridMember.data.user.headerUrl ? 'https://imgs.rednet.cn/data/24/IMAGE_TENANT_LIB/IMAGE/55/2020/6/30/b6d52c578a284d57a9dd21fae938827f.png' : this.hostName + '/' + _GridMember.data.user.headerUrl
          }
        }
        // this.nitev.push({lon:this.lon,lat:this.lat})
        //  this.$toast.fail(longitude+`,`+latitude)
      })
    },


    // async init(dom){
    //  let latlng=await  Amap.initAmap(dom);
    //  console.log(latlng);
    //  },
    onError (data) {
      document.getElementById('status').innerHTML = '定位失败'
      document.getElementById('result').innerHTML = '失败原因排查信息:' + data.message;
    },

    viewImages (index) {

      console.log(index)
      console.log(this.currServiceList)
      this.imagesView = this.currServiceList.ServiceRecord[index].newimglist.map(item => {
        return { url: `${this.hostName + '/' + item}` }
      })
      // console.log(this.ServiceTeam.ServiceRecord[index])
      // this.ServiceTeam.ServiceRecord[index]
      this.ServiceTeamInfo = this.currServiceList.ServiceRecord[index]
      this.showImglist = true;
      console.log(this.ServiceTeamInfo)
    },
    tel (num) {
      console.log(num)
      window.location.href = `tel:${num}`;
    },
    go (url) {
      console.log(url)
      if (url == '-1') {
        this.$toast.fail(`功能暂未启用`);
      }

      window.location.href = url;
    },
    getView (flag, index) {
      if (flag === 'Villageinfo') {
        //   params: {
        //   page: '1', code: '8989'
        // }
        console.log(`999999999999999999999`)
        // console.log(flag);
        // console.log(JSON.stringify(this.allData))
        if (JSON.stringify(this.allData) === '[]' || JSON.stringify(this.allData) === '{}') {
          this.$toast.fail('暂无社区信息')
          return false
        }
        console.log(this.allData);
        this.$router.push({
          name: 'communityview', params: {
            villageinfo: this.allData.Villageinfo.data,
            villageManager: this.allData.VillageManagers.data,
            villageName: this.villageName
          }
        })
      }
      if (flag === 'publicNotice') {
        //  console.log(index)
        //  console.log(this.allData.publicNotice.data[index])
        this.$router.push({
          name: 'communityview', params: {
            publicNotice: this.allData.publicNotice.data[index]

          }
        })
      }
      if (flag === 'VillageManagers') {
        console.log(this.allData.VillageManagers.data)
        this.$router.push({
          name: 'communityview', params: {
            VillageManagers: this.allData.VillageManagers.data,
            villageName: this.villageName

          }
        })
      }

      //  console.log(result.publicNotice.data[index])
    },


    //   async initVillageAll()
    //   {

    //     this.showloding=true;
    //             const Gridmember=new Promise((resolve)=>{
    //                 let gridlist=[]
    //                 for(let x=0;x<this.wanggeNum.length;x++)
    //                 {
    //                  GridMember({departmentNo:this.wanggeNum[x]}).then(res=>{
    //                     console.log(res.data);
    //                      gridlist.push(res.data)
    //                   })                   
    //                 }
    //                 resolve(gridlist);
    //             })
    //             const allVillageInfo=new Promise(resolve=>{
    //                     this.$axios.all([
    //                       //  Amap.initAmap(this.$refs.container),//经纬度获取
    //                                     ServiceTeam({departmentNo:430503001003}),//430503004002,430503001003
    //                                     publicNotice({departmentNo:430503001003}),
    //                                     VillageManagers({departmentNo:430503001003}),
    //                                     Villageinfo({departmentNo:430503001003})]).
    //                                     then(this.$axios.spread(function (ServiceTeam, publicNotice,VillageManagers,Villageinfo) 
    //                                     {
    //                                       let obj=new Object();
    //                                       obj.ServiceTeam=ServiceTeam
    //                                       obj.publicNotice=publicNotice
    //                                       obj.VillageManagers=VillageManagers
    //                                       obj.Villageinfo=Villageinfo
    //                                       obj.Amap=Amap
    //                                       resolve(obj)    
    //                                    }))
    //                             })    
    // let gridlist= await Gridmember;  
    // let result= await allVillageInfo;
    //   console.log(result.ServiceTeam)
    // if(result)
    // {
    //    this.showloding=false    
    // }
    // //  let wgs84= this.gcj02Towgs84(result.Amap.lng,result.Amap.lat)
    // //     console.log(wgs84)
    // //     console.log([result.Amap.lng,result.Amap.lat])
    //     // let bd=this.gd2bd(result.Amap.lng,result.Amap.lat)
    //     // console.log(bd)

    //     for(let x=0;x< result.ServiceTeam.data.length;x++)
    //     {
    //       let obj=new Object();
    //    obj.serviceTeamRemark=result.ServiceTeam.data[x].serviceTeamRemark
    //    obj.teamName=result.ServiceTeam.data[x].teamName
    //    obj.ServiceRecord=result.ServiceTeam.data[x].ServiceRecord
    //    obj.ServiceRecord.map(item=>{
    //           let _arr=item.serviceFile.split(',')
    //             item.occurDate=this.$moment(item.occurDate).format('YYYY-MM-DD')
    //           // console.log(_arr)
    //           item.newimglist=_arr
    //       })
    //       if(obj.ServiceRecord.length>0)
    //       {
    //           this.ServiceTeamList.push(obj)
    //       } 

    //     }
    // console.log( this.ServiceTeamList)

    // //   console.log(result)
    // //   console.log(_GridMember)
    //  let _gridlist= {gridlist};
    //  this.allData=Object.assign(result,_gridlist);
    //  this.managerList=result.VillageManagers.data
    //  this.ServiceTeam.serviceTeamRemark=result.ServiceTeam.data[0].serviceTeamRemark
    //  this.ServiceTeam.teamName=result.ServiceTeam.data[0].teamName
    //  this.ServiceTeam.ServiceRecord=result.ServiceTeam.data[0].ServiceRecord
    //  this.ServiceTeam.ServiceRecord.map(item=>{

    //     let _arr=item.serviceFile.split(',')
    //     item.occurDate=this.$moment(item.occurDate).format('YYYY-MM-DD')
    //     this.imglist.push(_arr)
    //  })
    // //  console.log( this.imglist)
    //   //  ServiceRecord:[],
    //   //    serviceTeamRemark:'',
    //   //    teamName:''

    // //  console.log(this.ServiceTeam)
    //  this.manager.username=result.VillageManagers.data[0].name
    //  this.manager.duty=result.VillageManagers.data[0].duty
    //  this.manager.introduction=result.VillageManagers.data[0].introduction
    //  this.manager.imgurl=result.VillageManagers.data[0].imgurl
    //  this.manager.phoneNum=result.VillageManagers.data[0].contactsPhone


    // this.MywangGe.username=gridlist[0][0].name
    // this.MywangGe.wgName=gridlist[0][0].orgName
    // this.MywangGe.phoneNum=gridlist[0][0].mobile
    // this.MywangGe.imgurl=gridlist[0][0].imgurl


    // this.villagecountPersion=result.Villageinfo.data.floatingPopulation+result.Villageinfo.data.householdStaff;
    // this.publicNoticeList=result.publicNotice.data.map(item=>{
    //   return {publicNoticeTitle:item.publicNoticeTitle}
    // })
    //   },
    initImagesWH () {
      let fullwidth = document.documentElement.clientWidth;
      //  console.log(fullwidth)
      this.imgwidth = (fullwidth - 29) / 4;
    },
    GetUA () {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      // console.log(flag)
      this.UA = !flag ? "PC" : flag;
      // console.log(this.UA)
    },


    // getUserInfo() {
    //   let id;
    //   let tel;

    //   id = Vue.ls.get(ReportId);
    //   tel = Vue.ls.get(Tel);

    //   setTimeout(() => {
    //     getUserInfo({ ReportId: id, tel: tel }).then(res => {
    //       // {code: -1, msg: "查无记录"}
    //       let data = res.data.html;
    //       console.log(data);
    //       if (data.code != -1) {
    //         this.Report.tel = data.tel;
    //       }
    //       this.personInfo = this.Report;
    //     });
    //   }, 500);
    // }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe {
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ccc, 2px 2px 10px #f2f6fc;
}
.banner {
  border-radius: 5px;
  height: 30%;
  width: 100%;
}
.icon-phone {
  color: #67c23a;
}
.icon-star {
  float: left;
  margin-block-start: 2.5px;
  margin-block-end: 10px;
  display: block;
  margin-left: 2px !important;
  color: #e6a23c;
  margin-inline-start: 10px;
  margin-inline-end: 5px;
}
.icon-livestar {
  margin-left: 2px !important;
  color: #909399;
  float: left;
  margin-block-start: 4.5px;
  margin-block-end: 10px;
  display: block;
  margin-inline-start: 10px;
  margin-inline-end: 5px;
}
.myicon {
  margin-left: 2px;
  font-size: 18px;
  margin-top: 2px;
  line-height: 15px;
}
.viewImges {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.9);
}
.van-swipe >>> .my_swipe_item {
  padding-right: 0px;
  /* box-shadow:
         -1px 2px 1px #ccc,
       5px 5px 10px #F2F6FC; */
}
.noticContent {
  font-size: 16px;
  line-height: 28px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: antiquewhite;
}
.van-swipe-item {
  padding-right: 10px;
}
.arrowText {
  color: #c0c4cc;
  float: right;
  padding-right: 20px;
  line-height: 28px;
  font-size: 1.4em;
}
.imgText {
  background-color: #f8f8f8;
  width: 95%;
  word-break: keep-all;
  white-space: normal;
  text-indent: em;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 32px;
}
.imgslist img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.userinfo2 {
  padding: 15px;
  border-radius: 5px;
  /* box-shadow:
         2px 2px 15px #ccc,
       5px 5px 20px #F2F6FC; */
  /* box-shadow: 10px 10px 20px 10px rgba(255,255,0,0.5), -10px 10px 10px 10px rgba(255,255,255,0.5)  */
}
.userinfo {
  border: 1px solid #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ccc, 2px 2px 10px #f2f6fc;
  /* box-shadow: 10px 10px 20px 10px rgba(255,255,0,0.5), -10px 10px 10px 10px rgba(255,255,255,0.5)  */
}
.van-tag--default {
  background-color: aliceblue !important;
}
.van-icon >>> .van-tag--default {
  background-color: aliceblue !important;
}
.User >>> .van-icon {
  font-size: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  color: #f56c6c;
  padding: 5px;
}

.tongzhiList span {
  font-size: 20px;
}
.tongzhiList {
  background-color: #f2f6fc;
  padding: 15px 0px;
  border-radius: 10px;
  font-weight: 600;
}
.icon_left {
  float: right;
}
.icon_right {
  float: right;
}
.icon_left >>> .van-icon {
  font-size: 22px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #409eff;
  padding: 5px;
}
.icon_right >>> .van-icon {
  font-size: 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #e6a23c;
  padding: 5px;
}
.content_2 {
  padding: 8px;
}
.content_3 {
  padding: 0px 15px;
}
.content_1 {
  border: 1px #ebeef5 solid;
  border-radius: 4px;
}
.textleft {
  margin-top: 20px;
  color: #606266;
}
.textleft2 {
  color: #606266;
}
.textleft3 {
  font-size: 14px;
  margin-block-start: 0.4em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.icon-zhiyuanfuwu-01 {
  color: red;
  font-size: 24px;

  background-color: #f5f5f5;
  border-radius: 20px;

  padding: 5px;
}
h2 {
  font-size: 1.2em;
}
.activeClass {
  color: #303133;
  text-align: left;
  font-size: 16px;
  font-weight: 800;
}
.liveClass {
  color: rgb(124, 124, 124);

  text-align: left;
  font-size: 14px;
}
</style>
