// {
//     text: '浙江',
//     children: [{
//       text: '杭州',
//       children: [{ text: '西湖区' }, { text: '余杭区' }]
//     }, {
//       text: '温州',
//       children: [{ text: '鹿城区' }, { text: '瓯海区' }]
//     }]
//   }
const placesMap = [
  {
    provinceCode: "110000",
    text: "北京市",
    children: [
      {
        cityCode: "110100",
        text: "北京市",
        children: [
          {
            areaCode: "110101",
            text: "东城区"
          },
          {
            areaCode: "110102",
            text: "西城区"
          },
          {
            areaCode: "110105",
            text: "朝阳区"
          },
          {
            areaCode: "110106",
            text: "丰台区"
          },
          {
            areaCode: "110107",
            text: "石景山区"
          },
          {
            areaCode: "110108",
            text: "海淀区"
          },
          {
            areaCode: "110109",
            text: "门头沟区"
          },
          {
            areaCode: "110111",
            text: "房山区"
          },
          {
            areaCode: "110112",
            text: "通州区"
          },
          {
            areaCode: "110113",
            text: "顺义区"
          },
          {
            areaCode: "110114",
            text: "昌平区"
          },
          {
            areaCode: "110115",
            text: "大兴区"
          },
          {
            areaCode: "110116",
            text: "怀柔区"
          },
          {
            areaCode: "110117",
            text: "平谷区"
          }
        ]
      },
      {
        cityCode: "110200",
        text: "北京市辖县",
        children: [
          {
            areaCode: "110228",
            text: "密云县"
          },
          {
            areaCode: "110229",
            text: "延庆县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "120000",
    text: "天津市",
    children: [
      {
        cityCode: "120100",
        text: "天津市",
        children: [
          {
            areaCode: "120101",
            text: "和平区"
          },
          {
            areaCode: "120102",
            text: "河东区"
          },
          {
            areaCode: "120103",
            text: "河西区"
          },
          {
            areaCode: "120104",
            text: "南开区"
          },
          {
            areaCode: "120105",
            text: "河北区"
          },
          {
            areaCode: "120106",
            text: "红桥区"
          },
          {
            areaCode: "120110",
            text: "东丽区"
          },
          {
            areaCode: "120111",
            text: "西青区"
          },
          {
            areaCode: "120112",
            text: "津南区"
          },
          {
            areaCode: "120113",
            text: "北辰区"
          },
          {
            areaCode: "120114",
            text: "武清区"
          },
          {
            areaCode: "120115",
            text: "宝坻区"
          },
          {
            areaCode: "120116",
            text: "滨海新区"
          }
        ]
      },
      {
        cityCode: "120200",
        text: "天津市辖县",
        children: [
          {
            areaCode: "120221",
            text: "宁河县"
          },
          {
            areaCode: "120223",
            text: "静海县"
          },
          {
            areaCode: "120225",
            text: "蓟县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "130000",
    text: "河北省",
    children: [
      {
        cityCode: "130100",
        text: "石家庄市",
        children: [
          {
            areaCode: "130102",
            text: "长安区"
          },
          {
            areaCode: "130104",
            text: "桥西区"
          },
          {
            areaCode: "130105",
            text: "新华区"
          },
          {
            areaCode: "130107",
            text: "井陉矿区"
          },
          {
            areaCode: "130108",
            text: "裕华区"
          },
          {
            areaCode: "130109",
            text: "藁城区"
          },
          {
            areaCode: "130110",
            text: "鹿泉区"
          },
          {
            areaCode: "130111",
            text: "栾城区"
          },
          {
            areaCode: "130121",
            text: "井陉县"
          },
          {
            areaCode: "130123",
            text: "正定县"
          },
          {
            areaCode: "130125",
            text: "行唐县"
          },
          {
            areaCode: "130126",
            text: "灵寿县"
          },
          {
            areaCode: "130127",
            text: "高邑县"
          },
          {
            areaCode: "130128",
            text: "深泽县"
          },
          {
            areaCode: "130129",
            text: "赞皇县"
          },
          {
            areaCode: "130130",
            text: "无极县"
          },
          {
            areaCode: "130131",
            text: "平山县"
          },
          {
            areaCode: "130132",
            text: "元氏县"
          },
          {
            areaCode: "130133",
            text: "赵县"
          },
          {
            areaCode: "130181",
            text: "辛集市"
          },
          {
            areaCode: "130183",
            text: "晋州市"
          },
          {
            areaCode: "130184",
            text: "新乐市"
          }
        ]
      },
      {
        cityCode: "130200",
        text: "唐山市",
        children: [
          {
            areaCode: "130202",
            text: "路南区"
          },
          {
            areaCode: "130203",
            text: "路北区"
          },
          {
            areaCode: "130204",
            text: "古冶区"
          },
          {
            areaCode: "130205",
            text: "开平区"
          },
          {
            areaCode: "130207",
            text: "丰南区"
          },
          {
            areaCode: "130208",
            text: "丰润区"
          },
          {
            areaCode: "130209",
            text: "曹妃甸区"
          },
          {
            areaCode: "130223",
            text: "滦县"
          },
          {
            areaCode: "130224",
            text: "滦南县"
          },
          {
            areaCode: "130225",
            text: "乐亭县"
          },
          {
            areaCode: "130227",
            text: "迁西县"
          },
          {
            areaCode: "130229",
            text: "玉田县"
          },
          {
            areaCode: "130281",
            text: "遵化市"
          },
          {
            areaCode: "130283",
            text: "迁安市"
          }
        ]
      },
      {
        cityCode: "130300",
        text: "秦皇岛市",
        children: [
          {
            areaCode: "130302",
            text: "海港区"
          },
          {
            areaCode: "130303",
            text: "山海关区"
          },
          {
            areaCode: "130304",
            text: "北戴河区"
          },
          {
            areaCode: "130321",
            text: "青龙满族自治县"
          },
          {
            areaCode: "130322",
            text: "昌黎县"
          },
          {
            areaCode: "130323",
            text: "抚宁县"
          },
          {
            areaCode: "130324",
            text: "卢龙县"
          }
        ]
      },
      {
        cityCode: "130400",
        text: "邯郸市",
        children: [
          {
            areaCode: "130402",
            text: "邯山区"
          },
          {
            areaCode: "130403",
            text: "丛台区"
          },
          {
            areaCode: "130404",
            text: "复兴区"
          },
          {
            areaCode: "130406",
            text: "峰峰矿区"
          },
          {
            areaCode: "130421",
            text: "邯郸县"
          },
          {
            areaCode: "130423",
            text: "临漳县"
          },
          {
            areaCode: "130424",
            text: "成安县"
          },
          {
            areaCode: "130425",
            text: "大名县"
          },
          {
            areaCode: "130426",
            text: "涉县"
          },
          {
            areaCode: "130427",
            text: "磁县"
          },
          {
            areaCode: "130428",
            text: "肥乡县"
          },
          {
            areaCode: "130429",
            text: "永年县"
          },
          {
            areaCode: "130430",
            text: "邱县"
          },
          {
            areaCode: "130431",
            text: "鸡泽县"
          },
          {
            areaCode: "130432",
            text: "广平县"
          },
          {
            areaCode: "130433",
            text: "馆陶县"
          },
          {
            areaCode: "130434",
            text: "魏县"
          },
          {
            areaCode: "130435",
            text: "曲周县"
          },
          {
            areaCode: "130481",
            text: "武安市"
          }
        ]
      },
      {
        cityCode: "130500",
        text: "邢台市",
        children: [
          {
            areaCode: "130502",
            text: "桥东区"
          },
          {
            areaCode: "130503",
            text: "桥西区"
          },
          {
            areaCode: "130521",
            text: "邢台县"
          },
          {
            areaCode: "130522",
            text: "临城县"
          },
          {
            areaCode: "130523",
            text: "内丘县"
          },
          {
            areaCode: "130524",
            text: "柏乡县"
          },
          {
            areaCode: "130525",
            text: "隆尧县"
          },
          {
            areaCode: "130526",
            text: "任县"
          },
          {
            areaCode: "130527",
            text: "南和县"
          },
          {
            areaCode: "130528",
            text: "宁晋县"
          },
          {
            areaCode: "130529",
            text: "巨鹿县"
          },
          {
            areaCode: "130530",
            text: "新河县"
          },
          {
            areaCode: "130531",
            text: "广宗县"
          },
          {
            areaCode: "130532",
            text: "平乡县"
          },
          {
            areaCode: "130533",
            text: "威县"
          },
          {
            areaCode: "130534",
            text: "清河县"
          },
          {
            areaCode: "130535",
            text: "临西县"
          },
          {
            areaCode: "130581",
            text: "南宫市"
          },
          {
            areaCode: "130582",
            text: "沙河市"
          }
        ]
      },
      {
        cityCode: "130600",
        text: "保定市",
        children: [
          {
            areaCode: "130602",
            text: "新市区"
          },
          {
            areaCode: "130603",
            text: "北市区"
          },
          {
            areaCode: "130604",
            text: "南市区"
          },
          {
            areaCode: "130621",
            text: "满城县"
          },
          {
            areaCode: "130622",
            text: "清苑县"
          },
          {
            areaCode: "130623",
            text: "涞水县"
          },
          {
            areaCode: "130624",
            text: "阜平县"
          },
          {
            areaCode: "130625",
            text: "徐水县"
          },
          {
            areaCode: "130626",
            text: "定兴县"
          },
          {
            areaCode: "130627",
            text: "唐县"
          },
          {
            areaCode: "130628",
            text: "高阳县"
          },
          {
            areaCode: "130629",
            text: "容城县"
          },
          {
            areaCode: "130630",
            text: "涞源县"
          },
          {
            areaCode: "130631",
            text: "望都县"
          },
          {
            areaCode: "130632",
            text: "安新县"
          },
          {
            areaCode: "130633",
            text: "易县"
          },
          {
            areaCode: "130634",
            text: "曲阳县"
          },
          {
            areaCode: "130635",
            text: "蠡县"
          },
          {
            areaCode: "130636",
            text: "顺平县"
          },
          {
            areaCode: "130637",
            text: "博野县"
          },
          {
            areaCode: "130638",
            text: "雄县"
          },
          {
            areaCode: "130681",
            text: "涿州市"
          },
          {
            areaCode: "130682",
            text: "定州市"
          },
          {
            areaCode: "130683",
            text: "安国市"
          },
          {
            areaCode: "130684",
            text: "高碑店市"
          }
        ]
      },
      {
        cityCode: "130700",
        text: "张家口市",
        children: [
          {
            areaCode: "130702",
            text: "桥东区"
          },
          {
            areaCode: "130703",
            text: "桥西区"
          },
          {
            areaCode: "130705",
            text: "宣化区"
          },
          {
            areaCode: "130706",
            text: "下花园区"
          },
          {
            areaCode: "130721",
            text: "宣化县"
          },
          {
            areaCode: "130722",
            text: "张北县"
          },
          {
            areaCode: "130723",
            text: "康保县"
          },
          {
            areaCode: "130724",
            text: "沽源县"
          },
          {
            areaCode: "130725",
            text: "尚义县"
          },
          {
            areaCode: "130726",
            text: "蔚县"
          },
          {
            areaCode: "130727",
            text: "阳原县"
          },
          {
            areaCode: "130728",
            text: "怀安县"
          },
          {
            areaCode: "130729",
            text: "万全县"
          },
          {
            areaCode: "130730",
            text: "怀来县"
          },
          {
            areaCode: "130731",
            text: "涿鹿县"
          },
          {
            areaCode: "130732",
            text: "赤城县"
          },
          {
            areaCode: "130733",
            text: "崇礼县"
          }
        ]
      },
      {
        cityCode: "130800",
        text: "承德市",
        children: [
          {
            areaCode: "130802",
            text: "双桥区"
          },
          {
            areaCode: "130803",
            text: "双滦区"
          },
          {
            areaCode: "130804",
            text: "鹰手营子矿区"
          },
          {
            areaCode: "130821",
            text: "承德县"
          },
          {
            areaCode: "130822",
            text: "兴隆县"
          },
          {
            areaCode: "130823",
            text: "平泉县"
          },
          {
            areaCode: "130824",
            text: "滦平县"
          },
          {
            areaCode: "130825",
            text: "隆化县"
          },
          {
            areaCode: "130826",
            text: "丰宁满族自治县"
          },
          {
            areaCode: "130827",
            text: "宽城满族自治县"
          },
          {
            areaCode: "130828",
            text: "围场满族蒙古族自治县"
          }
        ]
      },
      {
        cityCode: "130900",
        text: "沧州市",
        children: [
          {
            areaCode: "130902",
            text: "新华区"
          },
          {
            areaCode: "130903",
            text: "运河区"
          },
          {
            areaCode: "130921",
            text: "沧县"
          },
          {
            areaCode: "130922",
            text: "青县"
          },
          {
            areaCode: "130923",
            text: "东光县"
          },
          {
            areaCode: "130924",
            text: "海兴县"
          },
          {
            areaCode: "130925",
            text: "盐山县"
          },
          {
            areaCode: "130926",
            text: "肃宁县"
          },
          {
            areaCode: "130927",
            text: "南皮县"
          },
          {
            areaCode: "130928",
            text: "吴桥县"
          },
          {
            areaCode: "130929",
            text: "献县"
          },
          {
            areaCode: "130930",
            text: "孟村回族自治县"
          },
          {
            areaCode: "130981",
            text: "泊头市"
          },
          {
            areaCode: "130982",
            text: "任丘市"
          },
          {
            areaCode: "130983",
            text: "黄骅市"
          },
          {
            areaCode: "130984",
            text: "河间市"
          }
        ]
      },
      {
        cityCode: "131000",
        text: "廊坊市",
        children: [
          {
            areaCode: "131002",
            text: "安次区"
          },
          {
            areaCode: "131003",
            text: "广阳区"
          },
          {
            areaCode: "131022",
            text: "固安县"
          },
          {
            areaCode: "131023",
            text: "永清县"
          },
          {
            areaCode: "131024",
            text: "香河县"
          },
          {
            areaCode: "131025",
            text: "大城县"
          },
          {
            areaCode: "131026",
            text: "文安县"
          },
          {
            areaCode: "131028",
            text: "大厂回族自治县"
          },
          {
            areaCode: "131081",
            text: "霸州市"
          },
          {
            areaCode: "131082",
            text: "三河市"
          }
        ]
      },
      {
        cityCode: "131100",
        text: "衡水市",
        children: [
          {
            areaCode: "131102",
            text: "桃城区"
          },
          {
            areaCode: "131121",
            text: "枣强县"
          },
          {
            areaCode: "131122",
            text: "武邑县"
          },
          {
            areaCode: "131123",
            text: "武强县"
          },
          {
            areaCode: "131124",
            text: "饶阳县"
          },
          {
            areaCode: "131125",
            text: "安平县"
          },
          {
            areaCode: "131126",
            text: "故城县"
          },
          {
            areaCode: "131127",
            text: "景县"
          },
          {
            areaCode: "131128",
            text: "阜城县"
          },
          {
            areaCode: "131181",
            text: "冀州市"
          },
          {
            areaCode: "131182",
            text: "深州市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "140000",
    text: "山西省",
    children: [
      {
        cityCode: "140100",
        text: "太原市",
        children: [
          {
            areaCode: "140105",
            text: "小店区"
          },
          {
            areaCode: "140106",
            text: "迎泽区"
          },
          {
            areaCode: "140107",
            text: "杏花岭区"
          },
          {
            areaCode: "140108",
            text: "尖草坪区"
          },
          {
            areaCode: "140109",
            text: "万柏林区"
          },
          {
            areaCode: "140110",
            text: "晋源区"
          },
          {
            areaCode: "140121",
            text: "清徐县"
          },
          {
            areaCode: "140122",
            text: "阳曲县"
          },
          {
            areaCode: "140123",
            text: "娄烦县"
          },
          {
            areaCode: "140181",
            text: "古交市"
          }
        ]
      },
      {
        cityCode: "140200",
        text: "大同市",
        children: [
          {
            areaCode: "140202",
            text: "城区"
          },
          {
            areaCode: "140203",
            text: "矿区"
          },
          {
            areaCode: "140211",
            text: "南郊区"
          },
          {
            areaCode: "140212",
            text: "新荣区"
          },
          {
            areaCode: "140221",
            text: "阳高县"
          },
          {
            areaCode: "140222",
            text: "天镇县"
          },
          {
            areaCode: "140223",
            text: "广灵县"
          },
          {
            areaCode: "140224",
            text: "灵丘县"
          },
          {
            areaCode: "140225",
            text: "浑源县"
          },
          {
            areaCode: "140226",
            text: "左云县"
          },
          {
            areaCode: "140227",
            text: "大同县"
          }
        ]
      },
      {
        cityCode: "140300",
        text: "阳泉市",
        children: [
          {
            areaCode: "140302",
            text: "城区"
          },
          {
            areaCode: "140303",
            text: "矿区"
          },
          {
            areaCode: "140311",
            text: "郊区"
          },
          {
            areaCode: "140321",
            text: "平定县"
          },
          {
            areaCode: "140322",
            text: "盂县"
          }
        ]
      },
      {
        cityCode: "140400",
        text: "长治市",
        children: [
          {
            areaCode: "140402",
            text: "城区"
          },
          {
            areaCode: "140411",
            text: "郊区"
          },
          {
            areaCode: "140421",
            text: "长治县"
          },
          {
            areaCode: "140423",
            text: "襄垣县"
          },
          {
            areaCode: "140424",
            text: "屯留县"
          },
          {
            areaCode: "140425",
            text: "平顺县"
          },
          {
            areaCode: "140426",
            text: "黎城县"
          },
          {
            areaCode: "140427",
            text: "壶关县"
          },
          {
            areaCode: "140428",
            text: "长子县"
          },
          {
            areaCode: "140429",
            text: "武乡县"
          },
          {
            areaCode: "140430",
            text: "沁县"
          },
          {
            areaCode: "140431",
            text: "沁源县"
          },
          {
            areaCode: "140481",
            text: "潞城市"
          }
        ]
      },
      {
        cityCode: "140500",
        text: "晋城市",
        children: [
          {
            areaCode: "140502",
            text: "城区"
          },
          {
            areaCode: "140521",
            text: "沁水县"
          },
          {
            areaCode: "140522",
            text: "阳城县"
          },
          {
            areaCode: "140524",
            text: "陵川县"
          },
          {
            areaCode: "140525",
            text: "泽州县"
          },
          {
            areaCode: "140581",
            text: "高平市"
          }
        ]
      },
      {
        cityCode: "140600",
        text: "朔州市",
        children: [
          {
            areaCode: "140602",
            text: "朔城区"
          },
          {
            areaCode: "140603",
            text: "平鲁区"
          },
          {
            areaCode: "140621",
            text: "山阴县"
          },
          {
            areaCode: "140622",
            text: "应县"
          },
          {
            areaCode: "140623",
            text: "右玉县"
          },
          {
            areaCode: "140624",
            text: "怀仁县"
          }
        ]
      },
      {
        cityCode: "140700",
        text: "晋中市",
        children: [
          {
            areaCode: "140702",
            text: "榆次区"
          },
          {
            areaCode: "140721",
            text: "榆社县"
          },
          {
            areaCode: "140722",
            text: "左权县"
          },
          {
            areaCode: "140723",
            text: "和顺县"
          },
          {
            areaCode: "140724",
            text: "昔阳县"
          },
          {
            areaCode: "140725",
            text: "寿阳县"
          },
          {
            areaCode: "140726",
            text: "太谷县"
          },
          {
            areaCode: "140727",
            text: "祁县"
          },
          {
            areaCode: "140728",
            text: "平遥县"
          },
          {
            areaCode: "140729",
            text: "灵石县"
          },
          {
            areaCode: "140781",
            text: "介休市"
          }
        ]
      },
      {
        cityCode: "140800",
        text: "运城市",
        children: [
          {
            areaCode: "140802",
            text: "盐湖区"
          },
          {
            areaCode: "140821",
            text: "临猗县"
          },
          {
            areaCode: "140822",
            text: "万荣县"
          },
          {
            areaCode: "140823",
            text: "闻喜县"
          },
          {
            areaCode: "140824",
            text: "稷山县"
          },
          {
            areaCode: "140825",
            text: "新绛县"
          },
          {
            areaCode: "140826",
            text: "绛县"
          },
          {
            areaCode: "140827",
            text: "垣曲县"
          },
          {
            areaCode: "140828",
            text: "夏县"
          },
          {
            areaCode: "140829",
            text: "平陆县"
          },
          {
            areaCode: "140830",
            text: "芮城县"
          },
          {
            areaCode: "140881",
            text: "永济市"
          },
          {
            areaCode: "140882",
            text: "河津市"
          }
        ]
      },
      {
        cityCode: "140900",
        text: "忻州市",
        children: [
          {
            areaCode: "140902",
            text: "忻府区"
          },
          {
            areaCode: "140921",
            text: "定襄县"
          },
          {
            areaCode: "140922",
            text: "五台县"
          },
          {
            areaCode: "140923",
            text: "代县"
          },
          {
            areaCode: "140924",
            text: "繁峙县"
          },
          {
            areaCode: "140925",
            text: "宁武县"
          },
          {
            areaCode: "140926",
            text: "静乐县"
          },
          {
            areaCode: "140927",
            text: "神池县"
          },
          {
            areaCode: "140928",
            text: "五寨县"
          },
          {
            areaCode: "140929",
            text: "岢岚县"
          },
          {
            areaCode: "140930",
            text: "河曲县"
          },
          {
            areaCode: "140931",
            text: "保德县"
          },
          {
            areaCode: "140932",
            text: "偏关县"
          },
          {
            areaCode: "140981",
            text: "原平市"
          }
        ]
      },
      {
        cityCode: "141000",
        text: "临汾市",
        children: [
          {
            areaCode: "141002",
            text: "尧都区"
          },
          {
            areaCode: "141021",
            text: "曲沃县"
          },
          {
            areaCode: "141022",
            text: "翼城县"
          },
          {
            areaCode: "141023",
            text: "襄汾县"
          },
          {
            areaCode: "141024",
            text: "洪洞县"
          },
          {
            areaCode: "141025",
            text: "古县"
          },
          {
            areaCode: "141026",
            text: "安泽县"
          },
          {
            areaCode: "141027",
            text: "浮山县"
          },
          {
            areaCode: "141028",
            text: "吉县"
          },
          {
            areaCode: "141029",
            text: "乡宁县"
          },
          {
            areaCode: "141030",
            text: "大宁县"
          },
          {
            areaCode: "141031",
            text: "隰县"
          },
          {
            areaCode: "141032",
            text: "永和县"
          },
          {
            areaCode: "141033",
            text: "蒲县"
          },
          {
            areaCode: "141034",
            text: "汾西县"
          },
          {
            areaCode: "141081",
            text: "侯马市"
          },
          {
            areaCode: "141082",
            text: "霍州市"
          }
        ]
      },
      {
        cityCode: "141100",
        text: "吕梁市",
        children: [
          {
            areaCode: "141102",
            text: "离石区"
          },
          {
            areaCode: "141121",
            text: "文水县"
          },
          {
            areaCode: "141122",
            text: "交城县"
          },
          {
            areaCode: "141123",
            text: "兴县"
          },
          {
            areaCode: "141124",
            text: "临县"
          },
          {
            areaCode: "141125",
            text: "柳林县"
          },
          {
            areaCode: "141126",
            text: "石楼县"
          },
          {
            areaCode: "141127",
            text: "岚县"
          },
          {
            areaCode: "141128",
            text: "方山县"
          },
          {
            areaCode: "141129",
            text: "中阳县"
          },
          {
            areaCode: "141130",
            text: "交口县"
          },
          {
            areaCode: "141181",
            text: "孝义市"
          },
          {
            areaCode: "141182",
            text: "汾阳市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "150000",
    text: "内蒙古自治区",
    children: [
      {
        cityCode: "150100",
        text: "呼和浩特市",
        children: [
          {
            areaCode: "150102",
            text: "新城区"
          },
          {
            areaCode: "150103",
            text: "回民区"
          },
          {
            areaCode: "150104",
            text: "玉泉区"
          },
          {
            areaCode: "150105",
            text: "赛罕区"
          },
          {
            areaCode: "150121",
            text: "土默特左旗"
          },
          {
            areaCode: "150122",
            text: "托克托县"
          },
          {
            areaCode: "150123",
            text: "和林格尔县"
          },
          {
            areaCode: "150124",
            text: "清水河县"
          },
          {
            areaCode: "150125",
            text: "武川县"
          }
        ]
      },
      {
        cityCode: "150200",
        text: "包头市",
        children: [
          {
            areaCode: "150202",
            text: "东河区"
          },
          {
            areaCode: "150203",
            text: "昆都仑区"
          },
          {
            areaCode: "150204",
            text: "青山区"
          },
          {
            areaCode: "150205",
            text: "石拐区"
          },
          {
            areaCode: "150206",
            text: "白云鄂博矿区"
          },
          {
            areaCode: "150207",
            text: "九原区"
          },
          {
            areaCode: "150221",
            text: "土默特右旗"
          },
          {
            areaCode: "150222",
            text: "固阳县"
          },
          {
            areaCode: "150223",
            text: "达尔罕茂明安联合旗"
          }
        ]
      },
      {
        cityCode: "150300",
        text: "乌海市",
        children: [
          {
            areaCode: "150302",
            text: "海勃湾区"
          },
          {
            areaCode: "150303",
            text: "海南区"
          },
          {
            areaCode: "150304",
            text: "乌达区"
          }
        ]
      },
      {
        cityCode: "150400",
        text: "赤峰市",
        children: [
          {
            areaCode: "150402",
            text: "红山区"
          },
          {
            areaCode: "150403",
            text: "元宝山区"
          },
          {
            areaCode: "150404",
            text: "松山区"
          },
          {
            areaCode: "150421",
            text: "阿鲁科尔沁旗"
          },
          {
            areaCode: "150422",
            text: "巴林左旗"
          },
          {
            areaCode: "150423",
            text: "巴林右旗"
          },
          {
            areaCode: "150424",
            text: "林西县"
          },
          {
            areaCode: "150425",
            text: "克什克腾旗"
          },
          {
            areaCode: "150426",
            text: "翁牛特旗"
          },
          {
            areaCode: "150428",
            text: "喀喇沁旗"
          },
          {
            areaCode: "150429",
            text: "宁城县"
          },
          {
            areaCode: "150430",
            text: "敖汉旗"
          }
        ]
      },
      {
        cityCode: "150500",
        text: "通辽市",
        children: [
          {
            areaCode: "150502",
            text: "科尔沁区"
          },
          {
            areaCode: "150521",
            text: "科尔沁左翼中旗"
          },
          {
            areaCode: "150522",
            text: "科尔沁左翼后旗"
          },
          {
            areaCode: "150523",
            text: "开鲁县"
          },
          {
            areaCode: "150524",
            text: "库伦旗"
          },
          {
            areaCode: "150525",
            text: "奈曼旗"
          },
          {
            areaCode: "150526",
            text: "扎鲁特旗"
          },
          {
            areaCode: "150581",
            text: "霍林郭勒市"
          }
        ]
      },
      {
        cityCode: "150600",
        text: "鄂尔多斯市",
        children: [
          {
            areaCode: "150602",
            text: "东胜区"
          },
          {
            areaCode: "150621",
            text: "达拉特旗"
          },
          {
            areaCode: "150622",
            text: "准格尔旗"
          },
          {
            areaCode: "150623",
            text: "鄂托克前旗"
          },
          {
            areaCode: "150624",
            text: "鄂托克旗"
          },
          {
            areaCode: "150625",
            text: "杭锦旗"
          },
          {
            areaCode: "150626",
            text: "乌审旗"
          },
          {
            areaCode: "150627",
            text: "伊金霍洛旗"
          }
        ]
      },
      {
        cityCode: "150700",
        text: "呼伦贝尔市",
        children: [
          {
            areaCode: "150702",
            text: "海拉尔区"
          },
          {
            areaCode: "150703",
            text: "扎赉诺尔区"
          },
          {
            areaCode: "150721",
            text: "阿荣旗"
          },
          {
            areaCode: "150722",
            text: "莫力达瓦达斡尔族自治旗"
          },
          {
            areaCode: "150723",
            text: "鄂伦春自治旗"
          },
          {
            areaCode: "150724",
            text: "鄂温克族自治旗"
          },
          {
            areaCode: "150725",
            text: "陈巴尔虎旗"
          },
          {
            areaCode: "150726",
            text: "新巴尔虎左旗"
          },
          {
            areaCode: "150727",
            text: "新巴尔虎右旗"
          },
          {
            areaCode: "150781",
            text: "满洲里市"
          },
          {
            areaCode: "150782",
            text: "牙克石市"
          },
          {
            areaCode: "150783",
            text: "扎兰屯市"
          },
          {
            areaCode: "150784",
            text: "额尔古纳市"
          },
          {
            areaCode: "150785",
            text: "根河市"
          }
        ]
      },
      {
        cityCode: "150800",
        text: "巴彦淖尔市",
        children: [
          {
            areaCode: "150802",
            text: "临河区"
          },
          {
            areaCode: "150821",
            text: "五原县"
          },
          {
            areaCode: "150822",
            text: "磴口县"
          },
          {
            areaCode: "150823",
            text: "乌拉特前旗"
          },
          {
            areaCode: "150824",
            text: "乌拉特中旗"
          },
          {
            areaCode: "150825",
            text: "乌拉特后旗"
          },
          {
            areaCode: "150826",
            text: "杭锦后旗"
          }
        ]
      },
      {
        cityCode: "150900",
        text: "乌兰察布市",
        children: [
          {
            areaCode: "150902",
            text: "集宁区"
          },
          {
            areaCode: "150921",
            text: "卓资县"
          },
          {
            areaCode: "150922",
            text: "化德县"
          },
          {
            areaCode: "150923",
            text: "商都县"
          },
          {
            areaCode: "150924",
            text: "兴和县"
          },
          {
            areaCode: "150925",
            text: "凉城县"
          },
          {
            areaCode: "150926",
            text: "察哈尔右翼前旗"
          },
          {
            areaCode: "150927",
            text: "察哈尔右翼中旗"
          },
          {
            areaCode: "150928",
            text: "察哈尔右翼后旗"
          },
          {
            areaCode: "150929",
            text: "四子王旗"
          },
          {
            areaCode: "150981",
            text: "丰镇市"
          }
        ]
      },
      {
        cityCode: "152200",
        text: "兴安盟",
        children: [
          {
            areaCode: "152201",
            text: "乌兰浩特市"
          },
          {
            areaCode: "152202",
            text: "阿尔山市"
          },
          {
            areaCode: "152221",
            text: "科尔沁右翼前旗"
          },
          {
            areaCode: "152222",
            text: "科尔沁右翼中旗"
          },
          {
            areaCode: "152223",
            text: "扎赉特旗"
          },
          {
            areaCode: "152224",
            text: "突泉县"
          }
        ]
      },
      {
        cityCode: "152500",
        text: "锡林郭勒盟",
        children: [
          {
            areaCode: "152501",
            text: "二连浩特市"
          },
          {
            areaCode: "152502",
            text: "锡林浩特市"
          },
          {
            areaCode: "152522",
            text: "阿巴嘎旗"
          },
          {
            areaCode: "152523",
            text: "苏尼特左旗"
          },
          {
            areaCode: "152524",
            text: "苏尼特右旗"
          },
          {
            areaCode: "152525",
            text: "东乌珠穆沁旗"
          },
          {
            areaCode: "152526",
            text: "西乌珠穆沁旗"
          },
          {
            areaCode: "152527",
            text: "太仆寺旗"
          },
          {
            areaCode: "152528",
            text: "镶黄旗"
          },
          {
            areaCode: "152529",
            text: "正镶白旗"
          },
          {
            areaCode: "152530",
            text: "正蓝旗"
          },
          {
            areaCode: "152531",
            text: "多伦县"
          }
        ]
      },
      {
        cityCode: "152900",
        text: "阿拉善盟",
        children: [
          {
            areaCode: "152921",
            text: "阿拉善左旗"
          },
          {
            areaCode: "152922",
            text: "阿拉善右旗"
          },
          {
            areaCode: "152923",
            text: "额济纳旗"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "210000",
    text: "辽宁省",
    children: [
      {
        cityCode: "210100",
        text: "沈阳市",
        children: [
          {
            areaCode: "210102",
            text: "和平区"
          },
          {
            areaCode: "210103",
            text: "沈河区"
          },
          {
            areaCode: "210104",
            text: "大东区"
          },
          {
            areaCode: "210105",
            text: "皇姑区"
          },
          {
            areaCode: "210106",
            text: "铁西区"
          },
          {
            areaCode: "210111",
            text: "苏家屯区"
          },
          {
            areaCode: "210112",
            text: "浑南区"
          },
          {
            areaCode: "210113",
            text: "沈北新区"
          },
          {
            areaCode: "210114",
            text: "于洪区"
          },
          {
            areaCode: "210122",
            text: "辽中县"
          },
          {
            areaCode: "210123",
            text: "康平县"
          },
          {
            areaCode: "210124",
            text: "法库县"
          },
          {
            areaCode: "210181",
            text: "新民市"
          }
        ]
      },
      {
        cityCode: "210200",
        text: "大连市",
        children: [
          {
            areaCode: "210202",
            text: "中山区"
          },
          {
            areaCode: "210203",
            text: "西岗区"
          },
          {
            areaCode: "210204",
            text: "沙河口区"
          },
          {
            areaCode: "210211",
            text: "甘井子区"
          },
          {
            areaCode: "210212",
            text: "旅顺口区"
          },
          {
            areaCode: "210213",
            text: "金州区"
          },
          {
            areaCode: "210224",
            text: "长海县"
          },
          {
            areaCode: "210281",
            text: "瓦房店市"
          },
          {
            areaCode: "210282",
            text: "普兰店市"
          },
          {
            areaCode: "210283",
            text: "庄河市"
          }
        ]
      },
      {
        cityCode: "210300",
        text: "鞍山市",
        children: [
          {
            areaCode: "210302",
            text: "铁东区"
          },
          {
            areaCode: "210303",
            text: "铁西区"
          },
          {
            areaCode: "210304",
            text: "立山区"
          },
          {
            areaCode: "210311",
            text: "千山区"
          },
          {
            areaCode: "210321",
            text: "台安县"
          },
          {
            areaCode: "210323",
            text: "岫岩满族自治县"
          },
          {
            areaCode: "210381",
            text: "海城市"
          }
        ]
      },
      {
        cityCode: "210400",
        text: "抚顺市",
        children: [
          {
            areaCode: "210402",
            text: "新抚区"
          },
          {
            areaCode: "210403",
            text: "东洲区"
          },
          {
            areaCode: "210404",
            text: "望花区"
          },
          {
            areaCode: "210411",
            text: "顺城区"
          },
          {
            areaCode: "210421",
            text: "抚顺县"
          },
          {
            areaCode: "210422",
            text: "新宾满族自治县"
          },
          {
            areaCode: "210423",
            text: "清原满族自治县"
          }
        ]
      },
      {
        cityCode: "210500",
        text: "本溪市",
        children: [
          {
            areaCode: "210502",
            text: "平山区"
          },
          {
            areaCode: "210503",
            text: "溪湖区"
          },
          {
            areaCode: "210504",
            text: "明山区"
          },
          {
            areaCode: "210505",
            text: "南芬区"
          },
          {
            areaCode: "210521",
            text: "本溪满族自治县"
          },
          {
            areaCode: "210522",
            text: "桓仁满族自治县"
          }
        ]
      },
      {
        cityCode: "210600",
        text: "丹东市",
        children: [
          {
            areaCode: "210602",
            text: "元宝区"
          },
          {
            areaCode: "210603",
            text: "振兴区"
          },
          {
            areaCode: "210604",
            text: "振安区"
          },
          {
            areaCode: "210624",
            text: "宽甸满族自治县"
          },
          {
            areaCode: "210681",
            text: "东港市"
          },
          {
            areaCode: "210682",
            text: "凤城市"
          }
        ]
      },
      {
        cityCode: "210700",
        text: "锦州市",
        children: [
          {
            areaCode: "210702",
            text: "古塔区"
          },
          {
            areaCode: "210703",
            text: "凌河区"
          },
          {
            areaCode: "210711",
            text: "太和区"
          },
          {
            areaCode: "210726",
            text: "黑山县"
          },
          {
            areaCode: "210727",
            text: "义县"
          },
          {
            areaCode: "210781",
            text: "凌海市"
          },
          {
            areaCode: "210782",
            text: "北镇市"
          }
        ]
      },
      {
        cityCode: "210800",
        text: "营口市",
        children: [
          {
            areaCode: "210802",
            text: "站前区"
          },
          {
            areaCode: "210803",
            text: "西市区"
          },
          {
            areaCode: "210804",
            text: "鲅鱼圈区"
          },
          {
            areaCode: "210811",
            text: "老边区"
          },
          {
            areaCode: "210881",
            text: "盖州市"
          },
          {
            areaCode: "210882",
            text: "大石桥市"
          }
        ]
      },
      {
        cityCode: "210900",
        text: "阜新市",
        children: [
          {
            areaCode: "210902",
            text: "海州区"
          },
          {
            areaCode: "210903",
            text: "新邱区"
          },
          {
            areaCode: "210904",
            text: "太平区"
          },
          {
            areaCode: "210905",
            text: "清河门区"
          },
          {
            areaCode: "210911",
            text: "细河区"
          },
          {
            areaCode: "210921",
            text: "阜新蒙古族自治县"
          },
          {
            areaCode: "210922",
            text: "彰武县"
          }
        ]
      },
      {
        cityCode: "211000",
        text: "辽阳市",
        children: [
          {
            areaCode: "211002",
            text: "白塔区"
          },
          {
            areaCode: "211003",
            text: "文圣区"
          },
          {
            areaCode: "211004",
            text: "宏伟区"
          },
          {
            areaCode: "211005",
            text: "弓长岭区"
          },
          {
            areaCode: "211011",
            text: "太子河区"
          },
          {
            areaCode: "211021",
            text: "辽阳县"
          },
          {
            areaCode: "211081",
            text: "灯塔市"
          }
        ]
      },
      {
        cityCode: "211100",
        text: "盘锦市",
        children: [
          {
            areaCode: "211102",
            text: "双台子区"
          },
          {
            areaCode: "211103",
            text: "兴隆台区"
          },
          {
            areaCode: "211121",
            text: "大洼县"
          },
          {
            areaCode: "211122",
            text: "盘山县"
          }
        ]
      },
      {
        cityCode: "211200",
        text: "铁岭市",
        children: [
          {
            areaCode: "211202",
            text: "银州区"
          },
          {
            areaCode: "211204",
            text: "清河区"
          },
          {
            areaCode: "211221",
            text: "铁岭县"
          },
          {
            areaCode: "211223",
            text: "西丰县"
          },
          {
            areaCode: "211224",
            text: "昌图县"
          },
          {
            areaCode: "211281",
            text: "调兵山市"
          },
          {
            areaCode: "211282",
            text: "开原市"
          }
        ]
      },
      {
        cityCode: "211300",
        text: "朝阳市",
        children: [
          {
            areaCode: "211302",
            text: "双塔区"
          },
          {
            areaCode: "211303",
            text: "龙城区"
          },
          {
            areaCode: "211321",
            text: "朝阳县"
          },
          {
            areaCode: "211322",
            text: "建平县"
          },
          {
            areaCode: "211324",
            text: "喀喇沁左翼蒙古族自治县"
          },
          {
            areaCode: "211381",
            text: "北票市"
          },
          {
            areaCode: "211382",
            text: "凌源市"
          }
        ]
      },
      {
        cityCode: "211400",
        text: "葫芦岛市",
        children: [
          {
            areaCode: "211402",
            text: "连山区"
          },
          {
            areaCode: "211403",
            text: "龙港区"
          },
          {
            areaCode: "211404",
            text: "南票区"
          },
          {
            areaCode: "211421",
            text: "绥中县"
          },
          {
            areaCode: "211422",
            text: "建昌县"
          },
          {
            areaCode: "211481",
            text: "兴城市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "220000",
    text: "吉林省",
    children: [
      {
        cityCode: "220100",
        text: "长春市",
        children: [
          {
            areaCode: "220102",
            text: "南关区"
          },
          {
            areaCode: "220103",
            text: "宽城区"
          },
          {
            areaCode: "220104",
            text: "朝阳区"
          },
          {
            areaCode: "220105",
            text: "二道区"
          },
          {
            areaCode: "220106",
            text: "绿园区"
          },
          {
            areaCode: "220112",
            text: "双阳区"
          },
          {
            areaCode: "220113",
            text: "九台区"
          },
          {
            areaCode: "220122",
            text: "农安县"
          },
          {
            areaCode: "220182",
            text: "榆树市"
          },
          {
            areaCode: "220183",
            text: "德惠市"
          }
        ]
      },
      {
        cityCode: "220200",
        text: "吉林市",
        children: [
          {
            areaCode: "220202",
            text: "昌邑区"
          },
          {
            areaCode: "220203",
            text: "龙潭区"
          },
          {
            areaCode: "220204",
            text: "船营区"
          },
          {
            areaCode: "220211",
            text: "丰满区"
          },
          {
            areaCode: "220221",
            text: "永吉县"
          },
          {
            areaCode: "220281",
            text: "蛟河市"
          },
          {
            areaCode: "220282",
            text: "桦甸市"
          },
          {
            areaCode: "220283",
            text: "舒兰市"
          },
          {
            areaCode: "220284",
            text: "磐石市"
          }
        ]
      },
      {
        cityCode: "220300",
        text: "四平市",
        children: [
          {
            areaCode: "220302",
            text: "铁西区"
          },
          {
            areaCode: "220303",
            text: "铁东区"
          },
          {
            areaCode: "220322",
            text: "梨树县"
          },
          {
            areaCode: "220323",
            text: "伊通满族自治县"
          },
          {
            areaCode: "220381",
            text: "公主岭市"
          },
          {
            areaCode: "220382",
            text: "双辽市"
          }
        ]
      },
      {
        cityCode: "220400",
        text: "辽源市",
        children: [
          {
            areaCode: "220402",
            text: "龙山区"
          },
          {
            areaCode: "220403",
            text: "西安区"
          },
          {
            areaCode: "220421",
            text: "东丰县"
          },
          {
            areaCode: "220422",
            text: "东辽县"
          }
        ]
      },
      {
        cityCode: "220500",
        text: "通化市",
        children: [
          {
            areaCode: "220502",
            text: "东昌区"
          },
          {
            areaCode: "220503",
            text: "二道江区"
          },
          {
            areaCode: "220521",
            text: "通化县"
          },
          {
            areaCode: "220523",
            text: "辉南县"
          },
          {
            areaCode: "220524",
            text: "柳河县"
          },
          {
            areaCode: "220581",
            text: "梅河口市"
          },
          {
            areaCode: "220582",
            text: "集安市"
          }
        ]
      },
      {
        cityCode: "220600",
        text: "白山市",
        children: [
          {
            areaCode: "220602",
            text: "浑江区"
          },
          {
            areaCode: "220605",
            text: "江源区"
          },
          {
            areaCode: "220621",
            text: "抚松县"
          },
          {
            areaCode: "220622",
            text: "靖宇县"
          },
          {
            areaCode: "220623",
            text: "长白朝鲜族自治县"
          },
          {
            areaCode: "220681",
            text: "临江市"
          }
        ]
      },
      {
        cityCode: "220700",
        text: "松原市",
        children: [
          {
            areaCode: "220702",
            text: "宁江区"
          },
          {
            areaCode: "220721",
            text: "前郭尔罗斯蒙古族自治县"
          },
          {
            areaCode: "220722",
            text: "长岭县"
          },
          {
            areaCode: "220723",
            text: "乾安县"
          },
          {
            areaCode: "220781",
            text: "扶余市"
          }
        ]
      },
      {
        cityCode: "220800",
        text: "白城市",
        children: [
          {
            areaCode: "220802",
            text: "洮北区"
          },
          {
            areaCode: "220821",
            text: "镇赉县"
          },
          {
            areaCode: "220822",
            text: "通榆县"
          },
          {
            areaCode: "220881",
            text: "洮南市"
          },
          {
            areaCode: "220882",
            text: "大安市"
          }
        ]
      },
      {
        cityCode: "222400",
        text: "延边朝鲜族自治州",
        children: [
          {
            areaCode: "222401",
            text: "延吉市"
          },
          {
            areaCode: "222402",
            text: "图们市"
          },
          {
            areaCode: "222403",
            text: "敦化市"
          },
          {
            areaCode: "222404",
            text: "珲春市"
          },
          {
            areaCode: "222405",
            text: "龙井市"
          },
          {
            areaCode: "222406",
            text: "和龙市"
          },
          {
            areaCode: "222424",
            text: "汪清县"
          },
          {
            areaCode: "222426",
            text: "安图县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "230000",
    text: "黑龙江省",
    children: [
      {
        cityCode: "230100",
        text: "哈尔滨市",
        children: [
          {
            areaCode: "230102",
            text: "道里区"
          },
          {
            areaCode: "230103",
            text: "南岗区"
          },
          {
            areaCode: "230104",
            text: "道外区"
          },
          {
            areaCode: "230108",
            text: "平房区"
          },
          {
            areaCode: "230109",
            text: "松北区"
          },
          {
            areaCode: "230110",
            text: "香坊区"
          },
          {
            areaCode: "230111",
            text: "呼兰区"
          },
          {
            areaCode: "230112",
            text: "阿城区"
          },
          {
            areaCode: "230123",
            text: "依兰县"
          },
          {
            areaCode: "230124",
            text: "方正县"
          },
          {
            areaCode: "230125",
            text: "宾县"
          },
          {
            areaCode: "230126",
            text: "巴彦县"
          },
          {
            areaCode: "230127",
            text: "木兰县"
          },
          {
            areaCode: "230128",
            text: "通河县"
          },
          {
            areaCode: "230129",
            text: "延寿县"
          },
          {
            areaCode: "230182",
            text: "双城市"
          },
          {
            areaCode: "230183",
            text: "尚志市"
          },
          {
            areaCode: "230184",
            text: "五常市"
          }
        ]
      },
      {
        cityCode: "230200",
        text: "齐齐哈尔市",
        children: [
          {
            areaCode: "230202",
            text: "龙沙区"
          },
          {
            areaCode: "230203",
            text: "建华区"
          },
          {
            areaCode: "230204",
            text: "铁锋区"
          },
          {
            areaCode: "230205",
            text: "昂昂溪区"
          },
          {
            areaCode: "230206",
            text: "富拉尔基区"
          },
          {
            areaCode: "230207",
            text: "碾子山区"
          },
          {
            areaCode: "230208",
            text: "梅里斯达斡尔族区"
          },
          {
            areaCode: "230221",
            text: "龙江县"
          },
          {
            areaCode: "230223",
            text: "依安县"
          },
          {
            areaCode: "230224",
            text: "泰来县"
          },
          {
            areaCode: "230225",
            text: "甘南县"
          },
          {
            areaCode: "230227",
            text: "富裕县"
          },
          {
            areaCode: "230229",
            text: "克山县"
          },
          {
            areaCode: "230230",
            text: "克东县"
          },
          {
            areaCode: "230231",
            text: "拜泉县"
          },
          {
            areaCode: "230281",
            text: "讷河市"
          }
        ]
      },
      {
        cityCode: "230300",
        text: "鸡西市",
        children: [
          {
            areaCode: "230302",
            text: "鸡冠区"
          },
          {
            areaCode: "230303",
            text: "恒山区"
          },
          {
            areaCode: "230304",
            text: "滴道区"
          },
          {
            areaCode: "230305",
            text: "梨树区"
          },
          {
            areaCode: "230306",
            text: "城子河区"
          },
          {
            areaCode: "230307",
            text: "麻山区"
          },
          {
            areaCode: "230321",
            text: "鸡东县"
          },
          {
            areaCode: "230381",
            text: "虎林市"
          },
          {
            areaCode: "230382",
            text: "密山市"
          }
        ]
      },
      {
        cityCode: "230400",
        text: "鹤岗市",
        children: [
          {
            areaCode: "230402",
            text: "向阳区"
          },
          {
            areaCode: "230403",
            text: "工农区"
          },
          {
            areaCode: "230404",
            text: "南山区"
          },
          {
            areaCode: "230405",
            text: "兴安区"
          },
          {
            areaCode: "230406",
            text: "东山区"
          },
          {
            areaCode: "230407",
            text: "兴山区"
          },
          {
            areaCode: "230421",
            text: "萝北县"
          },
          {
            areaCode: "230422",
            text: "绥滨县"
          }
        ]
      },
      {
        cityCode: "230500",
        text: "双鸭山市",
        children: [
          {
            areaCode: "230502",
            text: "尖山区"
          },
          {
            areaCode: "230503",
            text: "岭东区"
          },
          {
            areaCode: "230505",
            text: "四方台区"
          },
          {
            areaCode: "230506",
            text: "宝山区"
          },
          {
            areaCode: "230521",
            text: "集贤县"
          },
          {
            areaCode: "230522",
            text: "友谊县"
          },
          {
            areaCode: "230523",
            text: "宝清县"
          },
          {
            areaCode: "230524",
            text: "饶河县"
          }
        ]
      },
      {
        cityCode: "230600",
        text: "大庆市",
        children: [
          {
            areaCode: "230602",
            text: "萨尔图区"
          },
          {
            areaCode: "230603",
            text: "龙凤区"
          },
          {
            areaCode: "230604",
            text: "让胡路区"
          },
          {
            areaCode: "230605",
            text: "红岗区"
          },
          {
            areaCode: "230606",
            text: "大同区"
          },
          {
            areaCode: "230621",
            text: "肇州县"
          },
          {
            areaCode: "230622",
            text: "肇源县"
          },
          {
            areaCode: "230623",
            text: "林甸县"
          },
          {
            areaCode: "230624",
            text: "杜尔伯特蒙古族自治县"
          }
        ]
      },
      {
        cityCode: "230700",
        text: "伊春市",
        children: [
          {
            areaCode: "230702",
            text: "伊春区"
          },
          {
            areaCode: "230703",
            text: "南岔区"
          },
          {
            areaCode: "230704",
            text: "友好区"
          },
          {
            areaCode: "230705",
            text: "西林区"
          },
          {
            areaCode: "230706",
            text: "翠峦区"
          },
          {
            areaCode: "230707",
            text: "新青区"
          },
          {
            areaCode: "230708",
            text: "美溪区"
          },
          {
            areaCode: "230709",
            text: "金山屯区"
          },
          {
            areaCode: "230710",
            text: "五营区"
          },
          {
            areaCode: "230711",
            text: "乌马河区"
          },
          {
            areaCode: "230712",
            text: "汤旺河区"
          },
          {
            areaCode: "230713",
            text: "带岭区"
          },
          {
            areaCode: "230714",
            text: "乌伊岭区"
          },
          {
            areaCode: "230715",
            text: "红星区"
          },
          {
            areaCode: "230716",
            text: "上甘岭区"
          },
          {
            areaCode: "230722",
            text: "嘉荫县"
          },
          {
            areaCode: "230781",
            text: "铁力市"
          }
        ]
      },
      {
        cityCode: "230800",
        text: "佳木斯市",
        children: [
          {
            areaCode: "230803",
            text: "向阳区"
          },
          {
            areaCode: "230804",
            text: "前进区"
          },
          {
            areaCode: "230805",
            text: "东风区"
          },
          {
            areaCode: "230811",
            text: "郊区"
          },
          {
            areaCode: "230822",
            text: "桦南县"
          },
          {
            areaCode: "230826",
            text: "桦川县"
          },
          {
            areaCode: "230828",
            text: "汤原县"
          },
          {
            areaCode: "230833",
            text: "抚远县"
          },
          {
            areaCode: "230881",
            text: "同江市"
          },
          {
            areaCode: "230882",
            text: "富锦市"
          }
        ]
      },
      {
        cityCode: "230900",
        text: "七台河市",
        children: [
          {
            areaCode: "230902",
            text: "新兴区"
          },
          {
            areaCode: "230903",
            text: "桃山区"
          },
          {
            areaCode: "230904",
            text: "茄子河区"
          },
          {
            areaCode: "230921",
            text: "勃利县"
          }
        ]
      },
      {
        cityCode: "231000",
        text: "牡丹江市",
        children: [
          {
            areaCode: "231002",
            text: "东安区"
          },
          {
            areaCode: "231003",
            text: "阳明区"
          },
          {
            areaCode: "231004",
            text: "爱民区"
          },
          {
            areaCode: "231005",
            text: "西安区"
          },
          {
            areaCode: "231024",
            text: "东宁县"
          },
          {
            areaCode: "231025",
            text: "林口县"
          },
          {
            areaCode: "231081",
            text: "绥芬河市"
          },
          {
            areaCode: "231083",
            text: "海林市"
          },
          {
            areaCode: "231084",
            text: "宁安市"
          },
          {
            areaCode: "231085",
            text: "穆棱市"
          }
        ]
      },
      {
        cityCode: "231100",
        text: "黑河市",
        children: [
          {
            areaCode: "231102",
            text: "爱辉区"
          },
          {
            areaCode: "231121",
            text: "嫩江县"
          },
          {
            areaCode: "231123",
            text: "逊克县"
          },
          {
            areaCode: "231124",
            text: "孙吴县"
          },
          {
            areaCode: "231181",
            text: "北安市"
          },
          {
            areaCode: "231182",
            text: "五大连池市"
          }
        ]
      },
      {
        cityCode: "231200",
        text: "绥化市",
        children: [
          {
            areaCode: "231202",
            text: "北林区"
          },
          {
            areaCode: "231221",
            text: "望奎县"
          },
          {
            areaCode: "231222",
            text: "兰西县"
          },
          {
            areaCode: "231223",
            text: "青冈县"
          },
          {
            areaCode: "231224",
            text: "庆安县"
          },
          {
            areaCode: "231225",
            text: "明水县"
          },
          {
            areaCode: "231226",
            text: "绥棱县"
          },
          {
            areaCode: "231281",
            text: "安达市"
          },
          {
            areaCode: "231282",
            text: "肇东市"
          },
          {
            areaCode: "231283",
            text: "海伦市"
          }
        ]
      },
      {
        cityCode: "232700",
        text: "大兴安岭地区",
        children: [
          {
            areaCode: "232721",
            text: "呼玛县"
          },
          {
            areaCode: "232722",
            text: "塔河县"
          },
          {
            areaCode: "232723",
            text: "漠河县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "310000",
    text: "上海市",
    children: [
      {
        cityCode: "310100",
        text: "上海市",
        children: [
          {
            areaCode: "310101",
            text: "黄浦区"
          },
          {
            areaCode: "310104",
            text: "徐汇区"
          },
          {
            areaCode: "310105",
            text: "长宁区"
          },
          {
            areaCode: "310106",
            text: "静安区"
          },
          {
            areaCode: "310107",
            text: "普陀区"
          },
          {
            areaCode: "310108",
            text: "闸北区"
          },
          {
            areaCode: "310109",
            text: "虹口区"
          },
          {
            areaCode: "310110",
            text: "杨浦区"
          },
          {
            areaCode: "310112",
            text: "闵行区"
          },
          {
            areaCode: "310113",
            text: "宝山区"
          },
          {
            areaCode: "310114",
            text: "嘉定区"
          },
          {
            areaCode: "310115",
            text: "浦东新区"
          },
          {
            areaCode: "310116",
            text: "金山区"
          },
          {
            areaCode: "310117",
            text: "松江区"
          },
          {
            areaCode: "310118",
            text: "青浦区"
          },
          {
            areaCode: "310120",
            text: "奉贤区"
          }
        ]
      },
      {
        cityCode: "310200",
        text: "上海市辖县",
        children: [
          {
            areaCode: "310230",
            text: "崇明县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "320000",
    text: "江苏省",
    children: [
      {
        cityCode: "320100",
        text: "南京市",
        children: [
          {
            areaCode: "320102",
            text: "玄武区"
          },
          {
            areaCode: "320104",
            text: "秦淮区"
          },
          {
            areaCode: "320105",
            text: "建邺区"
          },
          {
            areaCode: "320106",
            text: "鼓楼区"
          },
          {
            areaCode: "320111",
            text: "浦口区"
          },
          {
            areaCode: "320113",
            text: "栖霞区"
          },
          {
            areaCode: "320114",
            text: "雨花台区"
          },
          {
            areaCode: "320115",
            text: "江宁区"
          },
          {
            areaCode: "320116",
            text: "六合区"
          },
          {
            areaCode: "320117",
            text: "溧水区"
          },
          {
            areaCode: "320118",
            text: "高淳区"
          }
        ]
      },
      {
        cityCode: "320200",
        text: "无锡市",
        children: [
          {
            areaCode: "320202",
            text: "崇安区"
          },
          {
            areaCode: "320203",
            text: "南长区"
          },
          {
            areaCode: "320204",
            text: "北塘区"
          },
          {
            areaCode: "320205",
            text: "锡山区"
          },
          {
            areaCode: "320206",
            text: "惠山区"
          },
          {
            areaCode: "320211",
            text: "滨湖区"
          },
          {
            areaCode: "320281",
            text: "江阴市"
          },
          {
            areaCode: "320282",
            text: "宜兴市"
          }
        ]
      },
      {
        cityCode: "320300",
        text: "徐州市",
        children: [
          {
            areaCode: "320302",
            text: "鼓楼区"
          },
          {
            areaCode: "320303",
            text: "云龙区"
          },
          {
            areaCode: "320305",
            text: "贾汪区"
          },
          {
            areaCode: "320311",
            text: "泉山区"
          },
          {
            areaCode: "320312",
            text: "铜山区"
          },
          {
            areaCode: "320321",
            text: "丰县"
          },
          {
            areaCode: "320322",
            text: "沛县"
          },
          {
            areaCode: "320324",
            text: "睢宁县"
          },
          {
            areaCode: "320381",
            text: "新沂市"
          },
          {
            areaCode: "320382",
            text: "邳州市"
          }
        ]
      },
      {
        cityCode: "320400",
        text: "常州市",
        children: [
          {
            areaCode: "320402",
            text: "天宁区"
          },
          {
            areaCode: "320404",
            text: "钟楼区"
          },
          {
            areaCode: "320405",
            text: "戚墅堰区"
          },
          {
            areaCode: "320411",
            text: "新北区"
          },
          {
            areaCode: "320412",
            text: "武进区"
          },
          {
            areaCode: "320481",
            text: "溧阳市"
          },
          {
            areaCode: "320482",
            text: "金坛市"
          }
        ]
      },
      {
        cityCode: "320500",
        text: "苏州市",
        children: [
          {
            areaCode: "320505",
            text: "虎丘区"
          },
          {
            areaCode: "320506",
            text: "吴中区"
          },
          {
            areaCode: "320507",
            text: "相城区"
          },
          {
            areaCode: "320508",
            text: "姑苏区"
          },
          {
            areaCode: "320509",
            text: "吴江区"
          },
          {
            areaCode: "320581",
            text: "常熟市"
          },
          {
            areaCode: "320582",
            text: "张家港市"
          },
          {
            areaCode: "320583",
            text: "昆山市"
          },
          {
            areaCode: "320585",
            text: "太仓市"
          }
        ]
      },
      {
        cityCode: "320600",
        text: "南通市",
        children: [
          {
            areaCode: "320602",
            text: "崇川区"
          },
          {
            areaCode: "320611",
            text: "港闸区"
          },
          {
            areaCode: "320612",
            text: "通州区"
          },
          {
            areaCode: "320621",
            text: "海安县"
          },
          {
            areaCode: "320623",
            text: "如东县"
          },
          {
            areaCode: "320681",
            text: "启东市"
          },
          {
            areaCode: "320682",
            text: "如皋市"
          },
          {
            areaCode: "320684",
            text: "海门市"
          }
        ]
      },
      {
        cityCode: "320700",
        text: "连云港市",
        children: [
          {
            areaCode: "320703",
            text: "连云区"
          },
          {
            areaCode: "320705",
            text: "新浦"
          },
          {
            areaCode: "320706",
            text: "海州区"
          },
          {
            areaCode: "320707",
            text: "赣榆区"
          },
          {
            areaCode: "320722",
            text: "东海县"
          },
          {
            areaCode: "320723",
            text: "灌云县"
          },
          {
            areaCode: "320724",
            text: "灌南县"
          }
        ]
      },
      {
        cityCode: "320800",
        text: "淮安市",
        children: [
          {
            areaCode: "320802",
            text: "清河区"
          },
          {
            areaCode: "320803",
            text: "淮安区"
          },
          {
            areaCode: "320804",
            text: "淮阴区"
          },
          {
            areaCode: "320811",
            text: "清浦区"
          },
          {
            areaCode: "320826",
            text: "涟水县"
          },
          {
            areaCode: "320829",
            text: "洪泽县"
          },
          {
            areaCode: "320830",
            text: "盱眙县"
          },
          {
            areaCode: "320831",
            text: "金湖县"
          }
        ]
      },
      {
        cityCode: "320900",
        text: "盐城市",
        children: [
          {
            areaCode: "320902",
            text: "亭湖区"
          },
          {
            areaCode: "320903",
            text: "盐都区"
          },
          {
            areaCode: "320921",
            text: "响水县"
          },
          {
            areaCode: "320922",
            text: "滨海县"
          },
          {
            areaCode: "320923",
            text: "阜宁县"
          },
          {
            areaCode: "320924",
            text: "射阳县"
          },
          {
            areaCode: "320925",
            text: "建湖县"
          },
          {
            areaCode: "320981",
            text: "东台市"
          },
          {
            areaCode: "320982",
            text: "大丰市"
          }
        ]
      },
      {
        cityCode: "321000",
        text: "扬州市",
        children: [
          {
            areaCode: "321002",
            text: "广陵区"
          },
          {
            areaCode: "321003",
            text: "邗江区"
          },
          {
            areaCode: "321012",
            text: "江都区"
          },
          {
            areaCode: "321023",
            text: "宝应县"
          },
          {
            areaCode: "321081",
            text: "仪征市"
          },
          {
            areaCode: "321084",
            text: "高邮市"
          }
        ]
      },
      {
        cityCode: "321100",
        text: "镇江市",
        children: [
          {
            areaCode: "321102",
            text: "京口区"
          },
          {
            areaCode: "321111",
            text: "润州区"
          },
          {
            areaCode: "321112",
            text: "丹徒区"
          },
          {
            areaCode: "321181",
            text: "丹阳市"
          },
          {
            areaCode: "321182",
            text: "扬中市"
          },
          {
            areaCode: "321183",
            text: "句容市"
          }
        ]
      },
      {
        cityCode: "321200",
        text: "泰州市",
        children: [
          {
            areaCode: "321202",
            text: "海陵区"
          },
          {
            areaCode: "321203",
            text: "高港区"
          },
          {
            areaCode: "321204",
            text: "姜堰区"
          },
          {
            areaCode: "321281",
            text: "兴化市"
          },
          {
            areaCode: "321282",
            text: "靖江市"
          },
          {
            areaCode: "321283",
            text: "泰兴市"
          }
        ]
      },
      {
        cityCode: "321300",
        text: "宿迁市",
        children: [
          {
            areaCode: "321302",
            text: "宿城区"
          },
          {
            areaCode: "321311",
            text: "宿豫区"
          },
          {
            areaCode: "321322",
            text: "沭阳县"
          },
          {
            areaCode: "321323",
            text: "泗阳县"
          },
          {
            areaCode: "321324",
            text: "泗洪县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "330000",
    text: "浙江省",
    children: [
      {
        cityCode: "330100",
        text: "杭州市",
        children: [
          {
            areaCode: "330102",
            text: "上城区"
          },
          {
            areaCode: "330103",
            text: "下城区"
          },
          {
            areaCode: "330104",
            text: "江干区"
          },
          {
            areaCode: "330105",
            text: "拱墅区"
          },
          {
            areaCode: "330106",
            text: "西湖区"
          },
          {
            areaCode: "330108",
            text: "滨江区"
          },
          {
            areaCode: "330109",
            text: "萧山区"
          },
          {
            areaCode: "330110",
            text: "余杭区"
          },
          {
            areaCode: "330122",
            text: "桐庐县"
          },
          {
            areaCode: "330127",
            text: "淳安县"
          },
          {
            areaCode: "330182",
            text: "建德市"
          },
          {
            areaCode: "330183",
            text: "富阳市"
          },
          {
            areaCode: "330185",
            text: "临安市"
          }
        ]
      },
      {
        cityCode: "330200",
        text: "宁波市",
        children: [
          {
            areaCode: "330203",
            text: "海曙区"
          },
          {
            areaCode: "330204",
            text: "江东区"
          },
          {
            areaCode: "330205",
            text: "江北区"
          },
          {
            areaCode: "330206",
            text: "北仑区"
          },
          {
            areaCode: "330211",
            text: "镇海区"
          },
          {
            areaCode: "330212",
            text: "鄞州区"
          },
          {
            areaCode: "330225",
            text: "象山县"
          },
          {
            areaCode: "330226",
            text: "宁海县"
          },
          {
            areaCode: "330281",
            text: "余姚市"
          },
          {
            areaCode: "330282",
            text: "慈溪市"
          },
          {
            areaCode: "330283",
            text: "奉化市"
          }
        ]
      },
      {
        cityCode: "330300",
        text: "温州市",
        children: [
          {
            areaCode: "330302",
            text: "鹿城区"
          },
          {
            areaCode: "330303",
            text: "龙湾区"
          },
          {
            areaCode: "330304",
            text: "瓯海区"
          },
          {
            areaCode: "330322",
            text: "洞头县"
          },
          {
            areaCode: "330324",
            text: "永嘉县"
          },
          {
            areaCode: "330326",
            text: "平阳县"
          },
          {
            areaCode: "330327",
            text: "苍南县"
          },
          {
            areaCode: "330328",
            text: "文成县"
          },
          {
            areaCode: "330329",
            text: "泰顺县"
          },
          {
            areaCode: "330381",
            text: "瑞安市"
          },
          {
            areaCode: "330382",
            text: "乐清市"
          }
        ]
      },
      {
        cityCode: "330400",
        text: "嘉兴市",
        children: [
          {
            areaCode: "330402",
            text: "南湖区"
          },
          {
            areaCode: "330411",
            text: "秀洲区"
          },
          {
            areaCode: "330421",
            text: "嘉善县"
          },
          {
            areaCode: "330424",
            text: "海盐县"
          },
          {
            areaCode: "330481",
            text: "海宁市"
          },
          {
            areaCode: "330482",
            text: "平湖市"
          },
          {
            areaCode: "330483",
            text: "桐乡市"
          }
        ]
      },
      {
        cityCode: "330500",
        text: "湖州市",
        children: [
          {
            areaCode: "330502",
            text: "吴兴区"
          },
          {
            areaCode: "330503",
            text: "南浔区"
          },
          {
            areaCode: "330521",
            text: "德清县"
          },
          {
            areaCode: "330522",
            text: "长兴县"
          },
          {
            areaCode: "330523",
            text: "安吉县"
          }
        ]
      },
      {
        cityCode: "330600",
        text: "绍兴市",
        children: [
          {
            areaCode: "330602",
            text: "越城区"
          },
          {
            areaCode: "330603",
            text: "柯桥区"
          },
          {
            areaCode: "330604",
            text: "上虞区"
          },
          {
            areaCode: "330624",
            text: "新昌县"
          },
          {
            areaCode: "330681",
            text: "诸暨市"
          },
          {
            areaCode: "330683",
            text: "嵊州市"
          }
        ]
      },
      {
        cityCode: "330700",
        text: "金华市",
        children: [
          {
            areaCode: "330702",
            text: "婺城区"
          },
          {
            areaCode: "330703",
            text: "金东区"
          },
          {
            areaCode: "330723",
            text: "武义县"
          },
          {
            areaCode: "330726",
            text: "浦江县"
          },
          {
            areaCode: "330727",
            text: "磐安县"
          },
          {
            areaCode: "330781",
            text: "兰溪市"
          },
          {
            areaCode: "330782",
            text: "义乌市"
          },
          {
            areaCode: "330783",
            text: "东阳市"
          },
          {
            areaCode: "330784",
            text: "永康市"
          }
        ]
      },
      {
        cityCode: "330800",
        text: "衢州市",
        children: [
          {
            areaCode: "330802",
            text: "柯城区"
          },
          {
            areaCode: "330803",
            text: "衢江区"
          },
          {
            areaCode: "330822",
            text: "常山县"
          },
          {
            areaCode: "330824",
            text: "开化县"
          },
          {
            areaCode: "330825",
            text: "龙游县"
          },
          {
            areaCode: "330881",
            text: "江山市"
          }
        ]
      },
      {
        cityCode: "330900",
        text: "舟山市",
        children: [
          {
            areaCode: "330902",
            text: "定海区"
          },
          {
            areaCode: "330903",
            text: "普陀区"
          },
          {
            areaCode: "330921",
            text: "岱山县"
          },
          {
            areaCode: "330922",
            text: "嵊泗县"
          }
        ]
      },
      {
        cityCode: "331000",
        text: "台州市",
        children: [
          {
            areaCode: "331002",
            text: "椒江区"
          },
          {
            areaCode: "331003",
            text: "黄岩区"
          },
          {
            areaCode: "331004",
            text: "路桥区"
          },
          {
            areaCode: "331021",
            text: "玉环县"
          },
          {
            areaCode: "331022",
            text: "三门县"
          },
          {
            areaCode: "331023",
            text: "天台县"
          },
          {
            areaCode: "331024",
            text: "仙居县"
          },
          {
            areaCode: "331081",
            text: "温岭市"
          },
          {
            areaCode: "331082",
            text: "临海市"
          }
        ]
      },
      {
        cityCode: "331100",
        text: "丽水市",
        children: [
          {
            areaCode: "331102",
            text: "莲都区"
          },
          {
            areaCode: "331121",
            text: "青田县"
          },
          {
            areaCode: "331122",
            text: "缙云县"
          },
          {
            areaCode: "331123",
            text: "遂昌县"
          },
          {
            areaCode: "331124",
            text: "松阳县"
          },
          {
            areaCode: "331125",
            text: "云和县"
          },
          {
            areaCode: "331126",
            text: "庆元县"
          },
          {
            areaCode: "331127",
            text: "景宁畲族自治县"
          },
          {
            areaCode: "331181",
            text: "龙泉市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "340000",
    text: "安徽省",
    children: [
      {
        cityCode: "340100",
        text: "合肥市",
        children: [
          {
            areaCode: "340102",
            text: "瑶海区"
          },
          {
            areaCode: "340103",
            text: "庐阳区"
          },
          {
            areaCode: "340104",
            text: "蜀山区"
          },
          {
            areaCode: "340111",
            text: "包河区"
          },
          {
            areaCode: "340121",
            text: "长丰县"
          },
          {
            areaCode: "340122",
            text: "肥东县"
          },
          {
            areaCode: "340123",
            text: "肥西县"
          },
          {
            areaCode: "340124",
            text: "庐江县"
          },
          {
            areaCode: "340181",
            text: "巢湖市"
          }
        ]
      },
      {
        cityCode: "340200",
        text: "芜湖市",
        children: [
          {
            areaCode: "340202",
            text: "镜湖区"
          },
          {
            areaCode: "340203",
            text: "弋江区"
          },
          {
            areaCode: "340207",
            text: "鸠江区"
          },
          {
            areaCode: "340208",
            text: "三山区"
          },
          {
            areaCode: "340221",
            text: "芜湖县"
          },
          {
            areaCode: "340222",
            text: "繁昌县"
          },
          {
            areaCode: "340223",
            text: "南陵县"
          },
          {
            areaCode: "340225",
            text: "无为县"
          }
        ]
      },
      {
        cityCode: "340300",
        text: "蚌埠市",
        children: [
          {
            areaCode: "340302",
            text: "龙子湖区"
          },
          {
            areaCode: "340303",
            text: "蚌山区"
          },
          {
            areaCode: "340304",
            text: "禹会区"
          },
          {
            areaCode: "340311",
            text: "淮上区"
          },
          {
            areaCode: "340321",
            text: "怀远县"
          },
          {
            areaCode: "340322",
            text: "五河县"
          },
          {
            areaCode: "340323",
            text: "固镇县"
          }
        ]
      },
      {
        cityCode: "340400",
        text: "淮南市",
        children: [
          {
            areaCode: "340402",
            text: "大通区"
          },
          {
            areaCode: "340403",
            text: "田家庵区"
          },
          {
            areaCode: "340404",
            text: "谢家集区"
          },
          {
            areaCode: "340405",
            text: "八公山区"
          },
          {
            areaCode: "340406",
            text: "潘集区"
          },
          {
            areaCode: "340421",
            text: "凤台县"
          }
        ]
      },
      {
        cityCode: "340500",
        text: "马鞍山市",
        children: [
          {
            areaCode: "340503",
            text: "花山区"
          },
          {
            areaCode: "340504",
            text: "雨山区"
          },
          {
            areaCode: "340506",
            text: "博望区"
          },
          {
            areaCode: "340521",
            text: "当涂县"
          },
          {
            areaCode: "340522",
            text: "含山县"
          },
          {
            areaCode: "340523",
            text: "和县"
          }
        ]
      },
      {
        cityCode: "340600",
        text: "淮北市",
        children: [
          {
            areaCode: "340602",
            text: "杜集区"
          },
          {
            areaCode: "340603",
            text: "相山区"
          },
          {
            areaCode: "340604",
            text: "烈山区"
          },
          {
            areaCode: "340621",
            text: "濉溪县"
          }
        ]
      },
      {
        cityCode: "340700",
        text: "铜陵市",
        children: [
          {
            areaCode: "340702",
            text: "铜官山区"
          },
          {
            areaCode: "340703",
            text: "狮子山区"
          },
          {
            areaCode: "340711",
            text: "郊区"
          },
          {
            areaCode: "340721",
            text: "铜陵县"
          }
        ]
      },
      {
        cityCode: "340800",
        text: "安庆市",
        children: [
          {
            areaCode: "340802",
            text: "迎江区"
          },
          {
            areaCode: "340803",
            text: "大观区"
          },
          {
            areaCode: "340811",
            text: "宜秀区"
          },
          {
            areaCode: "340822",
            text: "怀宁县"
          },
          {
            areaCode: "340823",
            text: "枞阳县"
          },
          {
            areaCode: "340824",
            text: "潜山县"
          },
          {
            areaCode: "340825",
            text: "太湖县"
          },
          {
            areaCode: "340826",
            text: "宿松县"
          },
          {
            areaCode: "340827",
            text: "望江县"
          },
          {
            areaCode: "340828",
            text: "岳西县"
          },
          {
            areaCode: "340881",
            text: "桐城市"
          }
        ]
      },
      {
        cityCode: "341000",
        text: "黄山市",
        children: [
          {
            areaCode: "341002",
            text: "屯溪区"
          },
          {
            areaCode: "341003",
            text: "黄山区"
          },
          {
            areaCode: "341004",
            text: "徽州区"
          },
          {
            areaCode: "341021",
            text: "歙县"
          },
          {
            areaCode: "341022",
            text: "休宁县"
          },
          {
            areaCode: "341023",
            text: "黟县"
          },
          {
            areaCode: "341024",
            text: "祁门县"
          }
        ]
      },
      {
        cityCode: "341100",
        text: "滁州市",
        children: [
          {
            areaCode: "341102",
            text: "琅琊区"
          },
          {
            areaCode: "341103",
            text: "南谯区"
          },
          {
            areaCode: "341122",
            text: "来安县"
          },
          {
            areaCode: "341124",
            text: "全椒县"
          },
          {
            areaCode: "341125",
            text: "定远县"
          },
          {
            areaCode: "341126",
            text: "凤阳县"
          },
          {
            areaCode: "341181",
            text: "天长市"
          },
          {
            areaCode: "341182",
            text: "明光市"
          }
        ]
      },
      {
        cityCode: "341200",
        text: "阜阳市",
        children: [
          {
            areaCode: "341202",
            text: "颍州区"
          },
          {
            areaCode: "341203",
            text: "颍东区"
          },
          {
            areaCode: "341204",
            text: "颍泉区"
          },
          {
            areaCode: "341221",
            text: "临泉县"
          },
          {
            areaCode: "341222",
            text: "太和县"
          },
          {
            areaCode: "341225",
            text: "阜南县"
          },
          {
            areaCode: "341226",
            text: "颍上县"
          },
          {
            areaCode: "341282",
            text: "界首市"
          }
        ]
      },
      {
        cityCode: "341300",
        text: "宿州市",
        children: [
          {
            areaCode: "341302",
            text: "埇桥区"
          },
          {
            areaCode: "341321",
            text: "砀山县"
          },
          {
            areaCode: "341322",
            text: "萧县"
          },
          {
            areaCode: "341323",
            text: "灵璧县"
          },
          {
            areaCode: "341324",
            text: "泗县"
          }
        ]
      },
      {
        cityCode: "341400",
        text: "巢湖市",
        children: [
          {
            areaCode: "341400",
            text: "巢湖市区"
          }
        ]
      },
      {
        cityCode: "341500",
        text: "六安市",
        children: [
          {
            areaCode: "341502",
            text: "金安区"
          },
          {
            areaCode: "341503",
            text: "裕安区"
          },
          {
            areaCode: "341521",
            text: "寿县"
          },
          {
            areaCode: "341522",
            text: "霍邱县"
          },
          {
            areaCode: "341523",
            text: "舒城县"
          },
          {
            areaCode: "341524",
            text: "金寨县"
          },
          {
            areaCode: "341525",
            text: "霍山县"
          }
        ]
      },
      {
        cityCode: "341600",
        text: "亳州市",
        children: [
          {
            areaCode: "341602",
            text: "谯城区"
          },
          {
            areaCode: "341621",
            text: "涡阳县"
          },
          {
            areaCode: "341622",
            text: "蒙城县"
          },
          {
            areaCode: "341623",
            text: "利辛县"
          }
        ]
      },
      {
        cityCode: "341700",
        text: "池州市",
        children: [
          {
            areaCode: "341702",
            text: "贵池区"
          },
          {
            areaCode: "341721",
            text: "东至县"
          },
          {
            areaCode: "341722",
            text: "石台县"
          },
          {
            areaCode: "341723",
            text: "青阳县"
          }
        ]
      },
      {
        cityCode: "341800",
        text: "宣城市",
        children: [
          {
            areaCode: "341802",
            text: "宣州区"
          },
          {
            areaCode: "341821",
            text: "郎溪县"
          },
          {
            areaCode: "341822",
            text: "广德县"
          },
          {
            areaCode: "341823",
            text: "泾县"
          },
          {
            areaCode: "341824",
            text: "绩溪县"
          },
          {
            areaCode: "341825",
            text: "旌德县"
          },
          {
            areaCode: "341881",
            text: "宁国市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "350000",
    text: "福建省",
    children: [
      {
        cityCode: "350100",
        text: "福州市",
        children: [
          {
            areaCode: "350102",
            text: "鼓楼区"
          },
          {
            areaCode: "350103",
            text: "台江区"
          },
          {
            areaCode: "350104",
            text: "仓山区"
          },
          {
            areaCode: "350105",
            text: "马尾区"
          },
          {
            areaCode: "350111",
            text: "晋安区"
          },
          {
            areaCode: "350121",
            text: "闽侯县"
          },
          {
            areaCode: "350122",
            text: "连江县"
          },
          {
            areaCode: "350123",
            text: "罗源县"
          },
          {
            areaCode: "350124",
            text: "闽清县"
          },
          {
            areaCode: "350125",
            text: "永泰县"
          },
          {
            areaCode: "350128",
            text: "平潭县"
          },
          {
            areaCode: "350181",
            text: "福清市"
          },
          {
            areaCode: "350182",
            text: "长乐市"
          }
        ]
      },
      {
        cityCode: "350200",
        text: "厦门市",
        children: [
          {
            areaCode: "350203",
            text: "思明区"
          },
          {
            areaCode: "350205",
            text: "海沧区"
          },
          {
            areaCode: "350206",
            text: "湖里区"
          },
          {
            areaCode: "350211",
            text: "集美区"
          },
          {
            areaCode: "350212",
            text: "同安区"
          },
          {
            areaCode: "350213",
            text: "翔安区"
          }
        ]
      },
      {
        cityCode: "350300",
        text: "莆田市",
        children: [
          {
            areaCode: "350302",
            text: "城厢区"
          },
          {
            areaCode: "350303",
            text: "涵江区"
          },
          {
            areaCode: "350304",
            text: "荔城区"
          },
          {
            areaCode: "350305",
            text: "秀屿区"
          },
          {
            areaCode: "350322",
            text: "仙游县"
          }
        ]
      },
      {
        cityCode: "350400",
        text: "三明市",
        children: [
          {
            areaCode: "350402",
            text: "梅列区"
          },
          {
            areaCode: "350403",
            text: "三元区"
          },
          {
            areaCode: "350421",
            text: "明溪县"
          },
          {
            areaCode: "350423",
            text: "清流县"
          },
          {
            areaCode: "350424",
            text: "宁化县"
          },
          {
            areaCode: "350425",
            text: "大田县"
          },
          {
            areaCode: "350426",
            text: "尤溪县"
          },
          {
            areaCode: "350427",
            text: "沙县"
          },
          {
            areaCode: "350428",
            text: "将乐县"
          },
          {
            areaCode: "350429",
            text: "泰宁县"
          },
          {
            areaCode: "350430",
            text: "建宁县"
          },
          {
            areaCode: "350481",
            text: "永安市"
          }
        ]
      },
      {
        cityCode: "350500",
        text: "泉州市",
        children: [
          {
            areaCode: "350502",
            text: "鲤城区"
          },
          {
            areaCode: "350503",
            text: "丰泽区"
          },
          {
            areaCode: "350504",
            text: "洛江区"
          },
          {
            areaCode: "350505",
            text: "泉港区"
          },
          {
            areaCode: "350521",
            text: "惠安县"
          },
          {
            areaCode: "350524",
            text: "安溪县"
          },
          {
            areaCode: "350525",
            text: "永春县"
          },
          {
            areaCode: "350526",
            text: "德化县"
          },
          {
            areaCode: "350527",
            text: "金门县"
          },
          {
            areaCode: "350581",
            text: "石狮市"
          },
          {
            areaCode: "350582",
            text: "晋江市"
          },
          {
            areaCode: "350583",
            text: "南安市"
          }
        ]
      },
      {
        cityCode: "350600",
        text: "漳州市",
        children: [
          {
            areaCode: "350602",
            text: "芗城区"
          },
          {
            areaCode: "350603",
            text: "龙文区"
          },
          {
            areaCode: "350622",
            text: "云霄县"
          },
          {
            areaCode: "350623",
            text: "漳浦县"
          },
          {
            areaCode: "350624",
            text: "诏安县"
          },
          {
            areaCode: "350625",
            text: "长泰县"
          },
          {
            areaCode: "350626",
            text: "东山县"
          },
          {
            areaCode: "350627",
            text: "南靖县"
          },
          {
            areaCode: "350628",
            text: "平和县"
          },
          {
            areaCode: "350629",
            text: "华安县"
          },
          {
            areaCode: "350681",
            text: "龙海市"
          }
        ]
      },
      {
        cityCode: "350700",
        text: "南平市",
        children: [
          {
            areaCode: "350702",
            text: "延平区"
          },
          {
            areaCode: "350721",
            text: "顺昌县"
          },
          {
            areaCode: "350722",
            text: "浦城县"
          },
          {
            areaCode: "350723",
            text: "光泽县"
          },
          {
            areaCode: "350724",
            text: "松溪县"
          },
          {
            areaCode: "350725",
            text: "政和县"
          },
          {
            areaCode: "350781",
            text: "邵武市"
          },
          {
            areaCode: "350782",
            text: "武夷山市"
          },
          {
            areaCode: "350783",
            text: "建瓯市"
          },
          {
            areaCode: "350784",
            text: "建阳市"
          }
        ]
      },
      {
        cityCode: "350800",
        text: "龙岩市",
        children: [
          {
            areaCode: "350802",
            text: "新罗区"
          },
          {
            areaCode: "350821",
            text: "长汀县"
          },
          {
            areaCode: "350822",
            text: "永定县"
          },
          {
            areaCode: "350823",
            text: "上杭县"
          },
          {
            areaCode: "350824",
            text: "武平县"
          },
          {
            areaCode: "350825",
            text: "连城县"
          },
          {
            areaCode: "350881",
            text: "漳平市"
          }
        ]
      },
      {
        cityCode: "350900",
        text: "宁德市",
        children: [
          {
            areaCode: "350902",
            text: "蕉城区"
          },
          {
            areaCode: "350921",
            text: "霞浦县"
          },
          {
            areaCode: "350922",
            text: "古田县"
          },
          {
            areaCode: "350923",
            text: "屏南县"
          },
          {
            areaCode: "350924",
            text: "寿宁县"
          },
          {
            areaCode: "350925",
            text: "周宁县"
          },
          {
            areaCode: "350926",
            text: "柘荣县"
          },
          {
            areaCode: "350981",
            text: "福安市"
          },
          {
            areaCode: "350982",
            text: "福鼎市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "360000",
    text: "江西省",
    children: [
      {
        cityCode: "360100",
        text: "南昌市",
        children: [
          {
            areaCode: "360102",
            text: "东湖区"
          },
          {
            areaCode: "360103",
            text: "西湖区"
          },
          {
            areaCode: "360104",
            text: "青云谱区"
          },
          {
            areaCode: "360105",
            text: "湾里区"
          },
          {
            areaCode: "360111",
            text: "青山湖区"
          },
          {
            areaCode: "360121",
            text: "南昌县"
          },
          {
            areaCode: "360122",
            text: "新建县"
          },
          {
            areaCode: "360123",
            text: "安义县"
          },
          {
            areaCode: "360124",
            text: "进贤县"
          }
        ]
      },
      {
        cityCode: "360200",
        text: "景德镇市",
        children: [
          {
            areaCode: "360202",
            text: "昌江区"
          },
          {
            areaCode: "360203",
            text: "珠山区"
          },
          {
            areaCode: "360222",
            text: "浮梁县"
          },
          {
            areaCode: "360281",
            text: "乐平市"
          }
        ]
      },
      {
        cityCode: "360300",
        text: "萍乡市",
        children: [
          {
            areaCode: "360302",
            text: "安源区"
          },
          {
            areaCode: "360313",
            text: "湘东区"
          },
          {
            areaCode: "360321",
            text: "莲花县"
          },
          {
            areaCode: "360322",
            text: "上栗县"
          },
          {
            areaCode: "360323",
            text: "芦溪县"
          }
        ]
      },
      {
        cityCode: "360400",
        text: "九江市",
        children: [
          {
            areaCode: "360402",
            text: "庐山区"
          },
          {
            areaCode: "360403",
            text: "浔阳区"
          },
          {
            areaCode: "360421",
            text: "九江县"
          },
          {
            areaCode: "360423",
            text: "武宁县"
          },
          {
            areaCode: "360424",
            text: "修水县"
          },
          {
            areaCode: "360425",
            text: "永修县"
          },
          {
            areaCode: "360426",
            text: "德安县"
          },
          {
            areaCode: "360427",
            text: "星子县"
          },
          {
            areaCode: "360428",
            text: "都昌县"
          },
          {
            areaCode: "360429",
            text: "湖口县"
          },
          {
            areaCode: "360430",
            text: "彭泽县"
          },
          {
            areaCode: "360481",
            text: "瑞昌市"
          },
          {
            areaCode: "360482",
            text: "共青城市"
          }
        ]
      },
      {
        cityCode: "360500",
        text: "新余市",
        children: [
          {
            areaCode: "360502",
            text: "渝水区"
          },
          {
            areaCode: "360521",
            text: "分宜县"
          }
        ]
      },
      {
        cityCode: "360600",
        text: "鹰潭市",
        children: [
          {
            areaCode: "360602",
            text: "月湖区"
          },
          {
            areaCode: "360622",
            text: "余江县"
          },
          {
            areaCode: "360681",
            text: "贵溪市"
          }
        ]
      },
      {
        cityCode: "360700",
        text: "赣州市",
        children: [
          {
            areaCode: "360702",
            text: "章贡区"
          },
          {
            areaCode: "360703",
            text: "南康区"
          },
          {
            areaCode: "360721",
            text: "赣县"
          },
          {
            areaCode: "360722",
            text: "信丰县"
          },
          {
            areaCode: "360723",
            text: "大余县"
          },
          {
            areaCode: "360724",
            text: "上犹县"
          },
          {
            areaCode: "360725",
            text: "崇义县"
          },
          {
            areaCode: "360726",
            text: "安远县"
          },
          {
            areaCode: "360727",
            text: "龙南县"
          },
          {
            areaCode: "360728",
            text: "定南县"
          },
          {
            areaCode: "360729",
            text: "全南县"
          },
          {
            areaCode: "360730",
            text: "宁都县"
          },
          {
            areaCode: "360731",
            text: "于都县"
          },
          {
            areaCode: "360732",
            text: "兴国县"
          },
          {
            areaCode: "360733",
            text: "会昌县"
          },
          {
            areaCode: "360734",
            text: "寻乌县"
          },
          {
            areaCode: "360735",
            text: "石城县"
          },
          {
            areaCode: "360781",
            text: "瑞金市"
          }
        ]
      },
      {
        cityCode: "360800",
        text: "吉安市",
        children: [
          {
            areaCode: "360802",
            text: "吉州区"
          },
          {
            areaCode: "360803",
            text: "青原区"
          },
          {
            areaCode: "360821",
            text: "吉安县"
          },
          {
            areaCode: "360822",
            text: "吉水县"
          },
          {
            areaCode: "360823",
            text: "峡江县"
          },
          {
            areaCode: "360824",
            text: "新干县"
          },
          {
            areaCode: "360825",
            text: "永丰县"
          },
          {
            areaCode: "360826",
            text: "泰和县"
          },
          {
            areaCode: "360827",
            text: "遂川县"
          },
          {
            areaCode: "360828",
            text: "万安县"
          },
          {
            areaCode: "360829",
            text: "安福县"
          },
          {
            areaCode: "360830",
            text: "永新县"
          },
          {
            areaCode: "360881",
            text: "井冈山市"
          }
        ]
      },
      {
        cityCode: "360900",
        text: "宜春市",
        children: [
          {
            areaCode: "360902",
            text: "袁州区"
          },
          {
            areaCode: "360921",
            text: "奉新县"
          },
          {
            areaCode: "360922",
            text: "万载县"
          },
          {
            areaCode: "360923",
            text: "上高县"
          },
          {
            areaCode: "360924",
            text: "宜丰县"
          },
          {
            areaCode: "360925",
            text: "靖安县"
          },
          {
            areaCode: "360926",
            text: "铜鼓县"
          },
          {
            areaCode: "360981",
            text: "丰城市"
          },
          {
            areaCode: "360982",
            text: "樟树市"
          },
          {
            areaCode: "360983",
            text: "高安市"
          }
        ]
      },
      {
        cityCode: "361000",
        text: "抚州市",
        children: [
          {
            areaCode: "361002",
            text: "临川区"
          },
          {
            areaCode: "361021",
            text: "南城县"
          },
          {
            areaCode: "361022",
            text: "黎川县"
          },
          {
            areaCode: "361023",
            text: "南丰县"
          },
          {
            areaCode: "361024",
            text: "崇仁县"
          },
          {
            areaCode: "361025",
            text: "乐安县"
          },
          {
            areaCode: "361026",
            text: "宜黄县"
          },
          {
            areaCode: "361027",
            text: "金溪县"
          },
          {
            areaCode: "361028",
            text: "资溪县"
          },
          {
            areaCode: "361029",
            text: "东乡县"
          },
          {
            areaCode: "361030",
            text: "广昌县"
          }
        ]
      },
      {
        cityCode: "361100",
        text: "上饶市",
        children: [
          {
            areaCode: "361102",
            text: "信州区"
          },
          {
            areaCode: "361121",
            text: "上饶县"
          },
          {
            areaCode: "361122",
            text: "广丰县"
          },
          {
            areaCode: "361123",
            text: "玉山县"
          },
          {
            areaCode: "361124",
            text: "铅山县"
          },
          {
            areaCode: "361125",
            text: "横峰县"
          },
          {
            areaCode: "361126",
            text: "弋阳县"
          },
          {
            areaCode: "361127",
            text: "余干县"
          },
          {
            areaCode: "361128",
            text: "鄱阳县"
          },
          {
            areaCode: "361129",
            text: "万年县"
          },
          {
            areaCode: "361130",
            text: "婺源县"
          },
          {
            areaCode: "361181",
            text: "德兴市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "370000",
    text: "山东省",
    children: [
      {
        cityCode: "370100",
        text: "济南市",
        children: [
          {
            areaCode: "370102",
            text: "历下区"
          },
          {
            areaCode: "370103",
            text: "市中区"
          },
          {
            areaCode: "370104",
            text: "槐荫区"
          },
          {
            areaCode: "370105",
            text: "天桥区"
          },
          {
            areaCode: "370112",
            text: "历城区"
          },
          {
            areaCode: "370113",
            text: "长清区"
          },
          {
            areaCode: "370124",
            text: "平阴县"
          },
          {
            areaCode: "370125",
            text: "济阳县"
          },
          {
            areaCode: "370126",
            text: "商河县"
          },
          {
            areaCode: "370181",
            text: "章丘市"
          }
        ]
      },
      {
        cityCode: "370200",
        text: "青岛市",
        children: [
          {
            areaCode: "370202",
            text: "市南区"
          },
          {
            areaCode: "370203",
            text: "市北区"
          },
          {
            areaCode: "370211",
            text: "黄岛区"
          },
          {
            areaCode: "370212",
            text: "崂山区"
          },
          {
            areaCode: "370213",
            text: "李沧区"
          },
          {
            areaCode: "370214",
            text: "城阳区"
          },
          {
            areaCode: "370281",
            text: "胶州市"
          },
          {
            areaCode: "370282",
            text: "即墨市"
          },
          {
            areaCode: "370283",
            text: "平度市"
          },
          {
            areaCode: "370285",
            text: "莱西市"
          }
        ]
      },
      {
        cityCode: "370300",
        text: "淄博市",
        children: [
          {
            areaCode: "370302",
            text: "淄川区"
          },
          {
            areaCode: "370303",
            text: "张店区"
          },
          {
            areaCode: "370304",
            text: "博山区"
          },
          {
            areaCode: "370305",
            text: "临淄区"
          },
          {
            areaCode: "370306",
            text: "周村区"
          },
          {
            areaCode: "370321",
            text: "桓台县"
          },
          {
            areaCode: "370322",
            text: "高青县"
          },
          {
            areaCode: "370323",
            text: "沂源县"
          }
        ]
      },
      {
        cityCode: "370400",
        text: "枣庄市",
        children: [
          {
            areaCode: "370402",
            text: "市中区"
          },
          {
            areaCode: "370403",
            text: "薛城区"
          },
          {
            areaCode: "370404",
            text: "峄城区"
          },
          {
            areaCode: "370405",
            text: "台儿庄区"
          },
          {
            areaCode: "370406",
            text: "山亭区"
          },
          {
            areaCode: "370481",
            text: "滕州市"
          }
        ]
      },
      {
        cityCode: "370500",
        text: "东营市",
        children: [
          {
            areaCode: "370502",
            text: "东营区"
          },
          {
            areaCode: "370503",
            text: "河口区"
          },
          {
            areaCode: "370521",
            text: "垦利县"
          },
          {
            areaCode: "370522",
            text: "利津县"
          },
          {
            areaCode: "370523",
            text: "广饶县"
          }
        ]
      },
      {
        cityCode: "370600",
        text: "烟台市",
        children: [
          {
            areaCode: "370602",
            text: "芝罘区"
          },
          {
            areaCode: "370611",
            text: "福山区"
          },
          {
            areaCode: "370612",
            text: "牟平区"
          },
          {
            areaCode: "370613",
            text: "莱山区"
          },
          {
            areaCode: "370634",
            text: "长岛县"
          },
          {
            areaCode: "370681",
            text: "龙口市"
          },
          {
            areaCode: "370682",
            text: "莱阳市"
          },
          {
            areaCode: "370683",
            text: "莱州市"
          },
          {
            areaCode: "370684",
            text: "蓬莱市"
          },
          {
            areaCode: "370685",
            text: "招远市"
          },
          {
            areaCode: "370686",
            text: "栖霞市"
          },
          {
            areaCode: "370687",
            text: "海阳市"
          }
        ]
      },
      {
        cityCode: "370700",
        text: "潍坊市",
        children: [
          {
            areaCode: "370702",
            text: "潍城区"
          },
          {
            areaCode: "370703",
            text: "寒亭区"
          },
          {
            areaCode: "370704",
            text: "坊子区"
          },
          {
            areaCode: "370705",
            text: "奎文区"
          },
          {
            areaCode: "370724",
            text: "临朐县"
          },
          {
            areaCode: "370725",
            text: "昌乐县"
          },
          {
            areaCode: "370781",
            text: "青州市"
          },
          {
            areaCode: "370782",
            text: "诸城市"
          },
          {
            areaCode: "370783",
            text: "寿光市"
          },
          {
            areaCode: "370784",
            text: "安丘市"
          },
          {
            areaCode: "370785",
            text: "高密市"
          },
          {
            areaCode: "370786",
            text: "昌邑市"
          }
        ]
      },
      {
        cityCode: "370800",
        text: "济宁市",
        children: [
          {
            areaCode: "370802",
            text: "市中区"
          },
          {
            areaCode: "370811",
            text: "任城区"
          },
          {
            areaCode: "370812",
            text: "兖州区"
          },
          {
            areaCode: "370826",
            text: "微山县"
          },
          {
            areaCode: "370827",
            text: "鱼台县"
          },
          {
            areaCode: "370828",
            text: "金乡县"
          },
          {
            areaCode: "370829",
            text: "嘉祥县"
          },
          {
            areaCode: "370830",
            text: "汶上县"
          },
          {
            areaCode: "370831",
            text: "泗水县"
          },
          {
            areaCode: "370832",
            text: "梁山县"
          },
          {
            areaCode: "370881",
            text: "曲阜市"
          },
          {
            areaCode: "370883",
            text: "邹城市"
          }
        ]
      },
      {
        cityCode: "370900",
        text: "泰安市",
        children: [
          {
            areaCode: "370902",
            text: "泰山区"
          },
          {
            areaCode: "370911",
            text: "岱岳区"
          },
          {
            areaCode: "370921",
            text: "宁阳县"
          },
          {
            areaCode: "370923",
            text: "东平县"
          },
          {
            areaCode: "370982",
            text: "新泰市"
          },
          {
            areaCode: "370983",
            text: "肥城市"
          }
        ]
      },
      {
        cityCode: "371000",
        text: "威海市",
        children: [
          {
            areaCode: "371002",
            text: "环翠区"
          },
          {
            areaCode: "371003",
            text: "文登区"
          },
          {
            areaCode: "371082",
            text: "荣成市"
          },
          {
            areaCode: "371083",
            text: "乳山市"
          }
        ]
      },
      {
        cityCode: "371100",
        text: "日照市",
        children: [
          {
            areaCode: "371102",
            text: "东港区"
          },
          {
            areaCode: "371103",
            text: "岚山区"
          },
          {
            areaCode: "371121",
            text: "五莲县"
          },
          {
            areaCode: "371122",
            text: "莒县"
          }
        ]
      },
      {
        cityCode: "371200",
        text: "莱芜市",
        children: [
          {
            areaCode: "371202",
            text: "莱城区"
          },
          {
            areaCode: "371203",
            text: "钢城区"
          }
        ]
      },
      {
        cityCode: "371300",
        text: "临沂市",
        children: [
          {
            areaCode: "371302",
            text: "兰山区"
          },
          {
            areaCode: "371311",
            text: "罗庄区"
          },
          {
            areaCode: "371312",
            text: "河东区"
          },
          {
            areaCode: "371321",
            text: "沂南县"
          },
          {
            areaCode: "371322",
            text: "郯城县"
          },
          {
            areaCode: "371323",
            text: "沂水县"
          },
          {
            areaCode: "371324",
            text: "兰陵县"
          },
          {
            areaCode: "371325",
            text: "费县"
          },
          {
            areaCode: "371326",
            text: "平邑县"
          },
          {
            areaCode: "371327",
            text: "莒南县"
          },
          {
            areaCode: "371328",
            text: "蒙阴县"
          },
          {
            areaCode: "371329",
            text: "临沭县"
          }
        ]
      },
      {
        cityCode: "371400",
        text: "德州市",
        children: [
          {
            areaCode: "371402",
            text: "德城区"
          },
          {
            areaCode: "371403",
            text: "陵城区"
          },
          {
            areaCode: "371422",
            text: "宁津县"
          },
          {
            areaCode: "371423",
            text: "庆云县"
          },
          {
            areaCode: "371424",
            text: "临邑县"
          },
          {
            areaCode: "371425",
            text: "齐河县"
          },
          {
            areaCode: "371426",
            text: "平原县"
          },
          {
            areaCode: "371427",
            text: "夏津县"
          },
          {
            areaCode: "371428",
            text: "武城县"
          },
          {
            areaCode: "371481",
            text: "乐陵市"
          },
          {
            areaCode: "371482",
            text: "禹城市"
          }
        ]
      },
      {
        cityCode: "371500",
        text: "聊城市",
        children: [
          {
            areaCode: "371502",
            text: "东昌府区"
          },
          {
            areaCode: "371521",
            text: "阳谷县"
          },
          {
            areaCode: "371522",
            text: "莘县"
          },
          {
            areaCode: "371523",
            text: "茌平县"
          },
          {
            areaCode: "371524",
            text: "东阿县"
          },
          {
            areaCode: "371525",
            text: "冠县"
          },
          {
            areaCode: "371526",
            text: "高唐县"
          },
          {
            areaCode: "371581",
            text: "临清市"
          }
        ]
      },
      {
        cityCode: "371600",
        text: "滨州市",
        children: [
          {
            areaCode: "371602",
            text: "滨城区"
          },
          {
            areaCode: "371603",
            text: "沾化区"
          },
          {
            areaCode: "371621",
            text: "惠民县"
          },
          {
            areaCode: "371622",
            text: "阳信县"
          },
          {
            areaCode: "371623",
            text: "无棣县"
          },
          {
            areaCode: "371625",
            text: "博兴县"
          },
          {
            areaCode: "371626",
            text: "邹平县"
          }
        ]
      },
      {
        cityCode: "371700",
        text: "菏泽市",
        children: [
          {
            areaCode: "371702",
            text: "牡丹区"
          },
          {
            areaCode: "371721",
            text: "曹县"
          },
          {
            areaCode: "371722",
            text: "单县"
          },
          {
            areaCode: "371723",
            text: "成武县"
          },
          {
            areaCode: "371724",
            text: "巨野县"
          },
          {
            areaCode: "371725",
            text: "郓城县"
          },
          {
            areaCode: "371726",
            text: "鄄城县"
          },
          {
            areaCode: "371727",
            text: "定陶县"
          },
          {
            areaCode: "371728",
            text: "东明县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "410000",
    text: "河南省",
    children: [
      {
        cityCode: "410100",
        text: "郑州市",
        children: [
          {
            areaCode: "410102",
            text: "中原区"
          },
          {
            areaCode: "410103",
            text: "二七区"
          },
          {
            areaCode: "410104",
            text: "管城回族区"
          },
          {
            areaCode: "410105",
            text: "金水区"
          },
          {
            areaCode: "410106",
            text: "上街区"
          },
          {
            areaCode: "410108",
            text: "惠济区"
          },
          {
            areaCode: "410122",
            text: "中牟县"
          },
          {
            areaCode: "410181",
            text: "巩义市"
          },
          {
            areaCode: "410182",
            text: "荥阳市"
          },
          {
            areaCode: "410183",
            text: "新密市"
          },
          {
            areaCode: "410184",
            text: "新郑市"
          },
          {
            areaCode: "410185",
            text: "登封市"
          }
        ]
      },
      {
        cityCode: "410200",
        text: "开封市",
        children: [
          {
            areaCode: "410202",
            text: "龙亭区"
          },
          {
            areaCode: "410203",
            text: "顺河回族区"
          },
          {
            areaCode: "410204",
            text: "鼓楼区"
          },
          {
            areaCode: "410205",
            text: "禹王台区"
          },
          {
            areaCode: "410211",
            text: "金明区"
          },
          {
            areaCode: "410221",
            text: "杞县"
          },
          {
            areaCode: "410222",
            text: "通许县"
          },
          {
            areaCode: "410223",
            text: "尉氏县"
          },
          {
            areaCode: "410224",
            text: "开封县"
          },
          {
            areaCode: "410225",
            text: "兰考县"
          }
        ]
      },
      {
        cityCode: "410300",
        text: "洛阳市",
        children: [
          {
            areaCode: "410302",
            text: "老城区"
          },
          {
            areaCode: "410303",
            text: "西工区"
          },
          {
            areaCode: "410304",
            text: "瀍河回族区"
          },
          {
            areaCode: "410305",
            text: "涧西区"
          },
          {
            areaCode: "410306",
            text: "吉利区"
          },
          {
            areaCode: "410311",
            text: "洛龙区"
          },
          {
            areaCode: "410322",
            text: "孟津县"
          },
          {
            areaCode: "410323",
            text: "新安县"
          },
          {
            areaCode: "410324",
            text: "栾川县"
          },
          {
            areaCode: "410325",
            text: "嵩县"
          },
          {
            areaCode: "410326",
            text: "汝阳县"
          },
          {
            areaCode: "410327",
            text: "宜阳县"
          },
          {
            areaCode: "410328",
            text: "洛宁县"
          },
          {
            areaCode: "410329",
            text: "伊川县"
          },
          {
            areaCode: "410381",
            text: "偃师市"
          }
        ]
      },
      {
        cityCode: "410400",
        text: "平顶山市",
        children: [
          {
            areaCode: "410402",
            text: "新华区"
          },
          {
            areaCode: "410403",
            text: "卫东区"
          },
          {
            areaCode: "410404",
            text: "石龙区"
          },
          {
            areaCode: "410411",
            text: "湛河区"
          },
          {
            areaCode: "410421",
            text: "宝丰县"
          },
          {
            areaCode: "410422",
            text: "叶县"
          },
          {
            areaCode: "410423",
            text: "鲁山县"
          },
          {
            areaCode: "410425",
            text: "郏县"
          },
          {
            areaCode: "410481",
            text: "舞钢市"
          },
          {
            areaCode: "410482",
            text: "汝州市"
          }
        ]
      },
      {
        cityCode: "410500",
        text: "安阳市",
        children: [
          {
            areaCode: "410502",
            text: "文峰区"
          },
          {
            areaCode: "410503",
            text: "北关区"
          },
          {
            areaCode: "410505",
            text: "殷都区"
          },
          {
            areaCode: "410506",
            text: "龙安区"
          },
          {
            areaCode: "410522",
            text: "安阳县"
          },
          {
            areaCode: "410523",
            text: "汤阴县"
          },
          {
            areaCode: "410526",
            text: "滑县"
          },
          {
            areaCode: "410527",
            text: "内黄县"
          },
          {
            areaCode: "410581",
            text: "林州市"
          }
        ]
      },
      {
        cityCode: "410600",
        text: "鹤壁市",
        children: [
          {
            areaCode: "410602",
            text: "鹤山区"
          },
          {
            areaCode: "410603",
            text: "山城区"
          },
          {
            areaCode: "410611",
            text: "淇滨区"
          },
          {
            areaCode: "410621",
            text: "浚县"
          },
          {
            areaCode: "410622",
            text: "淇县"
          }
        ]
      },
      {
        cityCode: "410700",
        text: "新乡市",
        children: [
          {
            areaCode: "410702",
            text: "红旗区"
          },
          {
            areaCode: "410703",
            text: "卫滨区"
          },
          {
            areaCode: "410704",
            text: "凤泉区"
          },
          {
            areaCode: "410711",
            text: "牧野区"
          },
          {
            areaCode: "410721",
            text: "新乡县"
          },
          {
            areaCode: "410724",
            text: "获嘉县"
          },
          {
            areaCode: "410725",
            text: "原阳县"
          },
          {
            areaCode: "410726",
            text: "延津县"
          },
          {
            areaCode: "410727",
            text: "封丘县"
          },
          {
            areaCode: "410728",
            text: "长垣县"
          },
          {
            areaCode: "410781",
            text: "卫辉市"
          },
          {
            areaCode: "410782",
            text: "辉县市"
          }
        ]
      },
      {
        cityCode: "410800",
        text: "焦作市",
        children: [
          {
            areaCode: "410802",
            text: "解放区"
          },
          {
            areaCode: "410803",
            text: "中站区"
          },
          {
            areaCode: "410804",
            text: "马村区"
          },
          {
            areaCode: "410811",
            text: "山阳区"
          },
          {
            areaCode: "410821",
            text: "修武县"
          },
          {
            areaCode: "410822",
            text: "博爱县"
          },
          {
            areaCode: "410823",
            text: "武陟县"
          },
          {
            areaCode: "410825",
            text: "温县"
          },
          {
            areaCode: "410882",
            text: "沁阳市"
          },
          {
            areaCode: "410883",
            text: "孟州市"
          }
        ]
      },
      {
        cityCode: "410900",
        text: "濮阳市",
        children: [
          {
            areaCode: "410902",
            text: "华龙区"
          },
          {
            areaCode: "410922",
            text: "清丰县"
          },
          {
            areaCode: "410923",
            text: "南乐县"
          },
          {
            areaCode: "410926",
            text: "范县"
          },
          {
            areaCode: "410927",
            text: "台前县"
          },
          {
            areaCode: "410928",
            text: "濮阳县"
          }
        ]
      },
      {
        cityCode: "411000",
        text: "许昌市",
        children: [
          {
            areaCode: "411002",
            text: "魏都区"
          },
          {
            areaCode: "411023",
            text: "许昌县"
          },
          {
            areaCode: "411024",
            text: "鄢陵县"
          },
          {
            areaCode: "411025",
            text: "襄城县"
          },
          {
            areaCode: "411081",
            text: "禹州市"
          },
          {
            areaCode: "411082",
            text: "长葛市"
          }
        ]
      },
      {
        cityCode: "411100",
        text: "漯河市",
        children: [
          {
            areaCode: "411102",
            text: "源汇区"
          },
          {
            areaCode: "411103",
            text: "郾城区"
          },
          {
            areaCode: "411104",
            text: "召陵区"
          },
          {
            areaCode: "411121",
            text: "舞阳县"
          },
          {
            areaCode: "411122",
            text: "临颍县"
          }
        ]
      },
      {
        cityCode: "411200",
        text: "三门峡市",
        children: [
          {
            areaCode: "411202",
            text: "湖滨区"
          },
          {
            areaCode: "411221",
            text: "渑池县"
          },
          {
            areaCode: "411222",
            text: "陕县"
          },
          {
            areaCode: "411224",
            text: "卢氏县"
          },
          {
            areaCode: "411281",
            text: "义马市"
          },
          {
            areaCode: "411282",
            text: "灵宝市"
          }
        ]
      },
      {
        cityCode: "411300",
        text: "南阳市",
        children: [
          {
            areaCode: "411302",
            text: "宛城区"
          },
          {
            areaCode: "411303",
            text: "卧龙区"
          },
          {
            areaCode: "411321",
            text: "南召县"
          },
          {
            areaCode: "411322",
            text: "方城县"
          },
          {
            areaCode: "411323",
            text: "西峡县"
          },
          {
            areaCode: "411324",
            text: "镇平县"
          },
          {
            areaCode: "411325",
            text: "内乡县"
          },
          {
            areaCode: "411326",
            text: "淅川县"
          },
          {
            areaCode: "411327",
            text: "社旗县"
          },
          {
            areaCode: "411328",
            text: "唐河县"
          },
          {
            areaCode: "411329",
            text: "新野县"
          },
          {
            areaCode: "411330",
            text: "桐柏县"
          },
          {
            areaCode: "411381",
            text: "邓州市"
          }
        ]
      },
      {
        cityCode: "411400",
        text: "商丘市",
        children: [
          {
            areaCode: "411402",
            text: "梁园区"
          },
          {
            areaCode: "411403",
            text: "睢阳区"
          },
          {
            areaCode: "411421",
            text: "民权县"
          },
          {
            areaCode: "411422",
            text: "睢县"
          },
          {
            areaCode: "411423",
            text: "宁陵县"
          },
          {
            areaCode: "411424",
            text: "柘城县"
          },
          {
            areaCode: "411425",
            text: "虞城县"
          },
          {
            areaCode: "411426",
            text: "夏邑县"
          },
          {
            areaCode: "411481",
            text: "永城市"
          }
        ]
      },
      {
        cityCode: "411500",
        text: "信阳市",
        children: [
          {
            areaCode: "411502",
            text: "浉河区"
          },
          {
            areaCode: "411503",
            text: "平桥区"
          },
          {
            areaCode: "411521",
            text: "罗山县"
          },
          {
            areaCode: "411522",
            text: "光山县"
          },
          {
            areaCode: "411523",
            text: "新县"
          },
          {
            areaCode: "411524",
            text: "商城县"
          },
          {
            areaCode: "411525",
            text: "固始县"
          },
          {
            areaCode: "411526",
            text: "潢川县"
          },
          {
            areaCode: "411527",
            text: "淮滨县"
          },
          {
            areaCode: "411528",
            text: "息县"
          }
        ]
      },
      {
        cityCode: "411600",
        text: "周口市",
        children: [
          {
            areaCode: "411602",
            text: "川汇区"
          },
          {
            areaCode: "411621",
            text: "扶沟县"
          },
          {
            areaCode: "411622",
            text: "西华县"
          },
          {
            areaCode: "411623",
            text: "商水县"
          },
          {
            areaCode: "411624",
            text: "沈丘县"
          },
          {
            areaCode: "411625",
            text: "郸城县"
          },
          {
            areaCode: "411626",
            text: "淮阳县"
          },
          {
            areaCode: "411627",
            text: "太康县"
          },
          {
            areaCode: "411628",
            text: "鹿邑县"
          },
          {
            areaCode: "411681",
            text: "项城市"
          }
        ]
      },
      {
        cityCode: "411700",
        text: "驻马店市",
        children: [
          {
            areaCode: "411702",
            text: "驿城区"
          },
          {
            areaCode: "411721",
            text: "西平县"
          },
          {
            areaCode: "411722",
            text: "上蔡县"
          },
          {
            areaCode: "411723",
            text: "平舆县"
          },
          {
            areaCode: "411724",
            text: "正阳县"
          },
          {
            areaCode: "411725",
            text: "确山县"
          },
          {
            areaCode: "411726",
            text: "泌阳县"
          },
          {
            areaCode: "411727",
            text: "汝南县"
          },
          {
            areaCode: "411728",
            text: "遂平县"
          },
          {
            areaCode: "411729",
            text: "新蔡县"
          }
        ]
      },
      {
        cityCode: "419000",
        text: "河南省直辖县级行政区划",
        children: [
          {
            areaCode: "419001",
            text: "济源市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "420000",
    text: "湖北省",
    children: [
      {
        cityCode: "420100",
        text: "武汉市",
        children: [
          {
            areaCode: "420102",
            text: "江岸区"
          },
          {
            areaCode: "420103",
            text: "江汉区"
          },
          {
            areaCode: "420104",
            text: "硚口区"
          },
          {
            areaCode: "420105",
            text: "汉阳区"
          },
          {
            areaCode: "420106",
            text: "武昌区"
          },
          {
            areaCode: "420107",
            text: "青山区"
          },
          {
            areaCode: "420111",
            text: "洪山区"
          },
          {
            areaCode: "420112",
            text: "东西湖区"
          },
          {
            areaCode: "420113",
            text: "汉南区"
          },
          {
            areaCode: "420114",
            text: "蔡甸区"
          },
          {
            areaCode: "420115",
            text: "江夏区"
          },
          {
            areaCode: "420116",
            text: "黄陂区"
          },
          {
            areaCode: "420117",
            text: "新洲区"
          }
        ]
      },
      {
        cityCode: "420200",
        text: "黄石市",
        children: [
          {
            areaCode: "420202",
            text: "黄石港区"
          },
          {
            areaCode: "420203",
            text: "西塞山区"
          },
          {
            areaCode: "420204",
            text: "下陆区"
          },
          {
            areaCode: "420205",
            text: "铁山区"
          },
          {
            areaCode: "420222",
            text: "阳新县"
          },
          {
            areaCode: "420281",
            text: "大冶市"
          }
        ]
      },
      {
        cityCode: "420300",
        text: "十堰市",
        children: [
          {
            areaCode: "420302",
            text: "茅箭区"
          },
          {
            areaCode: "420303",
            text: "张湾区"
          },
          {
            areaCode: "420304",
            text: "郧阳区"
          },
          {
            areaCode: "420322",
            text: "郧西县"
          },
          {
            areaCode: "420323",
            text: "竹山县"
          },
          {
            areaCode: "420324",
            text: "竹溪县"
          },
          {
            areaCode: "420325",
            text: "房县"
          },
          {
            areaCode: "420381",
            text: "丹江口市"
          }
        ]
      },
      {
        cityCode: "420500",
        text: "宜昌市",
        children: [
          {
            areaCode: "420502",
            text: "西陵区"
          },
          {
            areaCode: "420503",
            text: "伍家岗区"
          },
          {
            areaCode: "420504",
            text: "点军区"
          },
          {
            areaCode: "420505",
            text: "猇亭区"
          },
          {
            areaCode: "420506",
            text: "夷陵区"
          },
          {
            areaCode: "420525",
            text: "远安县"
          },
          {
            areaCode: "420526",
            text: "兴山县"
          },
          {
            areaCode: "420527",
            text: "秭归县"
          },
          {
            areaCode: "420528",
            text: "长阳土家族自治县"
          },
          {
            areaCode: "420529",
            text: "五峰土家族自治县"
          },
          {
            areaCode: "420581",
            text: "宜都市"
          },
          {
            areaCode: "420582",
            text: "当阳市"
          },
          {
            areaCode: "420583",
            text: "枝江市"
          }
        ]
      },
      {
        cityCode: "420600",
        text: "襄樊市",
        children: [
          {
            areaCode: "420602",
            text: "襄城区"
          },
          {
            areaCode: "420606",
            text: "樊城区"
          },
          {
            areaCode: "420607",
            text: "襄州区"
          },
          {
            areaCode: "420624",
            text: "南漳县"
          },
          {
            areaCode: "420625",
            text: "谷城县"
          },
          {
            areaCode: "420626",
            text: "保康县"
          },
          {
            areaCode: "420682",
            text: "老河口市"
          },
          {
            areaCode: "420683",
            text: "枣阳市"
          },
          {
            areaCode: "420684",
            text: "宜城市"
          }
        ]
      },
      {
        cityCode: "420700",
        text: "鄂州市",
        children: [
          {
            areaCode: "420702",
            text: "梁子湖区"
          },
          {
            areaCode: "420703",
            text: "华容区"
          },
          {
            areaCode: "420704",
            text: "鄂城区"
          }
        ]
      },
      {
        cityCode: "420800",
        text: "荆门市",
        children: [
          {
            areaCode: "420802",
            text: "东宝区"
          },
          {
            areaCode: "420804",
            text: "掇刀区"
          },
          {
            areaCode: "420821",
            text: "京山县"
          },
          {
            areaCode: "420822",
            text: "沙洋县"
          },
          {
            areaCode: "420881",
            text: "钟祥市"
          }
        ]
      },
      {
        cityCode: "420900",
        text: "孝感市",
        children: [
          {
            areaCode: "420902",
            text: "孝南区"
          },
          {
            areaCode: "420921",
            text: "孝昌县"
          },
          {
            areaCode: "420922",
            text: "大悟县"
          },
          {
            areaCode: "420923",
            text: "云梦县"
          },
          {
            areaCode: "420981",
            text: "应城市"
          },
          {
            areaCode: "420982",
            text: "安陆市"
          },
          {
            areaCode: "420984",
            text: "汉川市"
          }
        ]
      },
      {
        cityCode: "421000",
        text: "荆州市",
        children: [
          {
            areaCode: "421002",
            text: "沙市区"
          },
          {
            areaCode: "421003",
            text: "荆州区"
          },
          {
            areaCode: "421022",
            text: "公安县"
          },
          {
            areaCode: "421023",
            text: "监利县"
          },
          {
            areaCode: "421024",
            text: "江陵县"
          },
          {
            areaCode: "421081",
            text: "石首市"
          },
          {
            areaCode: "421083",
            text: "洪湖市"
          },
          {
            areaCode: "421087",
            text: "松滋市"
          }
        ]
      },
      {
        cityCode: "421100",
        text: "黄冈市",
        children: [
          {
            areaCode: "421102",
            text: "黄州区"
          },
          {
            areaCode: "421121",
            text: "团风县"
          },
          {
            areaCode: "421122",
            text: "红安县"
          },
          {
            areaCode: "421123",
            text: "罗田县"
          },
          {
            areaCode: "421124",
            text: "英山县"
          },
          {
            areaCode: "421125",
            text: "浠水县"
          },
          {
            areaCode: "421126",
            text: "蕲春县"
          },
          {
            areaCode: "421127",
            text: "黄梅县"
          },
          {
            areaCode: "421181",
            text: "麻城市"
          },
          {
            areaCode: "421182",
            text: "武穴市"
          }
        ]
      },
      {
        cityCode: "421200",
        text: "咸宁市",
        children: [
          {
            areaCode: "421202",
            text: "咸安区"
          },
          {
            areaCode: "421221",
            text: "嘉鱼县"
          },
          {
            areaCode: "421222",
            text: "通城县"
          },
          {
            areaCode: "421223",
            text: "崇阳县"
          },
          {
            areaCode: "421224",
            text: "通山县"
          },
          {
            areaCode: "421281",
            text: "赤壁市"
          }
        ]
      },
      {
        cityCode: "421300",
        text: "随州市",
        children: [
          {
            areaCode: "421303",
            text: "曾都区"
          },
          {
            areaCode: "421321",
            text: "随县"
          },
          {
            areaCode: "421381",
            text: "广水市"
          }
        ]
      },
      {
        cityCode: "422800",
        text: "恩施土家族苗族自治州",
        children: [
          {
            areaCode: "422801",
            text: "恩施市"
          },
          {
            areaCode: "422802",
            text: "利川市"
          },
          {
            areaCode: "422822",
            text: "建始县"
          },
          {
            areaCode: "422823",
            text: "巴东县"
          },
          {
            areaCode: "422825",
            text: "宣恩县"
          },
          {
            areaCode: "422826",
            text: "咸丰县"
          },
          {
            areaCode: "422827",
            text: "来凤县"
          },
          {
            areaCode: "422828",
            text: "鹤峰县"
          }
        ]
      },
      {
        cityCode: "429000",
        text: "省直辖行政单位",
        children: [
          {
            areaCode: "429004",
            text: "仙桃市"
          },
          {
            areaCode: "429005",
            text: "潜江市"
          },
          {
            areaCode: "429006",
            text: "天门市"
          },
          {
            areaCode: "429021",
            text: "神农架林区"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "430000",
    text: "湖南省",
    children: [
      {
        cityCode: "430100",
        text: "长沙市",
        children: [
          {
            areaCode: "430102",
            text: "芙蓉区"
          },
          {
            areaCode: "430103",
            text: "天心区"
          },
          {
            areaCode: "430104",
            text: "岳麓区"
          },
          {
            areaCode: "430105",
            text: "开福区"
          },
          {
            areaCode: "430111",
            text: "雨花区"
          },
          {
            areaCode: "430112",
            text: "望城区"
          },
          {
            areaCode: "430121",
            text: "长沙县"
          },
          {
            areaCode: "430124",
            text: "宁乡县"
          },
          {
            areaCode: "430181",
            text: "浏阳市"
          }
        ]
      },
      {
        cityCode: "430200",
        text: "株洲市",
        children: [
          {
            areaCode: "430202",
            text: "荷塘区"
          },
          {
            areaCode: "430203",
            text: "芦淞区"
          },
          {
            areaCode: "430204",
            text: "石峰区"
          },
          {
            areaCode: "430211",
            text: "天元区"
          },
          {
            areaCode: "430221",
            text: "株洲县"
          },
          {
            areaCode: "430223",
            text: "攸县"
          },
          {
            areaCode: "430224",
            text: "茶陵县"
          },
          {
            areaCode: "430225",
            text: "炎陵县"
          },
          {
            areaCode: "430281",
            text: "醴陵市"
          }
        ]
      },
      {
        cityCode: "430300",
        text: "湘潭市",
        children: [
          {
            areaCode: "430302",
            text: "雨湖区"
          },
          {
            areaCode: "430304",
            text: "岳塘区"
          },
          {
            areaCode: "430321",
            text: "湘潭县"
          },
          {
            areaCode: "430381",
            text: "湘乡市"
          },
          {
            areaCode: "430382",
            text: "韶山市"
          }
        ]
      },
      {
        cityCode: "430400",
        text: "衡阳市",
        children: [
          {
            areaCode: "430405",
            text: "珠晖区"
          },
          {
            areaCode: "430406",
            text: "雁峰区"
          },
          {
            areaCode: "430407",
            text: "石鼓区"
          },
          {
            areaCode: "430408",
            text: "蒸湘区"
          },
          {
            areaCode: "430412",
            text: "南岳区"
          },
          {
            areaCode: "430421",
            text: "衡阳县"
          },
          {
            areaCode: "430422",
            text: "衡南县"
          },
          {
            areaCode: "430423",
            text: "衡山县"
          },
          {
            areaCode: "430424",
            text: "衡东县"
          },
          {
            areaCode: "430426",
            text: "祁东县"
          },
          {
            areaCode: "430481",
            text: "耒阳市"
          },
          {
            areaCode: "430482",
            text: "常宁市"
          }
        ]
      },
      {
        cityCode: "430500",
        text: "邵阳市",
        children: [
          {
            areaCode: "430502",
            text: "双清区"
          },
          {
            areaCode: "430503",
            text: "大祥区"
          },
          {
            areaCode: "430511",
            text: "北塔区"
          },
          {
            areaCode: "430521",
            text: "邵东县"
          },
          {
            areaCode: "430522",
            text: "新邵县"
          },
          {
            areaCode: "430523",
            text: "邵阳县"
          },
          {
            areaCode: "430524",
            text: "隆回县"
          },
          {
            areaCode: "430525",
            text: "洞口县"
          },
          {
            areaCode: "430527",
            text: "绥宁县"
          },
          {
            areaCode: "430528",
            text: "新宁县"
          },
          {
            areaCode: "430529",
            text: "城步苗族自治县"
          },
          {
            areaCode: "430581",
            text: "武冈市"
          }
        ]
      },
      {
        cityCode: "430600",
        text: "岳阳市",
        children: [
          {
            areaCode: "430602",
            text: "岳阳楼区"
          },
          {
            areaCode: "430603",
            text: "云溪区"
          },
          {
            areaCode: "430611",
            text: "君山区"
          },
          {
            areaCode: "430621",
            text: "岳阳县"
          },
          {
            areaCode: "430623",
            text: "华容县"
          },
          {
            areaCode: "430624",
            text: "湘阴县"
          },
          {
            areaCode: "430626",
            text: "平江县"
          },
          {
            areaCode: "430681",
            text: "汨罗市"
          },
          {
            areaCode: "430682",
            text: "临湘市"
          }
        ]
      },
      {
        cityCode: "430700",
        text: "常德市",
        children: [
          {
            areaCode: "430702",
            text: "武陵区"
          },
          {
            areaCode: "430703",
            text: "鼎城区"
          },
          {
            areaCode: "430721",
            text: "安乡县"
          },
          {
            areaCode: "430722",
            text: "汉寿县"
          },
          {
            areaCode: "430723",
            text: "澧县"
          },
          {
            areaCode: "430724",
            text: "临澧县"
          },
          {
            areaCode: "430725",
            text: "桃源县"
          },
          {
            areaCode: "430726",
            text: "石门县"
          },
          {
            areaCode: "430781",
            text: "津市市"
          }
        ]
      },
      {
        cityCode: "430800",
        text: "张家界市",
        children: [
          {
            areaCode: "430802",
            text: "永定区"
          },
          {
            areaCode: "430811",
            text: "武陵源区"
          },
          {
            areaCode: "430821",
            text: "慈利县"
          },
          {
            areaCode: "430822",
            text: "桑植县"
          }
        ]
      },
      {
        cityCode: "430900",
        text: "益阳市",
        children: [
          {
            areaCode: "430902",
            text: "资阳区"
          },
          {
            areaCode: "430903",
            text: "赫山区"
          },
          {
            areaCode: "430921",
            text: "南县"
          },
          {
            areaCode: "430922",
            text: "桃江县"
          },
          {
            areaCode: "430923",
            text: "安化县"
          },
          {
            areaCode: "430981",
            text: "沅江市"
          }
        ]
      },
      {
        cityCode: "431000",
        text: "郴州市",
        children: [
          {
            areaCode: "431002",
            text: "北湖区"
          },
          {
            areaCode: "431003",
            text: "苏仙区"
          },
          {
            areaCode: "431021",
            text: "桂阳县"
          },
          {
            areaCode: "431022",
            text: "宜章县"
          },
          {
            areaCode: "431023",
            text: "永兴县"
          },
          {
            areaCode: "431024",
            text: "嘉禾县"
          },
          {
            areaCode: "431025",
            text: "临武县"
          },
          {
            areaCode: "431026",
            text: "汝城县"
          },
          {
            areaCode: "431027",
            text: "桂东县"
          },
          {
            areaCode: "431028",
            text: "安仁县"
          },
          {
            areaCode: "431081",
            text: "资兴市"
          }
        ]
      },
      {
        cityCode: "431100",
        text: "永州市",
        children: [
          {
            areaCode: "431102",
            text: "零陵区"
          },
          {
            areaCode: "431103",
            text: "冷水滩区"
          },
          {
            areaCode: "431121",
            text: "祁阳县"
          },
          {
            areaCode: "431122",
            text: "东安县"
          },
          {
            areaCode: "431123",
            text: "双牌县"
          },
          {
            areaCode: "431124",
            text: "道县"
          },
          {
            areaCode: "431125",
            text: "江永县"
          },
          {
            areaCode: "431126",
            text: "宁远县"
          },
          {
            areaCode: "431127",
            text: "蓝山县"
          },
          {
            areaCode: "431128",
            text: "新田县"
          },
          {
            areaCode: "431129",
            text: "江华瑶族自治县"
          }
        ]
      },
      {
        cityCode: "431200",
        text: "怀化市",
        children: [
          {
            areaCode: "431202",
            text: "鹤城区"
          },
          {
            areaCode: "431221",
            text: "中方县"
          },
          {
            areaCode: "431222",
            text: "沅陵县"
          },
          {
            areaCode: "431223",
            text: "辰溪县"
          },
          {
            areaCode: "431224",
            text: "溆浦县"
          },
          {
            areaCode: "431225",
            text: "会同县"
          },
          {
            areaCode: "431226",
            text: "麻阳苗族自治县"
          },
          {
            areaCode: "431227",
            text: "新晃侗族自治县"
          },
          {
            areaCode: "431228",
            text: "芷江侗族自治县"
          },
          {
            areaCode: "431229",
            text: "靖州苗族侗族自治县"
          },
          {
            areaCode: "431230",
            text: "通道侗族自治县"
          },
          {
            areaCode: "431281",
            text: "洪江市"
          }
        ]
      },
      {
        cityCode: "431300",
        text: "娄底市",
        children: [
          {
            areaCode: "431302",
            text: "娄星区"
          },
          {
            areaCode: "431321",
            text: "双峰县"
          },
          {
            areaCode: "431322",
            text: "新化县"
          },
          {
            areaCode: "431381",
            text: "冷水江市"
          },
          {
            areaCode: "431382",
            text: "涟源市"
          }
        ]
      },
      {
        cityCode: "433100",
        text: "湘西土家族苗族自治州",
        children: [
          {
            areaCode: "433101",
            text: "吉首市"
          },
          {
            areaCode: "433122",
            text: "泸溪县"
          },
          {
            areaCode: "433123",
            text: "凤凰县"
          },
          {
            areaCode: "433124",
            text: "花垣县"
          },
          {
            areaCode: "433125",
            text: "保靖县"
          },
          {
            areaCode: "433126",
            text: "古丈县"
          },
          {
            areaCode: "433127",
            text: "永顺县"
          },
          {
            areaCode: "433130",
            text: "龙山县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "440000",
    text: "广东省",
    children: [
      {
        cityCode: "440100",
        text: "广州市",
        children: [
          {
            areaCode: "440103",
            text: "荔湾区"
          },
          {
            areaCode: "440104",
            text: "越秀区"
          },
          {
            areaCode: "440105",
            text: "海珠区"
          },
          {
            areaCode: "440106",
            text: "天河区"
          },
          {
            areaCode: "440111",
            text: "白云区"
          },
          {
            areaCode: "440112",
            text: "黄埔区"
          },
          {
            areaCode: "440113",
            text: "番禺区"
          },
          {
            areaCode: "440114",
            text: "花都区"
          },
          {
            areaCode: "440115",
            text: "南沙区"
          },
          {
            areaCode: "440116",
            text: "萝岗区"
          },
          {
            areaCode: "440117",
            text: "从化区"
          },
          {
            areaCode: "440118",
            text: "增城区"
          }
        ]
      },
      {
        cityCode: "440200",
        text: "韶关市",
        children: [
          {
            areaCode: "440203",
            text: "武江区"
          },
          {
            areaCode: "440204",
            text: "浈江区"
          },
          {
            areaCode: "440205",
            text: "曲江区"
          },
          {
            areaCode: "440222",
            text: "始兴县"
          },
          {
            areaCode: "440224",
            text: "仁化县"
          },
          {
            areaCode: "440229",
            text: "翁源县"
          },
          {
            areaCode: "440232",
            text: "乳源瑶族自治县"
          },
          {
            areaCode: "440233",
            text: "新丰县"
          },
          {
            areaCode: "440281",
            text: "乐昌市"
          },
          {
            areaCode: "440282",
            text: "南雄市"
          }
        ]
      },
      {
        cityCode: "440300",
        text: "深圳市",
        children: [
          {
            areaCode: "440303",
            text: "罗湖区"
          },
          {
            areaCode: "440304",
            text: "福田区"
          },
          {
            areaCode: "440305",
            text: "南山区"
          },
          {
            areaCode: "440306",
            text: "宝安区"
          },
          {
            areaCode: "440307",
            text: "龙岗区"
          },
          {
            areaCode: "440308",
            text: "盐田区"
          }
        ]
      },
      {
        cityCode: "440400",
        text: "珠海市",
        children: [
          {
            areaCode: "440402",
            text: "香洲区"
          },
          {
            areaCode: "440403",
            text: "斗门区"
          },
          {
            areaCode: "440404",
            text: "金湾区"
          }
        ]
      },
      {
        cityCode: "440500",
        text: "汕头市",
        children: [
          {
            areaCode: "440507",
            text: "龙湖区"
          },
          {
            areaCode: "440511",
            text: "金平区"
          },
          {
            areaCode: "440512",
            text: "濠江区"
          },
          {
            areaCode: "440513",
            text: "潮阳区"
          },
          {
            areaCode: "440514",
            text: "潮南区"
          },
          {
            areaCode: "440515",
            text: "澄海区"
          },
          {
            areaCode: "440523",
            text: "南澳县"
          }
        ]
      },
      {
        cityCode: "440600",
        text: "佛山市",
        children: [
          {
            areaCode: "440604",
            text: "禅城区"
          },
          {
            areaCode: "440605",
            text: "南海区"
          },
          {
            areaCode: "440606",
            text: "顺德区"
          },
          {
            areaCode: "440607",
            text: "三水区"
          },
          {
            areaCode: "440608",
            text: "高明区"
          }
        ]
      },
      {
        cityCode: "440700",
        text: "江门市",
        children: [
          {
            areaCode: "440703",
            text: "蓬江区"
          },
          {
            areaCode: "440704",
            text: "江海区"
          },
          {
            areaCode: "440705",
            text: "新会区"
          },
          {
            areaCode: "440781",
            text: "台山市"
          },
          {
            areaCode: "440783",
            text: "开平市"
          },
          {
            areaCode: "440784",
            text: "鹤山市"
          },
          {
            areaCode: "440785",
            text: "恩平市"
          }
        ]
      },
      {
        cityCode: "440800",
        text: "湛江市",
        children: [
          {
            areaCode: "440802",
            text: "赤坎区"
          },
          {
            areaCode: "440803",
            text: "霞山区"
          },
          {
            areaCode: "440804",
            text: "坡头区"
          },
          {
            areaCode: "440811",
            text: "麻章区"
          },
          {
            areaCode: "440823",
            text: "遂溪县"
          },
          {
            areaCode: "440825",
            text: "徐闻县"
          },
          {
            areaCode: "440881",
            text: "廉江市"
          },
          {
            areaCode: "440882",
            text: "雷州市"
          },
          {
            areaCode: "440883",
            text: "吴川市"
          }
        ]
      },
      {
        cityCode: "440900",
        text: "茂名市",
        children: [
          {
            areaCode: "440902",
            text: "茂南区"
          },
          {
            areaCode: "440904",
            text: "电白区"
          },
          {
            areaCode: "440981",
            text: "高州市"
          },
          {
            areaCode: "440982",
            text: "化州市"
          },
          {
            areaCode: "440983",
            text: "信宜市"
          }
        ]
      },
      {
        cityCode: "441200",
        text: "肇庆市",
        children: [
          {
            areaCode: "441202",
            text: "端州区"
          },
          {
            areaCode: "441203",
            text: "鼎湖区"
          },
          {
            areaCode: "441223",
            text: "广宁县"
          },
          {
            areaCode: "441224",
            text: "怀集县"
          },
          {
            areaCode: "441225",
            text: "封开县"
          },
          {
            areaCode: "441226",
            text: "德庆县"
          },
          {
            areaCode: "441283",
            text: "高要市"
          },
          {
            areaCode: "441284",
            text: "四会市"
          }
        ]
      },
      {
        cityCode: "441300",
        text: "惠州市",
        children: [
          {
            areaCode: "441302",
            text: "惠城区"
          },
          {
            areaCode: "441303",
            text: "惠阳区"
          },
          {
            areaCode: "441322",
            text: "博罗县"
          },
          {
            areaCode: "441323",
            text: "惠东县"
          },
          {
            areaCode: "441324",
            text: "龙门县"
          }
        ]
      },
      {
        cityCode: "441400",
        text: "梅州市",
        children: [
          {
            areaCode: "441402",
            text: "梅江区"
          },
          {
            areaCode: "441403",
            text: "梅县区"
          },
          {
            areaCode: "441422",
            text: "大埔县"
          },
          {
            areaCode: "441423",
            text: "丰顺县"
          },
          {
            areaCode: "441424",
            text: "五华县"
          },
          {
            areaCode: "441426",
            text: "平远县"
          },
          {
            areaCode: "441427",
            text: "蕉岭县"
          },
          {
            areaCode: "441481",
            text: "兴宁市"
          }
        ]
      },
      {
        cityCode: "441500",
        text: "汕尾市",
        children: [
          {
            areaCode: "441502",
            text: "城区"
          },
          {
            areaCode: "441521",
            text: "海丰县"
          },
          {
            areaCode: "441523",
            text: "陆河县"
          },
          {
            areaCode: "441581",
            text: "陆丰市"
          }
        ]
      },
      {
        cityCode: "441600",
        text: "河源市",
        children: [
          {
            areaCode: "441602",
            text: "源城区"
          },
          {
            areaCode: "441621",
            text: "紫金县"
          },
          {
            areaCode: "441622",
            text: "龙川县"
          },
          {
            areaCode: "441623",
            text: "连平县"
          },
          {
            areaCode: "441624",
            text: "和平县"
          },
          {
            areaCode: "441625",
            text: "东源县"
          }
        ]
      },
      {
        cityCode: "441700",
        text: "阳江市",
        children: [
          {
            areaCode: "441702",
            text: "江城区"
          },
          {
            areaCode: "441721",
            text: "阳西县"
          },
          {
            areaCode: "441723",
            text: "阳东县"
          },
          {
            areaCode: "441781",
            text: "阳春市"
          }
        ]
      },
      {
        cityCode: "441800",
        text: "清远市",
        children: [
          {
            areaCode: "441802",
            text: "清城区"
          },
          {
            areaCode: "441803",
            text: "清新区"
          },
          {
            areaCode: "441821",
            text: "佛冈县"
          },
          {
            areaCode: "441823",
            text: "阳山县"
          },
          {
            areaCode: "441825",
            text: "连山壮族瑶族自治县"
          },
          {
            areaCode: "441826",
            text: "连南瑶族自治县"
          },
          {
            areaCode: "441881",
            text: "英德市"
          },
          {
            areaCode: "441882",
            text: "连州市"
          }
        ]
      },
      {
        cityCode: "441900",
        text: "东莞市",
        children: [
          {
            areaCode: "441900",
            text: "东莞市"
          }
        ]
      },
      {
        cityCode: "442000",
        text: "中山市",
        children: [
          {
            areaCode: "442000",
            text: "中山市"
          }
        ]
      },
      {
        cityCode: "445100",
        text: "潮州市",
        children: [
          {
            areaCode: "445102",
            text: "湘桥区"
          },
          {
            areaCode: "445103",
            text: "潮安区"
          },
          {
            areaCode: "445122",
            text: "饶平县"
          }
        ]
      },
      {
        cityCode: "445200",
        text: "揭阳市",
        children: [
          {
            areaCode: "445202",
            text: "榕城区"
          },
          {
            areaCode: "445203",
            text: "揭东区"
          },
          {
            areaCode: "445222",
            text: "揭西县"
          },
          {
            areaCode: "445224",
            text: "惠来县"
          },
          {
            areaCode: "445281",
            text: "普宁市"
          }
        ]
      },
      {
        cityCode: "445300",
        text: "云浮市",
        children: [
          {
            areaCode: "445302",
            text: "云城区"
          },
          {
            areaCode: "445303",
            text: "云安区"
          },
          {
            areaCode: "445321",
            text: "新兴县"
          },
          {
            areaCode: "445322",
            text: "郁南县"
          },
          {
            areaCode: "445381",
            text: "罗定市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "450000",
    text: "广西壮族自治区",
    children: [
      {
        cityCode: "450100",
        text: "南宁市",
        children: [
          {
            areaCode: "450102",
            text: "兴宁区"
          },
          {
            areaCode: "450103",
            text: "青秀区"
          },
          {
            areaCode: "450105",
            text: "江南区"
          },
          {
            areaCode: "450107",
            text: "西乡塘区"
          },
          {
            areaCode: "450108",
            text: "良庆区"
          },
          {
            areaCode: "450109",
            text: "邕宁区"
          },
          {
            areaCode: "450122",
            text: "武鸣县"
          },
          {
            areaCode: "450123",
            text: "隆安县"
          },
          {
            areaCode: "450124",
            text: "马山县"
          },
          {
            areaCode: "450125",
            text: "上林县"
          },
          {
            areaCode: "450126",
            text: "宾阳县"
          },
          {
            areaCode: "450127",
            text: "横县"
          }
        ]
      },
      {
        cityCode: "450200",
        text: "柳州市",
        children: [
          {
            areaCode: "450202",
            text: "城中区"
          },
          {
            areaCode: "450203",
            text: "鱼峰区"
          },
          {
            areaCode: "450204",
            text: "柳南区"
          },
          {
            areaCode: "450205",
            text: "柳北区"
          },
          {
            areaCode: "450221",
            text: "柳江县"
          },
          {
            areaCode: "450222",
            text: "柳城县"
          },
          {
            areaCode: "450223",
            text: "鹿寨县"
          },
          {
            areaCode: "450224",
            text: "融安县"
          },
          {
            areaCode: "450225",
            text: "融水苗族自治县"
          },
          {
            areaCode: "450226",
            text: "三江侗族自治县"
          }
        ]
      },
      {
        cityCode: "450300",
        text: "桂林市",
        children: [
          {
            areaCode: "450302",
            text: "秀峰区"
          },
          {
            areaCode: "450303",
            text: "叠彩区"
          },
          {
            areaCode: "450304",
            text: "象山区"
          },
          {
            areaCode: "450305",
            text: "七星区"
          },
          {
            areaCode: "450311",
            text: "雁山区"
          },
          {
            areaCode: "450312",
            text: "临桂区"
          },
          {
            areaCode: "450321",
            text: "阳朔县"
          },
          {
            areaCode: "450323",
            text: "灵川县"
          },
          {
            areaCode: "450324",
            text: "全州县"
          },
          {
            areaCode: "450325",
            text: "兴安县"
          },
          {
            areaCode: "450326",
            text: "永福县"
          },
          {
            areaCode: "450327",
            text: "灌阳县"
          },
          {
            areaCode: "450328",
            text: "龙胜各族自治县"
          },
          {
            areaCode: "450329",
            text: "资源县"
          },
          {
            areaCode: "450330",
            text: "平乐县"
          },
          {
            areaCode: "450331",
            text: "荔浦县"
          },
          {
            areaCode: "450332",
            text: "恭城瑶族自治县"
          }
        ]
      },
      {
        cityCode: "450400",
        text: "梧州市",
        children: [
          {
            areaCode: "450403",
            text: "万秀区"
          },
          {
            areaCode: "450405",
            text: "长洲区"
          },
          {
            areaCode: "450406",
            text: "龙圩区"
          },
          {
            areaCode: "450421",
            text: "苍梧县"
          },
          {
            areaCode: "450422",
            text: "藤县"
          },
          {
            areaCode: "450423",
            text: "蒙山县"
          },
          {
            areaCode: "450481",
            text: "岑溪市"
          }
        ]
      },
      {
        cityCode: "450500",
        text: "北海市",
        children: [
          {
            areaCode: "450502",
            text: "海城区"
          },
          {
            areaCode: "450503",
            text: "银海区"
          },
          {
            areaCode: "450512",
            text: "铁山港区"
          },
          {
            areaCode: "450521",
            text: "合浦县"
          }
        ]
      },
      {
        cityCode: "450600",
        text: "防城港市",
        children: [
          {
            areaCode: "450602",
            text: "港口区"
          },
          {
            areaCode: "450603",
            text: "防城区"
          },
          {
            areaCode: "450621",
            text: "上思县"
          },
          {
            areaCode: "450681",
            text: "东兴市"
          }
        ]
      },
      {
        cityCode: "450700",
        text: "钦州市",
        children: [
          {
            areaCode: "450702",
            text: "钦南区"
          },
          {
            areaCode: "450703",
            text: "钦北区"
          },
          {
            areaCode: "450721",
            text: "灵山县"
          },
          {
            areaCode: "450722",
            text: "浦北县"
          }
        ]
      },
      {
        cityCode: "450800",
        text: "贵港市",
        children: [
          {
            areaCode: "450802",
            text: "港北区"
          },
          {
            areaCode: "450803",
            text: "港南区"
          },
          {
            areaCode: "450804",
            text: "覃塘区"
          },
          {
            areaCode: "450821",
            text: "平南县"
          },
          {
            areaCode: "450881",
            text: "桂平市"
          }
        ]
      },
      {
        cityCode: "450900",
        text: "玉林市",
        children: [
          {
            areaCode: "450902",
            text: "玉州区"
          },
          {
            areaCode: "450903",
            text: "福绵区"
          },
          {
            areaCode: "450921",
            text: "容县"
          },
          {
            areaCode: "450922",
            text: "陆川县"
          },
          {
            areaCode: "450923",
            text: "博白县"
          },
          {
            areaCode: "450924",
            text: "兴业县"
          },
          {
            areaCode: "450981",
            text: "北流市"
          }
        ]
      },
      {
        cityCode: "451000",
        text: "百色市",
        children: [
          {
            areaCode: "451002",
            text: "右江区"
          },
          {
            areaCode: "451021",
            text: "田阳县"
          },
          {
            areaCode: "451022",
            text: "田东县"
          },
          {
            areaCode: "451023",
            text: "平果县"
          },
          {
            areaCode: "451024",
            text: "德保县"
          },
          {
            areaCode: "451025",
            text: "靖西县"
          },
          {
            areaCode: "451026",
            text: "那坡县"
          },
          {
            areaCode: "451027",
            text: "凌云县"
          },
          {
            areaCode: "451028",
            text: "乐业县"
          },
          {
            areaCode: "451029",
            text: "田林县"
          },
          {
            areaCode: "451030",
            text: "西林县"
          },
          {
            areaCode: "451031",
            text: "隆林各族自治县"
          }
        ]
      },
      {
        cityCode: "451100",
        text: "贺州市",
        children: [
          {
            areaCode: "451102",
            text: "八步区"
          },
          {
            areaCode: "451121",
            text: "昭平县"
          },
          {
            areaCode: "451122",
            text: "钟山县"
          },
          {
            areaCode: "451123",
            text: "富川瑶族自治县"
          }
        ]
      },
      {
        cityCode: "451200",
        text: "河池市",
        children: [
          {
            areaCode: "451202",
            text: "金城江区"
          },
          {
            areaCode: "451221",
            text: "南丹县"
          },
          {
            areaCode: "451222",
            text: "天峨县"
          },
          {
            areaCode: "451223",
            text: "凤山县"
          },
          {
            areaCode: "451224",
            text: "东兰县"
          },
          {
            areaCode: "451225",
            text: "罗城仫佬族自治县"
          },
          {
            areaCode: "451226",
            text: "环江毛南族自治县"
          },
          {
            areaCode: "451227",
            text: "巴马瑶族自治县"
          },
          {
            areaCode: "451228",
            text: "都安瑶族自治县"
          },
          {
            areaCode: "451229",
            text: "大化瑶族自治县"
          },
          {
            areaCode: "451281",
            text: "宜州市"
          }
        ]
      },
      {
        cityCode: "451300",
        text: "来宾市",
        children: [
          {
            areaCode: "451302",
            text: "兴宾区"
          },
          {
            areaCode: "451321",
            text: "忻城县"
          },
          {
            areaCode: "451322",
            text: "象州县"
          },
          {
            areaCode: "451323",
            text: "武宣县"
          },
          {
            areaCode: "451324",
            text: "金秀瑶族自治县"
          },
          {
            areaCode: "451381",
            text: "合山市"
          }
        ]
      },
      {
        cityCode: "451400",
        text: "崇左市",
        children: [
          {
            areaCode: "451402",
            text: "江州区"
          },
          {
            areaCode: "451421",
            text: "扶绥县"
          },
          {
            areaCode: "451422",
            text: "宁明县"
          },
          {
            areaCode: "451423",
            text: "龙州县"
          },
          {
            areaCode: "451424",
            text: "大新县"
          },
          {
            areaCode: "451425",
            text: "天等县"
          },
          {
            areaCode: "451481",
            text: "凭祥市"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "460000",
    text: "海南省",
    children: [
      {
        cityCode: "460100",
        text: "海口市",
        children: [
          {
            areaCode: "460105",
            text: "秀英区"
          },
          {
            areaCode: "460106",
            text: "龙华区"
          },
          {
            areaCode: "460107",
            text: "琼山区"
          },
          {
            areaCode: "460108",
            text: "美兰区"
          }
        ]
      },
      {
        cityCode: "460200",
        text: "三亚市",
        children: [
          {
            areaCode: "460202",
            text: "海棠区"
          },
          {
            areaCode: "460203",
            text: "吉阳区"
          },
          {
            areaCode: "460204",
            text: "天涯区"
          },
          {
            areaCode: "460205",
            text: "崖州区"
          }
        ]
      },
      {
        cityCode: "469000",
        text: "省直辖县级行政单位",
        children: [
          {
            areaCode: "469001",
            text: "五指山市"
          },
          {
            areaCode: "469002",
            text: "琼海市"
          },
          {
            areaCode: "469003",
            text: "儋州市"
          },
          {
            areaCode: "469005",
            text: "文昌市"
          },
          {
            areaCode: "469006",
            text: "万宁市"
          },
          {
            areaCode: "469007",
            text: "东方市"
          },
          {
            areaCode: "469021",
            text: "定安县"
          },
          {
            areaCode: "469022",
            text: "屯昌县"
          },
          {
            areaCode: "469023",
            text: "澄迈县"
          },
          {
            areaCode: "469024",
            text: "临高县"
          },
          {
            areaCode: "469025",
            text: "白沙黎族自治县"
          },
          {
            areaCode: "469026",
            text: "昌江黎族自治县"
          },
          {
            areaCode: "469027",
            text: "乐东黎族自治县"
          },
          {
            areaCode: "469028",
            text: "陵水黎族自治县"
          },
          {
            areaCode: "469029",
            text: "保亭黎族苗族自治县"
          },
          {
            areaCode: "469030",
            text: "琼中黎族苗族自治县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "500000",
    text: "重庆市",
    children: [
      {
        cityCode: "500100",
        text: "重庆市",
        children: [
          {
            areaCode: "500101",
            text: "万州区"
          },
          {
            areaCode: "500102",
            text: "涪陵区"
          },
          {
            areaCode: "500103",
            text: "渝中区"
          },
          {
            areaCode: "500104",
            text: "大渡口区"
          },
          {
            areaCode: "500105",
            text: "江北区"
          },
          {
            areaCode: "500106",
            text: "沙坪坝区"
          },
          {
            areaCode: "500107",
            text: "九龙坡区"
          },
          {
            areaCode: "500108",
            text: "南岸区"
          },
          {
            areaCode: "500109",
            text: "北碚区"
          },
          {
            areaCode: "500110",
            text: "綦江区"
          },
          {
            areaCode: "500111",
            text: "大足区"
          },
          {
            areaCode: "500112",
            text: "渝北区"
          },
          {
            areaCode: "500113",
            text: "巴南区"
          },
          {
            areaCode: "500114",
            text: "黔江区"
          },
          {
            areaCode: "500115",
            text: "长寿区"
          },
          {
            areaCode: "500116",
            text: "江津区"
          },
          {
            areaCode: "500117",
            text: "合川区"
          },
          {
            areaCode: "500118",
            text: "永川区"
          },
          {
            areaCode: "500119",
            text: "南川区"
          },
          {
            areaCode: "500120",
            text: "璧山区"
          },
          {
            areaCode: "500151",
            text: "铜梁区"
          }
        ]
      },
      {
        cityCode: "500200",
        text: "重庆市辖县",
        children: [
          {
            areaCode: "500223",
            text: "潼南县"
          },
          {
            areaCode: "500226",
            text: "荣昌县"
          },
          {
            areaCode: "500228",
            text: "梁平县"
          },
          {
            areaCode: "500229",
            text: "城口县"
          },
          {
            areaCode: "500230",
            text: "丰都县"
          },
          {
            areaCode: "500231",
            text: "垫江县"
          },
          {
            areaCode: "500232",
            text: "武隆县"
          },
          {
            areaCode: "500233",
            text: "忠县"
          },
          {
            areaCode: "500234",
            text: "开县"
          },
          {
            areaCode: "500235",
            text: "云阳县"
          },
          {
            areaCode: "500236",
            text: "奉节县"
          },
          {
            areaCode: "500237",
            text: "巫山县"
          },
          {
            areaCode: "500238",
            text: "巫溪县"
          },
          {
            areaCode: "500240",
            text: "石柱土家族自治县"
          },
          {
            areaCode: "500241",
            text: "秀山土家族苗族自治县"
          },
          {
            areaCode: "500242",
            text: "酉阳土家族苗族自治县"
          },
          {
            areaCode: "500243",
            text: "彭水苗族土家族自治县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "510000",
    text: "四川省",
    children: [
      {
        cityCode: "510100",
        text: "成都市",
        children: [
          {
            areaCode: "510104",
            text: "锦江区"
          },
          {
            areaCode: "510105",
            text: "青羊区"
          },
          {
            areaCode: "510106",
            text: "金牛区"
          },
          {
            areaCode: "510107",
            text: "武侯区"
          },
          {
            areaCode: "510108",
            text: "成华区"
          },
          {
            areaCode: "510112",
            text: "龙泉驿区"
          },
          {
            areaCode: "510113",
            text: "青白江区"
          },
          {
            areaCode: "510114",
            text: "新都区"
          },
          {
            areaCode: "510115",
            text: "温江区"
          },
          {
            areaCode: "510121",
            text: "金堂县"
          },
          {
            areaCode: "510122",
            text: "双流县"
          },
          {
            areaCode: "510124",
            text: "郫县"
          },
          {
            areaCode: "510129",
            text: "大邑县"
          },
          {
            areaCode: "510131",
            text: "蒲江县"
          },
          {
            areaCode: "510132",
            text: "新津县"
          },
          {
            areaCode: "510181",
            text: "都江堰市"
          },
          {
            areaCode: "510182",
            text: "彭州市"
          },
          {
            areaCode: "510183",
            text: "邛崃市"
          },
          {
            areaCode: "510184",
            text: "崇州市"
          }
        ]
      },
      {
        cityCode: "510300",
        text: "自贡市",
        children: [
          {
            areaCode: "510302",
            text: "自流井区"
          },
          {
            areaCode: "510303",
            text: "贡井区"
          },
          {
            areaCode: "510304",
            text: "大安区"
          },
          {
            areaCode: "510311",
            text: "沿滩区"
          },
          {
            areaCode: "510321",
            text: "荣县"
          },
          {
            areaCode: "510322",
            text: "富顺县"
          }
        ]
      },
      {
        cityCode: "510400",
        text: "攀枝花市",
        children: [
          {
            areaCode: "510402",
            text: "东区"
          },
          {
            areaCode: "510403",
            text: "西区"
          },
          {
            areaCode: "510411",
            text: "仁和区"
          },
          {
            areaCode: "510421",
            text: "米易县"
          },
          {
            areaCode: "510422",
            text: "盐边县"
          }
        ]
      },
      {
        cityCode: "510500",
        text: "泸州市",
        children: [
          {
            areaCode: "510502",
            text: "江阳区"
          },
          {
            areaCode: "510503",
            text: "纳溪区"
          },
          {
            areaCode: "510504",
            text: "龙马潭区"
          },
          {
            areaCode: "510521",
            text: "泸县"
          },
          {
            areaCode: "510522",
            text: "合江县"
          },
          {
            areaCode: "510524",
            text: "叙永县"
          },
          {
            areaCode: "510525",
            text: "古蔺县"
          }
        ]
      },
      {
        cityCode: "510600",
        text: "德阳市",
        children: [
          {
            areaCode: "510603",
            text: "旌阳区"
          },
          {
            areaCode: "510623",
            text: "中江县"
          },
          {
            areaCode: "510626",
            text: "罗江县"
          },
          {
            areaCode: "510681",
            text: "广汉市"
          },
          {
            areaCode: "510682",
            text: "什邡市"
          },
          {
            areaCode: "510683",
            text: "绵竹市"
          }
        ]
      },
      {
        cityCode: "510700",
        text: "绵阳市",
        children: [
          {
            areaCode: "510703",
            text: "涪城区"
          },
          {
            areaCode: "510704",
            text: "游仙区"
          },
          {
            areaCode: "510722",
            text: "三台县"
          },
          {
            areaCode: "510723",
            text: "盐亭县"
          },
          {
            areaCode: "510724",
            text: "安县"
          },
          {
            areaCode: "510725",
            text: "梓潼县"
          },
          {
            areaCode: "510726",
            text: "北川羌族自治县"
          },
          {
            areaCode: "510727",
            text: "平武县"
          },
          {
            areaCode: "510781",
            text: "江油市"
          }
        ]
      },
      {
        cityCode: "510800",
        text: "广元市",
        children: [
          {
            areaCode: "510802",
            text: "利州区"
          },
          {
            areaCode: "510811",
            text: "昭化区"
          },
          {
            areaCode: "510812",
            text: "朝天区"
          },
          {
            areaCode: "510821",
            text: "旺苍县"
          },
          {
            areaCode: "510822",
            text: "青川县"
          },
          {
            areaCode: "510823",
            text: "剑阁县"
          },
          {
            areaCode: "510824",
            text: "苍溪县"
          }
        ]
      },
      {
        cityCode: "510900",
        text: "遂宁市",
        children: [
          {
            areaCode: "510903",
            text: "船山区"
          },
          {
            areaCode: "510904",
            text: "安居区"
          },
          {
            areaCode: "510921",
            text: "蓬溪县"
          },
          {
            areaCode: "510922",
            text: "射洪县"
          },
          {
            areaCode: "510923",
            text: "大英县"
          }
        ]
      },
      {
        cityCode: "511000",
        text: "内江市",
        children: [
          {
            areaCode: "511002",
            text: "市中区"
          },
          {
            areaCode: "511011",
            text: "东兴区"
          },
          {
            areaCode: "511024",
            text: "威远县"
          },
          {
            areaCode: "511025",
            text: "资中县"
          },
          {
            areaCode: "511028",
            text: "隆昌县"
          }
        ]
      },
      {
        cityCode: "511100",
        text: "乐山市",
        children: [
          {
            areaCode: "511102",
            text: "市中区"
          },
          {
            areaCode: "511111",
            text: "沙湾区"
          },
          {
            areaCode: "511112",
            text: "五通桥区"
          },
          {
            areaCode: "511113",
            text: "金口河区"
          },
          {
            areaCode: "511123",
            text: "犍为县"
          },
          {
            areaCode: "511124",
            text: "井研县"
          },
          {
            areaCode: "511126",
            text: "夹江县"
          },
          {
            areaCode: "511129",
            text: "沐川县"
          },
          {
            areaCode: "511132",
            text: "峨边彝族自治县"
          },
          {
            areaCode: "511133",
            text: "马边彝族自治县"
          },
          {
            areaCode: "511181",
            text: "峨眉山市"
          }
        ]
      },
      {
        cityCode: "511300",
        text: "南充市",
        children: [
          {
            areaCode: "511302",
            text: "顺庆区"
          },
          {
            areaCode: "511303",
            text: "高坪区"
          },
          {
            areaCode: "511304",
            text: "嘉陵区"
          },
          {
            areaCode: "511321",
            text: "南部县"
          },
          {
            areaCode: "511322",
            text: "营山县"
          },
          {
            areaCode: "511323",
            text: "蓬安县"
          },
          {
            areaCode: "511324",
            text: "仪陇县"
          },
          {
            areaCode: "511325",
            text: "西充县"
          },
          {
            areaCode: "511381",
            text: "阆中市"
          }
        ]
      },
      {
        cityCode: "511400",
        text: "眉山市",
        children: [
          {
            areaCode: "511402",
            text: "东坡区"
          },
          {
            areaCode: "511421",
            text: "仁寿县"
          },
          {
            areaCode: "511422",
            text: "彭山县"
          },
          {
            areaCode: "511423",
            text: "洪雅县"
          },
          {
            areaCode: "511424",
            text: "丹棱县"
          },
          {
            areaCode: "511425",
            text: "青神县"
          }
        ]
      },
      {
        cityCode: "511500",
        text: "宜宾市",
        children: [
          {
            areaCode: "511502",
            text: "翠屏区"
          },
          {
            areaCode: "511503",
            text: "南溪区"
          },
          {
            areaCode: "511521",
            text: "宜宾县"
          },
          {
            areaCode: "511523",
            text: "江安县"
          },
          {
            areaCode: "511524",
            text: "长宁县"
          },
          {
            areaCode: "511525",
            text: "高县"
          },
          {
            areaCode: "511526",
            text: "珙县"
          },
          {
            areaCode: "511527",
            text: "筠连县"
          },
          {
            areaCode: "511528",
            text: "兴文县"
          },
          {
            areaCode: "511529",
            text: "屏山县"
          }
        ]
      },
      {
        cityCode: "511600",
        text: "广安市",
        children: [
          {
            areaCode: "511602",
            text: "广安区"
          },
          {
            areaCode: "511603",
            text: "前锋区"
          },
          {
            areaCode: "511621",
            text: "岳池县"
          },
          {
            areaCode: "511622",
            text: "武胜县"
          },
          {
            areaCode: "511623",
            text: "邻水县"
          },
          {
            areaCode: "511681",
            text: "华蓥市"
          }
        ]
      },
      {
        cityCode: "511700",
        text: "达州市",
        children: [
          {
            areaCode: "511702",
            text: "通川区"
          },
          {
            areaCode: "511703",
            text: "达川区"
          },
          {
            areaCode: "511722",
            text: "宣汉县"
          },
          {
            areaCode: "511723",
            text: "开江县"
          },
          {
            areaCode: "511724",
            text: "大竹县"
          },
          {
            areaCode: "511725",
            text: "渠县"
          },
          {
            areaCode: "511781",
            text: "万源市"
          }
        ]
      },
      {
        cityCode: "511800",
        text: "雅安市",
        children: [
          {
            areaCode: "511802",
            text: "雨城区"
          },
          {
            areaCode: "511803",
            text: "名山区"
          },
          {
            areaCode: "511822",
            text: "荥经县"
          },
          {
            areaCode: "511823",
            text: "汉源县"
          },
          {
            areaCode: "511824",
            text: "石棉县"
          },
          {
            areaCode: "511825",
            text: "天全县"
          },
          {
            areaCode: "511826",
            text: "芦山县"
          },
          {
            areaCode: "511827",
            text: "宝兴县"
          }
        ]
      },
      {
        cityCode: "511900",
        text: "巴中市",
        children: [
          {
            areaCode: "511902",
            text: "巴州区"
          },
          {
            areaCode: "511903",
            text: "恩阳区"
          },
          {
            areaCode: "511921",
            text: "通江县"
          },
          {
            areaCode: "511922",
            text: "南江县"
          },
          {
            areaCode: "511923",
            text: "平昌县"
          }
        ]
      },
      {
        cityCode: "512000",
        text: "资阳市",
        children: [
          {
            areaCode: "512002",
            text: "雁江区"
          },
          {
            areaCode: "512021",
            text: "安岳县"
          },
          {
            areaCode: "512022",
            text: "乐至县"
          },
          {
            areaCode: "512081",
            text: "简阳市"
          }
        ]
      },
      {
        cityCode: "513200",
        text: "阿坝藏族羌族自治州",
        children: [
          {
            areaCode: "513221",
            text: "汶川县"
          },
          {
            areaCode: "513222",
            text: "理县"
          },
          {
            areaCode: "513223",
            text: "茂县"
          },
          {
            areaCode: "513224",
            text: "松潘县"
          },
          {
            areaCode: "513225",
            text: "九寨沟县"
          },
          {
            areaCode: "513226",
            text: "金川县"
          },
          {
            areaCode: "513227",
            text: "小金县"
          },
          {
            areaCode: "513228",
            text: "黑水县"
          },
          {
            areaCode: "513229",
            text: "马尔康县"
          },
          {
            areaCode: "513230",
            text: "壤塘县"
          },
          {
            areaCode: "513231",
            text: "阿坝县"
          },
          {
            areaCode: "513232",
            text: "若尔盖县"
          },
          {
            areaCode: "513233",
            text: "红原县"
          }
        ]
      },
      {
        cityCode: "513300",
        text: "甘孜藏族自治州",
        children: [
          {
            areaCode: "513321",
            text: "康定县"
          },
          {
            areaCode: "513322",
            text: "泸定县"
          },
          {
            areaCode: "513323",
            text: "丹巴县"
          },
          {
            areaCode: "513324",
            text: "九龙县"
          },
          {
            areaCode: "513325",
            text: "雅江县"
          },
          {
            areaCode: "513326",
            text: "道孚县"
          },
          {
            areaCode: "513327",
            text: "炉霍县"
          },
          {
            areaCode: "513328",
            text: "甘孜县"
          },
          {
            areaCode: "513329",
            text: "新龙县"
          },
          {
            areaCode: "513330",
            text: "德格县"
          },
          {
            areaCode: "513331",
            text: "白玉县"
          },
          {
            areaCode: "513332",
            text: "石渠县"
          },
          {
            areaCode: "513333",
            text: "色达县"
          },
          {
            areaCode: "513334",
            text: "理塘县"
          },
          {
            areaCode: "513335",
            text: "巴塘县"
          },
          {
            areaCode: "513336",
            text: "乡城县"
          },
          {
            areaCode: "513337",
            text: "稻城县"
          },
          {
            areaCode: "513338",
            text: "得荣县"
          }
        ]
      },
      {
        cityCode: "513400",
        text: "凉山彝族自治州",
        children: [
          {
            areaCode: "513401",
            text: "西昌市"
          },
          {
            areaCode: "513422",
            text: "木里藏族自治县"
          },
          {
            areaCode: "513423",
            text: "盐源县"
          },
          {
            areaCode: "513424",
            text: "德昌县"
          },
          {
            areaCode: "513425",
            text: "会理县"
          },
          {
            areaCode: "513426",
            text: "会东县"
          },
          {
            areaCode: "513427",
            text: "宁南县"
          },
          {
            areaCode: "513428",
            text: "普格县"
          },
          {
            areaCode: "513429",
            text: "布拖县"
          },
          {
            areaCode: "513430",
            text: "金阳县"
          },
          {
            areaCode: "513431",
            text: "昭觉县"
          },
          {
            areaCode: "513432",
            text: "喜德县"
          },
          {
            areaCode: "513433",
            text: "冕宁县"
          },
          {
            areaCode: "513434",
            text: "越西县"
          },
          {
            areaCode: "513435",
            text: "甘洛县"
          },
          {
            areaCode: "513436",
            text: "美姑县"
          },
          {
            areaCode: "513437",
            text: "雷波县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "520000",
    text: "贵州省",
    children: [
      {
        cityCode: "520100",
        text: "贵阳市",
        children: [
          {
            areaCode: "520102",
            text: "南明区"
          },
          {
            areaCode: "520103",
            text: "云岩区"
          },
          {
            areaCode: "520111",
            text: "花溪区"
          },
          {
            areaCode: "520112",
            text: "乌当区"
          },
          {
            areaCode: "520113",
            text: "白云区"
          },
          {
            areaCode: "520115",
            text: "观山湖区"
          },
          {
            areaCode: "520121",
            text: "开阳县"
          },
          {
            areaCode: "520122",
            text: "息烽县"
          },
          {
            areaCode: "520123",
            text: "修文县"
          },
          {
            areaCode: "520181",
            text: "清镇市"
          }
        ]
      },
      {
        cityCode: "520200",
        text: "六盘水市",
        children: [
          {
            areaCode: "520201",
            text: "钟山区"
          },
          {
            areaCode: "520203",
            text: "六枝特区"
          },
          {
            areaCode: "520221",
            text: "水城县"
          },
          {
            areaCode: "520222",
            text: "盘县"
          }
        ]
      },
      {
        cityCode: "520300",
        text: "遵义市",
        children: [
          {
            areaCode: "520302",
            text: "红花岗区"
          },
          {
            areaCode: "520303",
            text: "汇川区"
          },
          {
            areaCode: "520321",
            text: "遵义县"
          },
          {
            areaCode: "520322",
            text: "桐梓县"
          },
          {
            areaCode: "520323",
            text: "绥阳县"
          },
          {
            areaCode: "520324",
            text: "正安县"
          },
          {
            areaCode: "520325",
            text: "道真仡佬族苗族自治县"
          },
          {
            areaCode: "520326",
            text: "务川仡佬族苗族自治县"
          },
          {
            areaCode: "520327",
            text: "凤冈县"
          },
          {
            areaCode: "520328",
            text: "湄潭县"
          },
          {
            areaCode: "520329",
            text: "余庆县"
          },
          {
            areaCode: "520330",
            text: "习水县"
          },
          {
            areaCode: "520381",
            text: "赤水市"
          },
          {
            areaCode: "520382",
            text: "仁怀市"
          }
        ]
      },
      {
        cityCode: "520400",
        text: "安顺市",
        children: [
          {
            areaCode: "520402",
            text: "西秀区"
          },
          {
            areaCode: "520421",
            text: "平坝县"
          },
          {
            areaCode: "520422",
            text: "普定县"
          },
          {
            areaCode: "520423",
            text: "镇宁布依族苗族自治县"
          },
          {
            areaCode: "520424",
            text: "关岭布依族苗族自治县"
          },
          {
            areaCode: "520425",
            text: "紫云苗族布依族自治县"
          }
        ]
      },
      {
        cityCode: "522200",
        text: "铜仁地区",
        children: [
          {
            areaCode: "520602",
            text: "碧江区"
          },
          {
            areaCode: "520603",
            text: "万山区"
          },
          {
            areaCode: "520621",
            text: "江口县"
          },
          {
            areaCode: "520622",
            text: "玉屏侗族自治县"
          },
          {
            areaCode: "520623",
            text: "石阡县"
          },
          {
            areaCode: "520624",
            text: "思南县"
          },
          {
            areaCode: "520625",
            text: "印江土家族苗族自治县"
          },
          {
            areaCode: "520626",
            text: "德江县"
          },
          {
            areaCode: "520627",
            text: "沿河土家族自治县"
          },
          {
            areaCode: "520628",
            text: "松桃苗族自治县"
          },
          {
            areaCode: "522200",
            text: "铜仁地区"
          }
        ]
      },
      {
        cityCode: "522300",
        text: "黔西南布依族苗族自治州",
        children: [
          {
            areaCode: "522301",
            text: "兴义市"
          },
          {
            areaCode: "522322",
            text: "兴仁县"
          },
          {
            areaCode: "522323",
            text: "普安县"
          },
          {
            areaCode: "522324",
            text: "晴隆县"
          },
          {
            areaCode: "522325",
            text: "贞丰县"
          },
          {
            areaCode: "522326",
            text: "望谟县"
          },
          {
            areaCode: "522327",
            text: "册亨县"
          },
          {
            areaCode: "522328",
            text: "安龙县"
          }
        ]
      },
      {
        cityCode: "522400",
        text: "毕节地区",
        children: [
          {
            areaCode: "520502",
            text: "七星关区"
          },
          {
            areaCode: "520521",
            text: "大方县"
          },
          {
            areaCode: "520522",
            text: "黔西县"
          },
          {
            areaCode: "520523",
            text: "金沙县"
          },
          {
            areaCode: "520524",
            text: "织金县"
          },
          {
            areaCode: "520525",
            text: "纳雍县"
          },
          {
            areaCode: "520526",
            text: "威宁彝族回族苗族自治县"
          },
          {
            areaCode: "520527",
            text: "赫章县"
          },
          {
            areaCode: "522400",
            text: "毕节地区"
          }
        ]
      },
      {
        cityCode: "522600",
        text: "黔东南苗族侗族自治州",
        children: [
          {
            areaCode: "522601",
            text: "凯里市"
          },
          {
            areaCode: "522622",
            text: "黄平县"
          },
          {
            areaCode: "522623",
            text: "施秉县"
          },
          {
            areaCode: "522624",
            text: "三穗县"
          },
          {
            areaCode: "522625",
            text: "镇远县"
          },
          {
            areaCode: "522626",
            text: "岑巩县"
          },
          {
            areaCode: "522627",
            text: "天柱县"
          },
          {
            areaCode: "522628",
            text: "锦屏县"
          },
          {
            areaCode: "522629",
            text: "剑河县"
          },
          {
            areaCode: "522630",
            text: "台江县"
          },
          {
            areaCode: "522631",
            text: "黎平县"
          },
          {
            areaCode: "522632",
            text: "榕江县"
          },
          {
            areaCode: "522633",
            text: "从江县"
          },
          {
            areaCode: "522634",
            text: "雷山县"
          },
          {
            areaCode: "522635",
            text: "麻江县"
          },
          {
            areaCode: "522636",
            text: "丹寨县"
          }
        ]
      },
      {
        cityCode: "522700",
        text: "黔南布依族苗族自治州",
        children: [
          {
            areaCode: "522701",
            text: "都匀市"
          },
          {
            areaCode: "522702",
            text: "福泉市"
          },
          {
            areaCode: "522722",
            text: "荔波县"
          },
          {
            areaCode: "522723",
            text: "贵定县"
          },
          {
            areaCode: "522725",
            text: "瓮安县"
          },
          {
            areaCode: "522726",
            text: "独山县"
          },
          {
            areaCode: "522727",
            text: "平塘县"
          },
          {
            areaCode: "522728",
            text: "罗甸县"
          },
          {
            areaCode: "522729",
            text: "长顺县"
          },
          {
            areaCode: "522730",
            text: "龙里县"
          },
          {
            areaCode: "522731",
            text: "惠水县"
          },
          {
            areaCode: "522732",
            text: "三都水族自治县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "530000",
    text: "云南省",
    children: [
      {
        cityCode: "530100",
        text: "昆明市",
        children: [
          {
            areaCode: "530102",
            text: "五华区"
          },
          {
            areaCode: "530103",
            text: "盘龙区"
          },
          {
            areaCode: "530111",
            text: "官渡区"
          },
          {
            areaCode: "530112",
            text: "西山区"
          },
          {
            areaCode: "530113",
            text: "东川区"
          },
          {
            areaCode: "530114",
            text: "呈贡区"
          },
          {
            areaCode: "530122",
            text: "晋宁县"
          },
          {
            areaCode: "530124",
            text: "富民县"
          },
          {
            areaCode: "530125",
            text: "宜良县"
          },
          {
            areaCode: "530126",
            text: "石林彝族自治县"
          },
          {
            areaCode: "530127",
            text: "嵩明县"
          },
          {
            areaCode: "530128",
            text: "禄劝彝族苗族自治县"
          },
          {
            areaCode: "530129",
            text: "寻甸回族彝族自治县"
          },
          {
            areaCode: "530181",
            text: "安宁市"
          }
        ]
      },
      {
        cityCode: "530300",
        text: "曲靖市",
        children: [
          {
            areaCode: "530302",
            text: "麒麟区"
          },
          {
            areaCode: "530321",
            text: "马龙县"
          },
          {
            areaCode: "530322",
            text: "陆良县"
          },
          {
            areaCode: "530323",
            text: "师宗县"
          },
          {
            areaCode: "530324",
            text: "罗平县"
          },
          {
            areaCode: "530325",
            text: "富源县"
          },
          {
            areaCode: "530326",
            text: "会泽县"
          },
          {
            areaCode: "530328",
            text: "沾益县"
          },
          {
            areaCode: "530381",
            text: "宣威市"
          }
        ]
      },
      {
        cityCode: "530400",
        text: "玉溪市",
        children: [
          {
            areaCode: "530402",
            text: "红塔区"
          },
          {
            areaCode: "530421",
            text: "江川县"
          },
          {
            areaCode: "530422",
            text: "澄江县"
          },
          {
            areaCode: "530423",
            text: "通海县"
          },
          {
            areaCode: "530424",
            text: "华宁县"
          },
          {
            areaCode: "530425",
            text: "易门县"
          },
          {
            areaCode: "530426",
            text: "峨山彝族自治县"
          },
          {
            areaCode: "530427",
            text: "新平彝族傣族自治县"
          },
          {
            areaCode: "530428",
            text: "元江哈尼族彝族傣族自治县"
          }
        ]
      },
      {
        cityCode: "530500",
        text: "保山市",
        children: [
          {
            areaCode: "530502",
            text: "隆阳区"
          },
          {
            areaCode: "530521",
            text: "施甸县"
          },
          {
            areaCode: "530522",
            text: "腾冲县"
          },
          {
            areaCode: "530523",
            text: "龙陵县"
          },
          {
            areaCode: "530524",
            text: "昌宁县"
          }
        ]
      },
      {
        cityCode: "530600",
        text: "昭通市",
        children: [
          {
            areaCode: "530602",
            text: "昭阳区"
          },
          {
            areaCode: "530621",
            text: "鲁甸县"
          },
          {
            areaCode: "530622",
            text: "巧家县"
          },
          {
            areaCode: "530623",
            text: "盐津县"
          },
          {
            areaCode: "530624",
            text: "大关县"
          },
          {
            areaCode: "530625",
            text: "永善县"
          },
          {
            areaCode: "530626",
            text: "绥江县"
          },
          {
            areaCode: "530627",
            text: "镇雄县"
          },
          {
            areaCode: "530628",
            text: "彝良县"
          },
          {
            areaCode: "530629",
            text: "威信县"
          },
          {
            areaCode: "530630",
            text: "水富县"
          }
        ]
      },
      {
        cityCode: "530700",
        text: "丽江市",
        children: [
          {
            areaCode: "530702",
            text: "古城区"
          },
          {
            areaCode: "530721",
            text: "玉龙纳西族自治县"
          },
          {
            areaCode: "530722",
            text: "永胜县"
          },
          {
            areaCode: "530723",
            text: "华坪县"
          },
          {
            areaCode: "530724",
            text: "宁蒗彝族自治县"
          }
        ]
      },
      {
        cityCode: "530800",
        text: "思茅市",
        children: [
          {
            areaCode: "530802",
            text: "思茅区"
          },
          {
            areaCode: "530821",
            text: "宁洱哈尼族彝族自治县"
          },
          {
            areaCode: "530822",
            text: "墨江哈尼族自治县"
          },
          {
            areaCode: "530823",
            text: "景东彝族自治县"
          },
          {
            areaCode: "530824",
            text: "景谷傣族彝族自治县"
          },
          {
            areaCode: "530825",
            text: "镇沅彝族哈尼族拉祜族自治县"
          },
          {
            areaCode: "530826",
            text: "江城哈尼族彝族自治县"
          },
          {
            areaCode: "530827",
            text: "孟连傣族拉祜族佤族自治县"
          },
          {
            areaCode: "530828",
            text: "澜沧拉祜族自治县"
          },
          {
            areaCode: "530829",
            text: "西盟佤族自治县"
          }
        ]
      },
      {
        cityCode: "530900",
        text: "临沧市",
        children: [
          {
            areaCode: "530902",
            text: "临翔区"
          },
          {
            areaCode: "530921",
            text: "凤庆县"
          },
          {
            areaCode: "530922",
            text: "云县"
          },
          {
            areaCode: "530923",
            text: "永德县"
          },
          {
            areaCode: "530924",
            text: "镇康县"
          },
          {
            areaCode: "530925",
            text: "双江拉祜族佤族布朗族傣族自治县"
          },
          {
            areaCode: "530926",
            text: "耿马傣族佤族自治县"
          },
          {
            areaCode: "530927",
            text: "沧源佤族自治县"
          }
        ]
      },
      {
        cityCode: "532300",
        text: "楚雄彝族自治州",
        children: [
          {
            areaCode: "532301",
            text: "楚雄市"
          },
          {
            areaCode: "532322",
            text: "双柏县"
          },
          {
            areaCode: "532323",
            text: "牟定县"
          },
          {
            areaCode: "532324",
            text: "南华县"
          },
          {
            areaCode: "532325",
            text: "姚安县"
          },
          {
            areaCode: "532326",
            text: "大姚县"
          },
          {
            areaCode: "532327",
            text: "永仁县"
          },
          {
            areaCode: "532328",
            text: "元谋县"
          },
          {
            areaCode: "532329",
            text: "武定县"
          },
          {
            areaCode: "532331",
            text: "禄丰县"
          }
        ]
      },
      {
        cityCode: "532500",
        text: "红河哈尼族彝族自治州",
        children: [
          {
            areaCode: "532501",
            text: "个旧市"
          },
          {
            areaCode: "532502",
            text: "开远市"
          },
          {
            areaCode: "532503",
            text: "蒙自市"
          },
          {
            areaCode: "532504",
            text: "弥勒市"
          },
          {
            areaCode: "532523",
            text: "屏边苗族自治县"
          },
          {
            areaCode: "532524",
            text: "建水县"
          },
          {
            areaCode: "532525",
            text: "石屏县"
          },
          {
            areaCode: "532527",
            text: "泸西县"
          },
          {
            areaCode: "532528",
            text: "元阳县"
          },
          {
            areaCode: "532529",
            text: "红河县"
          },
          {
            areaCode: "532530",
            text: "金平苗族瑶族傣族自治县"
          },
          {
            areaCode: "532531",
            text: "绿春县"
          },
          {
            areaCode: "532532",
            text: "河口瑶族自治县"
          }
        ]
      },
      {
        cityCode: "532600",
        text: "文山壮族苗族自治州",
        children: [
          {
            areaCode: "532601",
            text: "文山市"
          },
          {
            areaCode: "532622",
            text: "砚山县"
          },
          {
            areaCode: "532623",
            text: "西畴县"
          },
          {
            areaCode: "532624",
            text: "麻栗坡县"
          },
          {
            areaCode: "532625",
            text: "马关县"
          },
          {
            areaCode: "532626",
            text: "丘北县"
          },
          {
            areaCode: "532627",
            text: "广南县"
          },
          {
            areaCode: "532628",
            text: "富宁县"
          }
        ]
      },
      {
        cityCode: "532800",
        text: "西双版纳傣族自治州",
        children: [
          {
            areaCode: "532801",
            text: "景洪市"
          },
          {
            areaCode: "532822",
            text: "勐海县"
          },
          {
            areaCode: "532823",
            text: "勐腊县"
          }
        ]
      },
      {
        cityCode: "532900",
        text: "大理白族自治州",
        children: [
          {
            areaCode: "532901",
            text: "大理市"
          },
          {
            areaCode: "532922",
            text: "漾濞彝族自治县"
          },
          {
            areaCode: "532923",
            text: "祥云县"
          },
          {
            areaCode: "532924",
            text: "宾川县"
          },
          {
            areaCode: "532925",
            text: "弥渡县"
          },
          {
            areaCode: "532926",
            text: "南涧彝族自治县"
          },
          {
            areaCode: "532927",
            text: "巍山彝族回族自治县"
          },
          {
            areaCode: "532928",
            text: "永平县"
          },
          {
            areaCode: "532929",
            text: "云龙县"
          },
          {
            areaCode: "532930",
            text: "洱源县"
          },
          {
            areaCode: "532931",
            text: "剑川县"
          },
          {
            areaCode: "532932",
            text: "鹤庆县"
          }
        ]
      },
      {
        cityCode: "533100",
        text: "德宏傣族景颇族自治州",
        children: [
          {
            areaCode: "533102",
            text: "瑞丽市"
          },
          {
            areaCode: "533103",
            text: "芒市"
          },
          {
            areaCode: "533122",
            text: "梁河县"
          },
          {
            areaCode: "533123",
            text: "盈江县"
          },
          {
            areaCode: "533124",
            text: "陇川县"
          }
        ]
      },
      {
        cityCode: "533300",
        text: "怒江傈僳族自治州",
        children: [
          {
            areaCode: "533321",
            text: "泸水县"
          },
          {
            areaCode: "533323",
            text: "福贡县"
          },
          {
            areaCode: "533324",
            text: "贡山独龙族怒族自治县"
          },
          {
            areaCode: "533325",
            text: "兰坪白族普米族自治县"
          }
        ]
      },
      {
        cityCode: "533400",
        text: "迪庆藏族自治州",
        children: [
          {
            areaCode: "533421",
            text: "香格里拉县"
          },
          {
            areaCode: "533422",
            text: "德钦县"
          },
          {
            areaCode: "533423",
            text: "维西傈僳族自治县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "540000",
    text: "西藏自治区",
    children: [
      {
        cityCode: "540100",
        text: "拉萨市",
        children: [
          {
            areaCode: "540102",
            text: "城关区"
          },
          {
            areaCode: "540121",
            text: "林周县"
          },
          {
            areaCode: "540122",
            text: "当雄县"
          },
          {
            areaCode: "540123",
            text: "尼木县"
          },
          {
            areaCode: "540124",
            text: "曲水县"
          },
          {
            areaCode: "540125",
            text: "堆龙德庆县"
          },
          {
            areaCode: "540126",
            text: "达孜县"
          },
          {
            areaCode: "540127",
            text: "墨竹工卡县"
          }
        ]
      },
      {
        cityCode: "542100",
        text: "昌都地区",
        children: [
          {
            areaCode: "542121",
            text: "昌都县"
          },
          {
            areaCode: "542122",
            text: "江达县"
          },
          {
            areaCode: "542123",
            text: "贡觉县"
          },
          {
            areaCode: "542124",
            text: "类乌齐县"
          },
          {
            areaCode: "542125",
            text: "丁青县"
          },
          {
            areaCode: "542126",
            text: "察雅县"
          },
          {
            areaCode: "542127",
            text: "八宿县"
          },
          {
            areaCode: "542128",
            text: "左贡县"
          },
          {
            areaCode: "542129",
            text: "芒康县"
          },
          {
            areaCode: "542132",
            text: "洛隆县"
          },
          {
            areaCode: "542133",
            text: "边坝县"
          }
        ]
      },
      {
        cityCode: "542200",
        text: "山南地区",
        children: [
          {
            areaCode: "542221",
            text: "乃东县"
          },
          {
            areaCode: "542222",
            text: "扎囊县"
          },
          {
            areaCode: "542223",
            text: "贡嘎县"
          },
          {
            areaCode: "542224",
            text: "桑日县"
          },
          {
            areaCode: "542225",
            text: "琼结县"
          },
          {
            areaCode: "542226",
            text: "曲松县"
          },
          {
            areaCode: "542227",
            text: "措美县"
          },
          {
            areaCode: "542228",
            text: "洛扎县"
          },
          {
            areaCode: "542229",
            text: "加查县"
          },
          {
            areaCode: "542231",
            text: "隆子县"
          },
          {
            areaCode: "542232",
            text: "错那县"
          },
          {
            areaCode: "542233",
            text: "浪卡子县"
          }
        ]
      },
      {
        cityCode: "542300",
        text: "日喀则地区",
        children: [
          {
            areaCode: "540202",
            text: "桑珠孜区"
          },
          {
            areaCode: "540221",
            text: "南木林县"
          },
          {
            areaCode: "540222",
            text: "江孜县"
          },
          {
            areaCode: "540223",
            text: "定日县"
          },
          {
            areaCode: "540224",
            text: "萨迦县"
          },
          {
            areaCode: "540225",
            text: "拉孜县"
          },
          {
            areaCode: "540226",
            text: "昂仁县"
          },
          {
            areaCode: "540227",
            text: "谢通门县"
          },
          {
            areaCode: "540228",
            text: "白朗县"
          },
          {
            areaCode: "540229",
            text: "仁布县"
          },
          {
            areaCode: "540230",
            text: "康马县"
          },
          {
            areaCode: "540231",
            text: "定结县"
          },
          {
            areaCode: "540232",
            text: "仲巴县"
          },
          {
            areaCode: "540233",
            text: "亚东县"
          },
          {
            areaCode: "540234",
            text: "吉隆县"
          },
          {
            areaCode: "540235",
            text: "聂拉木县"
          },
          {
            areaCode: "540236",
            text: "萨嘎县"
          },
          {
            areaCode: "540237",
            text: "岗巴县"
          },
          {
            areaCode: "542300",
            text: "日喀则地区"
          }
        ]
      },
      {
        cityCode: "542400",
        text: "那曲地区",
        children: [
          {
            areaCode: "542421",
            text: "那曲县"
          },
          {
            areaCode: "542422",
            text: "嘉黎县"
          },
          {
            areaCode: "542423",
            text: "比如县"
          },
          {
            areaCode: "542424",
            text: "聂荣县"
          },
          {
            areaCode: "542425",
            text: "安多县"
          },
          {
            areaCode: "542426",
            text: "申扎县"
          },
          {
            areaCode: "542427",
            text: "索县"
          },
          {
            areaCode: "542428",
            text: "班戈县"
          },
          {
            areaCode: "542429",
            text: "巴青县"
          },
          {
            areaCode: "542430",
            text: "尼玛县"
          },
          {
            areaCode: "542431",
            text: "双湖县"
          }
        ]
      },
      {
        cityCode: "542500",
        text: "阿里地区",
        children: [
          {
            areaCode: "542521",
            text: "普兰县"
          },
          {
            areaCode: "542522",
            text: "札达县"
          },
          {
            areaCode: "542523",
            text: "噶尔县"
          },
          {
            areaCode: "542524",
            text: "日土县"
          },
          {
            areaCode: "542525",
            text: "革吉县"
          },
          {
            areaCode: "542526",
            text: "改则县"
          },
          {
            areaCode: "542527",
            text: "措勤县"
          }
        ]
      },
      {
        cityCode: "542600",
        text: "林芝地区",
        children: [
          {
            areaCode: "542621",
            text: "林芝县"
          },
          {
            areaCode: "542622",
            text: "工布江达县"
          },
          {
            areaCode: "542623",
            text: "米林县"
          },
          {
            areaCode: "542624",
            text: "墨脱县"
          },
          {
            areaCode: "542625",
            text: "波密县"
          },
          {
            areaCode: "542626",
            text: "察隅县"
          },
          {
            areaCode: "542627",
            text: "朗县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "610000",
    text: "陕西省",
    children: [
      {
        cityCode: "610100",
        text: "西安市",
        children: [
          {
            areaCode: "610102",
            text: "新城区"
          },
          {
            areaCode: "610103",
            text: "碑林区"
          },
          {
            areaCode: "610104",
            text: "莲湖区"
          },
          {
            areaCode: "610111",
            text: "灞桥区"
          },
          {
            areaCode: "610112",
            text: "未央区"
          },
          {
            areaCode: "610113",
            text: "雁塔区"
          },
          {
            areaCode: "610114",
            text: "阎良区"
          },
          {
            areaCode: "610115",
            text: "临潼区"
          },
          {
            areaCode: "610116",
            text: "长安区"
          },
          {
            areaCode: "610122",
            text: "蓝田县"
          },
          {
            areaCode: "610124",
            text: "周至县"
          },
          {
            areaCode: "610125",
            text: "户县"
          },
          {
            areaCode: "610126",
            text: "高陵县"
          }
        ]
      },
      {
        cityCode: "610200",
        text: "铜川市",
        children: [
          {
            areaCode: "610202",
            text: "王益区"
          },
          {
            areaCode: "610203",
            text: "印台区"
          },
          {
            areaCode: "610204",
            text: "耀州区"
          },
          {
            areaCode: "610222",
            text: "宜君县"
          }
        ]
      },
      {
        cityCode: "610300",
        text: "宝鸡市",
        children: [
          {
            areaCode: "610302",
            text: "渭滨区"
          },
          {
            areaCode: "610303",
            text: "金台区"
          },
          {
            areaCode: "610304",
            text: "陈仓区"
          },
          {
            areaCode: "610322",
            text: "凤翔县"
          },
          {
            areaCode: "610323",
            text: "岐山县"
          },
          {
            areaCode: "610324",
            text: "扶风县"
          },
          {
            areaCode: "610326",
            text: "眉县"
          },
          {
            areaCode: "610327",
            text: "陇县"
          },
          {
            areaCode: "610328",
            text: "千阳县"
          },
          {
            areaCode: "610329",
            text: "麟游县"
          },
          {
            areaCode: "610330",
            text: "凤县"
          },
          {
            areaCode: "610331",
            text: "太白县"
          }
        ]
      },
      {
        cityCode: "610400",
        text: "咸阳市",
        children: [
          {
            areaCode: "610402",
            text: "秦都区"
          },
          {
            areaCode: "610403",
            text: "杨陵区"
          },
          {
            areaCode: "610404",
            text: "渭城区"
          },
          {
            areaCode: "610422",
            text: "三原县"
          },
          {
            areaCode: "610423",
            text: "泾阳县"
          },
          {
            areaCode: "610424",
            text: "乾县"
          },
          {
            areaCode: "610425",
            text: "礼泉县"
          },
          {
            areaCode: "610426",
            text: "永寿县"
          },
          {
            areaCode: "610427",
            text: "彬县"
          },
          {
            areaCode: "610428",
            text: "长武县"
          },
          {
            areaCode: "610429",
            text: "旬邑县"
          },
          {
            areaCode: "610430",
            text: "淳化县"
          },
          {
            areaCode: "610431",
            text: "武功县"
          },
          {
            areaCode: "610481",
            text: "兴平市"
          }
        ]
      },
      {
        cityCode: "610500",
        text: "渭南市",
        children: [
          {
            areaCode: "610502",
            text: "临渭区"
          },
          {
            areaCode: "610521",
            text: "华县"
          },
          {
            areaCode: "610522",
            text: "潼关县"
          },
          {
            areaCode: "610523",
            text: "大荔县"
          },
          {
            areaCode: "610524",
            text: "合阳县"
          },
          {
            areaCode: "610525",
            text: "澄城县"
          },
          {
            areaCode: "610526",
            text: "蒲城县"
          },
          {
            areaCode: "610527",
            text: "白水县"
          },
          {
            areaCode: "610528",
            text: "富平县"
          },
          {
            areaCode: "610581",
            text: "韩城市"
          },
          {
            areaCode: "610582",
            text: "华阴市"
          }
        ]
      },
      {
        cityCode: "610600",
        text: "延安市",
        children: [
          {
            areaCode: "610602",
            text: "宝塔区"
          },
          {
            areaCode: "610621",
            text: "延长县"
          },
          {
            areaCode: "610622",
            text: "延川县"
          },
          {
            areaCode: "610623",
            text: "子长县"
          },
          {
            areaCode: "610624",
            text: "安塞县"
          },
          {
            areaCode: "610625",
            text: "志丹县"
          },
          {
            areaCode: "610626",
            text: "吴起县"
          },
          {
            areaCode: "610627",
            text: "甘泉县"
          },
          {
            areaCode: "610628",
            text: "富县"
          },
          {
            areaCode: "610629",
            text: "洛川县"
          },
          {
            areaCode: "610630",
            text: "宜川县"
          },
          {
            areaCode: "610631",
            text: "黄龙县"
          },
          {
            areaCode: "610632",
            text: "黄陵县"
          }
        ]
      },
      {
        cityCode: "610700",
        text: "汉中市",
        children: [
          {
            areaCode: "610702",
            text: "汉台区"
          },
          {
            areaCode: "610721",
            text: "南郑县"
          },
          {
            areaCode: "610722",
            text: "城固县"
          },
          {
            areaCode: "610723",
            text: "洋县"
          },
          {
            areaCode: "610724",
            text: "西乡县"
          },
          {
            areaCode: "610725",
            text: "勉县"
          },
          {
            areaCode: "610726",
            text: "宁强县"
          },
          {
            areaCode: "610727",
            text: "略阳县"
          },
          {
            areaCode: "610728",
            text: "镇巴县"
          },
          {
            areaCode: "610729",
            text: "留坝县"
          },
          {
            areaCode: "610730",
            text: "佛坪县"
          }
        ]
      },
      {
        cityCode: "610800",
        text: "榆林市",
        children: [
          {
            areaCode: "610802",
            text: "榆阳区"
          },
          {
            areaCode: "610821",
            text: "神木县"
          },
          {
            areaCode: "610822",
            text: "府谷县"
          },
          {
            areaCode: "610823",
            text: "横山县"
          },
          {
            areaCode: "610824",
            text: "靖边县"
          },
          {
            areaCode: "610825",
            text: "定边县"
          },
          {
            areaCode: "610826",
            text: "绥德县"
          },
          {
            areaCode: "610827",
            text: "米脂县"
          },
          {
            areaCode: "610828",
            text: "佳县"
          },
          {
            areaCode: "610829",
            text: "吴堡县"
          },
          {
            areaCode: "610830",
            text: "清涧县"
          },
          {
            areaCode: "610831",
            text: "子洲县"
          }
        ]
      },
      {
        cityCode: "610900",
        text: "安康市",
        children: [
          {
            areaCode: "610902",
            text: "汉滨区"
          },
          {
            areaCode: "610921",
            text: "汉阴县"
          },
          {
            areaCode: "610922",
            text: "石泉县"
          },
          {
            areaCode: "610923",
            text: "宁陕县"
          },
          {
            areaCode: "610924",
            text: "紫阳县"
          },
          {
            areaCode: "610925",
            text: "岚皋县"
          },
          {
            areaCode: "610926",
            text: "平利县"
          },
          {
            areaCode: "610927",
            text: "镇坪县"
          },
          {
            areaCode: "610928",
            text: "旬阳县"
          },
          {
            areaCode: "610929",
            text: "白河县"
          }
        ]
      },
      {
        cityCode: "611000",
        text: "商洛市",
        children: [
          {
            areaCode: "611002",
            text: "商州区"
          },
          {
            areaCode: "611021",
            text: "洛南县"
          },
          {
            areaCode: "611022",
            text: "丹凤县"
          },
          {
            areaCode: "611023",
            text: "商南县"
          },
          {
            areaCode: "611024",
            text: "山阳县"
          },
          {
            areaCode: "611025",
            text: "镇安县"
          },
          {
            areaCode: "611026",
            text: "柞水县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "620000",
    text: "甘肃省",
    children: [
      {
        cityCode: "620100",
        text: "兰州市",
        children: [
          {
            areaCode: "620102",
            text: "城关区"
          },
          {
            areaCode: "620103",
            text: "七里河区"
          },
          {
            areaCode: "620104",
            text: "西固区"
          },
          {
            areaCode: "620105",
            text: "安宁区"
          },
          {
            areaCode: "620111",
            text: "红古区"
          },
          {
            areaCode: "620121",
            text: "永登县"
          },
          {
            areaCode: "620122",
            text: "皋兰县"
          },
          {
            areaCode: "620123",
            text: "榆中县"
          }
        ]
      },
      {
        cityCode: "620200",
        text: "嘉峪关市",
        children: [
          {
            areaCode: "620201",
            text: "嘉峪关市辖区"
          }
        ]
      },
      {
        cityCode: "620300",
        text: "金昌市",
        children: [
          {
            areaCode: "620302",
            text: "金川区"
          },
          {
            areaCode: "620321",
            text: "永昌县"
          }
        ]
      },
      {
        cityCode: "620400",
        text: "白银市",
        children: [
          {
            areaCode: "620402",
            text: "白银区"
          },
          {
            areaCode: "620403",
            text: "平川区"
          },
          {
            areaCode: "620421",
            text: "靖远县"
          },
          {
            areaCode: "620422",
            text: "会宁县"
          },
          {
            areaCode: "620423",
            text: "景泰县"
          }
        ]
      },
      {
        cityCode: "620500",
        text: "天水市",
        children: [
          {
            areaCode: "620502",
            text: "秦州区"
          },
          {
            areaCode: "620503",
            text: "麦积区"
          },
          {
            areaCode: "620521",
            text: "清水县"
          },
          {
            areaCode: "620522",
            text: "秦安县"
          },
          {
            areaCode: "620523",
            text: "甘谷县"
          },
          {
            areaCode: "620524",
            text: "武山县"
          },
          {
            areaCode: "620525",
            text: "张家川回族自治县"
          }
        ]
      },
      {
        cityCode: "620600",
        text: "武威市",
        children: [
          {
            areaCode: "620602",
            text: "凉州区"
          },
          {
            areaCode: "620621",
            text: "民勤县"
          },
          {
            areaCode: "620622",
            text: "古浪县"
          },
          {
            areaCode: "620623",
            text: "天祝藏族自治县"
          }
        ]
      },
      {
        cityCode: "620700",
        text: "张掖市",
        children: [
          {
            areaCode: "620702",
            text: "甘州区"
          },
          {
            areaCode: "620721",
            text: "肃南裕固族自治县"
          },
          {
            areaCode: "620722",
            text: "民乐县"
          },
          {
            areaCode: "620723",
            text: "临泽县"
          },
          {
            areaCode: "620724",
            text: "高台县"
          },
          {
            areaCode: "620725",
            text: "山丹县"
          }
        ]
      },
      {
        cityCode: "620800",
        text: "平凉市",
        children: [
          {
            areaCode: "620802",
            text: "崆峒区"
          },
          {
            areaCode: "620821",
            text: "泾川县"
          },
          {
            areaCode: "620822",
            text: "灵台县"
          },
          {
            areaCode: "620823",
            text: "崇信县"
          },
          {
            areaCode: "620824",
            text: "华亭县"
          },
          {
            areaCode: "620825",
            text: "庄浪县"
          },
          {
            areaCode: "620826",
            text: "静宁县"
          }
        ]
      },
      {
        cityCode: "620900",
        text: "酒泉市",
        children: [
          {
            areaCode: "620902",
            text: "肃州区"
          },
          {
            areaCode: "620921",
            text: "金塔县"
          },
          {
            areaCode: "620922",
            text: "瓜州县"
          },
          {
            areaCode: "620923",
            text: "肃北蒙古族自治县"
          },
          {
            areaCode: "620924",
            text: "阿克塞哈萨克族自治县"
          },
          {
            areaCode: "620981",
            text: "玉门市"
          },
          {
            areaCode: "620982",
            text: "敦煌市"
          }
        ]
      },
      {
        cityCode: "621000",
        text: "庆阳市",
        children: [
          {
            areaCode: "621002",
            text: "西峰区"
          },
          {
            areaCode: "621021",
            text: "庆城县"
          },
          {
            areaCode: "621022",
            text: "环县"
          },
          {
            areaCode: "621023",
            text: "华池县"
          },
          {
            areaCode: "621024",
            text: "合水县"
          },
          {
            areaCode: "621025",
            text: "正宁县"
          },
          {
            areaCode: "621026",
            text: "宁县"
          },
          {
            areaCode: "621027",
            text: "镇原县"
          }
        ]
      },
      {
        cityCode: "621100",
        text: "定西市",
        children: [
          {
            areaCode: "621102",
            text: "安定区"
          },
          {
            areaCode: "621121",
            text: "通渭县"
          },
          {
            areaCode: "621122",
            text: "陇西县"
          },
          {
            areaCode: "621123",
            text: "渭源县"
          },
          {
            areaCode: "621124",
            text: "临洮县"
          },
          {
            areaCode: "621125",
            text: "漳县"
          },
          {
            areaCode: "621126",
            text: "岷县"
          }
        ]
      },
      {
        cityCode: "621200",
        text: "陇南市",
        children: [
          {
            areaCode: "621202",
            text: "武都区"
          },
          {
            areaCode: "621221",
            text: "成县"
          },
          {
            areaCode: "621222",
            text: "文县"
          },
          {
            areaCode: "621223",
            text: "宕昌县"
          },
          {
            areaCode: "621224",
            text: "康县"
          },
          {
            areaCode: "621225",
            text: "西和县"
          },
          {
            areaCode: "621226",
            text: "礼县"
          },
          {
            areaCode: "621227",
            text: "徽县"
          },
          {
            areaCode: "621228",
            text: "两当县"
          }
        ]
      },
      {
        cityCode: "622900",
        text: "临夏回族自治州",
        children: [
          {
            areaCode: "622901",
            text: "临夏市"
          },
          {
            areaCode: "622921",
            text: "临夏县"
          },
          {
            areaCode: "622922",
            text: "康乐县"
          },
          {
            areaCode: "622923",
            text: "永靖县"
          },
          {
            areaCode: "622924",
            text: "广河县"
          },
          {
            areaCode: "622925",
            text: "和政县"
          },
          {
            areaCode: "622926",
            text: "东乡族自治县"
          },
          {
            areaCode: "622927",
            text: "积石山保安族东乡族撒拉族自治县"
          }
        ]
      },
      {
        cityCode: "623000",
        text: "甘南藏族自治州",
        children: [
          {
            areaCode: "623001",
            text: "合作市"
          },
          {
            areaCode: "623021",
            text: "临潭县"
          },
          {
            areaCode: "623022",
            text: "卓尼县"
          },
          {
            areaCode: "623023",
            text: "舟曲县"
          },
          {
            areaCode: "623024",
            text: "迭部县"
          },
          {
            areaCode: "623025",
            text: "玛曲县"
          },
          {
            areaCode: "623026",
            text: "碌曲县"
          },
          {
            areaCode: "623027",
            text: "夏河县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "630000",
    text: "青海省",
    children: [
      {
        cityCode: "630100",
        text: "西宁市",
        children: [
          {
            areaCode: "630102",
            text: "城东区"
          },
          {
            areaCode: "630103",
            text: "城中区"
          },
          {
            areaCode: "630104",
            text: "城西区"
          },
          {
            areaCode: "630105",
            text: "城北区"
          },
          {
            areaCode: "630121",
            text: "大通回族土族自治县"
          },
          {
            areaCode: "630122",
            text: "湟中县"
          },
          {
            areaCode: "630123",
            text: "湟源县"
          }
        ]
      },
      {
        cityCode: "632100",
        text: "海东地区",
        children: [
          {
            areaCode: "632100",
            text: "海东地区"
          },
          {
            areaCode: "632121",
            text: "平安县"
          },
          {
            areaCode: "632122",
            text: "民和回族土族自治县"
          },
          {
            areaCode: "632123",
            text: "乐都县"
          },
          {
            areaCode: "632126",
            text: "互助土族自治县"
          },
          {
            areaCode: "632127",
            text: "化隆回族自治县"
          },
          {
            areaCode: "632128",
            text: "循化撒拉族自治县"
          }
        ]
      },
      {
        cityCode: "632200",
        text: "海北藏族自治州",
        children: [
          {
            areaCode: "632221",
            text: "门源回族自治县"
          },
          {
            areaCode: "632222",
            text: "祁连县"
          },
          {
            areaCode: "632223",
            text: "海晏县"
          },
          {
            areaCode: "632224",
            text: "刚察县"
          }
        ]
      },
      {
        cityCode: "632300",
        text: "黄南藏族自治州",
        children: [
          {
            areaCode: "632321",
            text: "同仁县"
          },
          {
            areaCode: "632322",
            text: "尖扎县"
          },
          {
            areaCode: "632323",
            text: "泽库县"
          },
          {
            areaCode: "632324",
            text: "河南蒙古族自治县"
          }
        ]
      },
      {
        cityCode: "632500",
        text: "海南藏族自治州",
        children: [
          {
            areaCode: "632521",
            text: "共和县"
          },
          {
            areaCode: "632522",
            text: "同德县"
          },
          {
            areaCode: "632523",
            text: "贵德县"
          },
          {
            areaCode: "632524",
            text: "兴海县"
          },
          {
            areaCode: "632525",
            text: "贵南县"
          }
        ]
      },
      {
        cityCode: "632600",
        text: "果洛藏族自治州",
        children: [
          {
            areaCode: "632621",
            text: "玛沁县"
          },
          {
            areaCode: "632622",
            text: "班玛县"
          },
          {
            areaCode: "632623",
            text: "甘德县"
          },
          {
            areaCode: "632624",
            text: "达日县"
          },
          {
            areaCode: "632625",
            text: "久治县"
          },
          {
            areaCode: "632626",
            text: "玛多县"
          }
        ]
      },
      {
        cityCode: "632700",
        text: "玉树藏族自治州",
        children: [
          {
            areaCode: "632701",
            text: "玉树市"
          },
          {
            areaCode: "632722",
            text: "杂多县"
          },
          {
            areaCode: "632723",
            text: "称多县"
          },
          {
            areaCode: "632724",
            text: "治多县"
          },
          {
            areaCode: "632725",
            text: "囊谦县"
          },
          {
            areaCode: "632726",
            text: "曲麻莱县"
          }
        ]
      },
      {
        cityCode: "632800",
        text: "海西蒙古族藏族自治州",
        children: [
          {
            areaCode: "632801",
            text: "格尔木市"
          },
          {
            areaCode: "632802",
            text: "德令哈市"
          },
          {
            areaCode: "632821",
            text: "乌兰县"
          },
          {
            areaCode: "632822",
            text: "都兰县"
          },
          {
            areaCode: "632823",
            text: "天峻县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "640000",
    text: "宁夏回族自治区",
    children: [
      {
        cityCode: "640100",
        text: "银川市",
        children: [
          {
            areaCode: "640104",
            text: "兴庆区"
          },
          {
            areaCode: "640105",
            text: "西夏区"
          },
          {
            areaCode: "640106",
            text: "金凤区"
          },
          {
            areaCode: "640121",
            text: "永宁县"
          },
          {
            areaCode: "640122",
            text: "贺兰县"
          },
          {
            areaCode: "640181",
            text: "灵武市"
          }
        ]
      },
      {
        cityCode: "640200",
        text: "石嘴山市",
        children: [
          {
            areaCode: "640202",
            text: "大武口区"
          },
          {
            areaCode: "640205",
            text: "惠农区"
          },
          {
            areaCode: "640221",
            text: "平罗县"
          }
        ]
      },
      {
        cityCode: "640300",
        text: "吴忠市",
        children: [
          {
            areaCode: "640302",
            text: "利通区"
          },
          {
            areaCode: "640303",
            text: "红寺堡区"
          },
          {
            areaCode: "640323",
            text: "盐池县"
          },
          {
            areaCode: "640324",
            text: "同心县"
          },
          {
            areaCode: "640381",
            text: "青铜峡市"
          }
        ]
      },
      {
        cityCode: "640400",
        text: "固原市",
        children: [
          {
            areaCode: "640402",
            text: "原州区"
          },
          {
            areaCode: "640422",
            text: "西吉县"
          },
          {
            areaCode: "640423",
            text: "隆德县"
          },
          {
            areaCode: "640424",
            text: "泾源县"
          },
          {
            areaCode: "640425",
            text: "彭阳县"
          }
        ]
      },
      {
        cityCode: "640500",
        text: "中卫市",
        children: [
          {
            areaCode: "640502",
            text: "沙坡头区"
          },
          {
            areaCode: "640521",
            text: "中宁县"
          },
          {
            areaCode: "640522",
            text: "海原县"
          }
        ]
      }
    ]
  },
  {
    provinceCode: "650000",
    text: "新疆维吾尔自治区",
    children: [
      {
        cityCode: "650100",
        text: "乌鲁木齐市",
        children: [
          {
            areaCode: "650102",
            text: "天山区"
          },
          {
            areaCode: "650103",
            text: "沙依巴克区"
          },
          {
            areaCode: "650104",
            text: "新市区"
          },
          {
            areaCode: "650105",
            text: "水磨沟区"
          },
          {
            areaCode: "650106",
            text: "头屯河区"
          },
          {
            areaCode: "650107",
            text: "达坂城区"
          },
          {
            areaCode: "650109",
            text: "米东区"
          },
          {
            areaCode: "650121",
            text: "乌鲁木齐县"
          }
        ]
      },
      {
        cityCode: "650200",
        text: "克拉玛依市",
        children: [
          {
            areaCode: "650202",
            text: "独山子区"
          },
          {
            areaCode: "650203",
            text: "克拉玛依区"
          },
          {
            areaCode: "650204",
            text: "白碱滩区"
          },
          {
            areaCode: "650205",
            text: "乌尔禾区"
          }
        ]
      },
      {
        cityCode: "652100",
        text: "吐鲁番地区",
        children: [
          {
            areaCode: "652101",
            text: "吐鲁番市"
          },
          {
            areaCode: "652122",
            text: "鄯善县"
          },
          {
            areaCode: "652123",
            text: "托克逊县"
          }
        ]
      },
      {
        cityCode: "652200",
        text: "哈密地区",
        children: [
          {
            areaCode: "652201",
            text: "哈密市"
          },
          {
            areaCode: "652222",
            text: "巴里坤哈萨克自治县"
          },
          {
            areaCode: "652223",
            text: "伊吾县"
          }
        ]
      },
      {
        cityCode: "652300",
        text: "昌吉回族自治州",
        children: [
          {
            areaCode: "652301",
            text: "昌吉市"
          },
          {
            areaCode: "652302",
            text: "阜康市"
          },
          {
            areaCode: "652323",
            text: "呼图壁县"
          },
          {
            areaCode: "652324",
            text: "玛纳斯县"
          },
          {
            areaCode: "652325",
            text: "奇台县"
          },
          {
            areaCode: "652327",
            text: "吉木萨尔县"
          },
          {
            areaCode: "652328",
            text: "木垒哈萨克自治县"
          }
        ]
      },
      {
        cityCode: "652700",
        text: "博尔塔拉蒙古自治州",
        children: [
          {
            areaCode: "652701",
            text: "博乐市"
          },
          {
            areaCode: "652702",
            text: "阿拉山口市"
          },
          {
            areaCode: "652722",
            text: "精河县"
          },
          {
            areaCode: "652723",
            text: "温泉县"
          }
        ]
      },
      {
        cityCode: "652800",
        text: "巴音郭楞蒙古自治州",
        children: [
          {
            areaCode: "652801",
            text: "库尔勒市"
          },
          {
            areaCode: "652822",
            text: "轮台县"
          },
          {
            areaCode: "652823",
            text: "尉犁县"
          },
          {
            areaCode: "652824",
            text: "若羌县"
          },
          {
            areaCode: "652825",
            text: "且末县"
          },
          {
            areaCode: "652826",
            text: "焉耆回族自治县"
          },
          {
            areaCode: "652827",
            text: "和静县"
          },
          {
            areaCode: "652828",
            text: "和硕县"
          },
          {
            areaCode: "652829",
            text: "博湖县"
          }
        ]
      },
      {
        cityCode: "652900",
        text: "阿克苏地区",
        children: [
          {
            areaCode: "652901",
            text: "阿克苏市"
          },
          {
            areaCode: "652922",
            text: "温宿县"
          },
          {
            areaCode: "652923",
            text: "库车县"
          },
          {
            areaCode: "652924",
            text: "沙雅县"
          },
          {
            areaCode: "652925",
            text: "新和县"
          },
          {
            areaCode: "652926",
            text: "拜城县"
          },
          {
            areaCode: "652927",
            text: "乌什县"
          },
          {
            areaCode: "652928",
            text: "阿瓦提县"
          },
          {
            areaCode: "652929",
            text: "柯坪县"
          }
        ]
      },
      {
        cityCode: "653000",
        text: "克孜勒苏柯尔克孜自治州",
        children: [
          {
            areaCode: "653001",
            text: "阿图什市"
          },
          {
            areaCode: "653022",
            text: "阿克陶县"
          },
          {
            areaCode: "653023",
            text: "阿合奇县"
          },
          {
            areaCode: "653024",
            text: "乌恰县"
          }
        ]
      },
      {
        cityCode: "653100",
        text: "喀什地区",
        children: [
          {
            areaCode: "653101",
            text: "喀什市"
          },
          {
            areaCode: "653121",
            text: "疏附县"
          },
          {
            areaCode: "653122",
            text: "疏勒县"
          },
          {
            areaCode: "653123",
            text: "英吉沙县"
          },
          {
            areaCode: "653124",
            text: "泽普县"
          },
          {
            areaCode: "653125",
            text: "莎车县"
          },
          {
            areaCode: "653126",
            text: "叶城县"
          },
          {
            areaCode: "653127",
            text: "麦盖提县"
          },
          {
            areaCode: "653128",
            text: "岳普湖县"
          },
          {
            areaCode: "653129",
            text: "伽师县"
          },
          {
            areaCode: "653130",
            text: "巴楚县"
          },
          {
            areaCode: "653131",
            text: "塔什库尔干塔吉克自治县"
          }
        ]
      },
      {
        cityCode: "653200",
        text: "和田地区",
        children: [
          {
            areaCode: "653201",
            text: "和田市"
          },
          {
            areaCode: "653221",
            text: "和田县"
          },
          {
            areaCode: "653222",
            text: "墨玉县"
          },
          {
            areaCode: "653223",
            text: "皮山县"
          },
          {
            areaCode: "653224",
            text: "洛浦县"
          },
          {
            areaCode: "653225",
            text: "策勒县"
          },
          {
            areaCode: "653226",
            text: "于田县"
          },
          {
            areaCode: "653227",
            text: "民丰县"
          }
        ]
      },
      {
        cityCode: "654000",
        text: "伊犁哈萨克自治州",
        children: [
          {
            areaCode: "654002",
            text: "伊宁市"
          },
          {
            areaCode: "654003",
            text: "奎屯市"
          },
          {
            areaCode: "654021",
            text: "伊宁县"
          },
          {
            areaCode: "654022",
            text: "察布查尔锡伯自治县"
          },
          {
            areaCode: "654023",
            text: "霍城县"
          },
          {
            areaCode: "654024",
            text: "巩留县"
          },
          {
            areaCode: "654025",
            text: "新源县"
          },
          {
            areaCode: "654026",
            text: "昭苏县"
          },
          {
            areaCode: "654027",
            text: "特克斯县"
          },
          {
            areaCode: "654028",
            text: "尼勒克县"
          }
        ]
      },
      {
        cityCode: "654200",
        text: "塔城地区",
        children: [
          {
            areaCode: "654201",
            text: "塔城市"
          },
          {
            areaCode: "654202",
            text: "乌苏市"
          },
          {
            areaCode: "654221",
            text: "额敏县"
          },
          {
            areaCode: "654223",
            text: "沙湾县"
          },
          {
            areaCode: "654224",
            text: "托里县"
          },
          {
            areaCode: "654225",
            text: "裕民县"
          },
          {
            areaCode: "654226",
            text: "和布克赛尔蒙古自治县"
          }
        ]
      },
      {
        cityCode: "654300",
        text: "阿勒泰地区",
        children: [
          {
            areaCode: "654301",
            text: "阿勒泰市"
          },
          {
            areaCode: "654321",
            text: "布尔津县"
          },
          {
            areaCode: "654322",
            text: "富蕴县"
          },
          {
            areaCode: "654323",
            text: "福海县"
          },
          {
            areaCode: "654324",
            text: "哈巴河县"
          },
          {
            areaCode: "654325",
            text: "青河县"
          },
          {
            areaCode: "654326",
            text: "吉木乃县"
          }
        ]
      },
      {
        cityCode: "659000",
        text: "省直辖行政单位",
        children: [
          {
            areaCode: "659001",
            text: "石河子市"
          },
          {
            areaCode: "659002",
            text: "阿拉尔市"
          },
          {
            areaCode: "659003",
            text: "图木舒克市"
          }
        ]
      }
    ]
  }
  // {
  //     "provinceCode": "710000",
  //     "text": "台湾省",
  //     "children": []
  // },
  // {
  //     "provinceCode": "810000",
  //     "text": "香港特别行政区",
  //     "children": []
  // },
  // {
  //     "provinceCode": "820000",
  //     "text": "澳门特别行政区",
  //     "children": []
  // }
];

export default placesMap;
