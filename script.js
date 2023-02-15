(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.playAudioList([this.audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
  "this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
  "this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "borderSize": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DBED02C_5662_0D2D_41CA_21D5A1866879",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -150.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4AC1410E_5662_0CED_41D5_298D53DB38AC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -50.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C46AF97_5662_13FA_41D1_8B863B156AD3",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_t.jpg",
 "label": "ELEVATOR_CORE_3.PNG",
 "id": "panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
   "backwardYaw": -88.33,
   "yaw": -98.99,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
   "backwardYaw": 0.64,
   "yaw": -10.63,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "backwardYaw": 38.51,
   "yaw": 88,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5BBC71A4_5469_2024_41D0_EA3CC4D3F976",
  "this.overlay_44E27EE1_5476_E05C_41BB_768C41F96A0D",
  "this.overlay_45220375_5477_E024_41CE_392863C2B851",
  "this.overlay_46A728B1_569E_3D36_41BA_566C0859A93F",
  "this.overlay_46C4A3DA_569E_136A_41D1_065D3A6BA421",
  "this.overlay_46B120D9_56A2_0D77_41CB_D310DBBF4F86"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_t.jpg",
 "label": "COWORKING_SPACE_2 .PNG",
 "id": "panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "backwardYaw": -141.15,
   "yaw": 0.73,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "backwardYaw": -14.32,
   "yaw": 162.92,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_77B693DC_54CA_FFC9_41D2_FE18B976347F",
  "this.overlay_725C74E8_54C7_59C9_41C7_DAF0417A40BF",
  "this.overlay_193D29C7_55D9_A838_4192_111551E7E5E4",
  "this.overlay_4E8F1FE2_56A6_135A_41C7_E2531731FF30"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_t.jpg",
 "label": "ELEVATOR_CORE_2.PNG",
 "id": "panorama_5E568337_5419_2024_41D2_A30D47360735",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "backwardYaw": 98.98,
   "yaw": -47.48,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "backwardYaw": -103.25,
   "yaw": -145.57,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "backwardYaw": -103.25,
   "yaw": 164.17,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "backwardYaw": 88,
   "yaw": 38.51,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_47F24588_5479_20EC_41A2_241E3413310F",
  "this.overlay_406F33B8_5479_602C_41C4_666876E935A8",
  "this.overlay_4F9C4BC0_54FB_A839_416B_BB4C58AB91E0",
  "this.overlay_15FC46CD_5546_B9C8_41D3_8333B33B3335",
  "this.overlay_1C6F92C3_55F9_B83F_4151_4710606F99F1",
  "this.overlay_47997AAE_56A6_7D2A_41C7_60C1A5A7F88F",
  "this.overlay_46B18605_56A1_F4DE_41CC_E595C2D6AE66"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -103.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C5ECF8D_5662_13EE_41C0_83199951E52D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 110.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4ABDB132_5662_0F3A_419F_90EAB34CD153",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E543699_541B_20EC_41C0_1B21584E5F82_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C6BFF6B_5662_132A_41D2_7E1BE2F81FCC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A3731C9_5662_0F56_41D3_127C70BAAE09",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48BB1DF4_5662_173E_419A_0F28871823FE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_t.jpg",
 "label": "D5_Panorama 9_20230214_174235",
 "id": "panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
   "backwardYaw": 15.8,
   "yaw": 131.89,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E",
   "backwardYaw": 156.76,
   "yaw": 118.2,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
   "backwardYaw": 162.92,
   "yaw": -2.14,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6C40399D_5549_684B_41B6_F5E704C8B67B",
  "this.overlay_6FFC66F0_5549_D9D9_41A1_E174845AE772",
  "this.overlay_1F3AFC65_55CA_A8FB_41B3_363934EE7DFF",
  "this.overlay_1F537CCE_5539_A9C9_41B5_89312B6A793D",
  "this.overlay_1F215C28_5539_E849_41CF_0DB6283B0E19",
  "this.overlay_19E582B2_553A_B859_41D0_C8A22B357B6B"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 34.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A6BA18E_5662_0FEA_41D3_64D3B01A7DE2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D746061_5662_0D57_41BE_5B8590683E73",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 48.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C3A9FAB_5662_132A_41B0_7273A041E606",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_t.jpg",
 "label": "CHILD_CARE 1 .PNG",
 "id": "panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "backwardYaw": 129.25,
   "yaw": -71.22,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
   "backwardYaw": 11.81,
   "yaw": 158.27,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "backwardYaw": -131.39,
   "yaw": -123.85,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_75A4A9A7_54CB_6878_4199_4B8B50B7C036",
  "this.overlay_4B64AA8C_54C9_A849_41C9_F5E2314F8F2E",
  "this.overlay_10A75D88_55D9_6849_41B2_3202E464A850",
  "this.overlay_19880BA5_55DF_687B_41C7_D99E445612D4",
  "this.overlay_1F65259F_55DF_5848_41C4_AD0ABB1620F3",
  "this.overlay_1F9709D9_55DE_ABCB_41CC_D894D02E235B"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_t.jpg",
 "label": "PASSAGE_3 .PNG",
 "id": "panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "backwardYaw": 134.48,
   "yaw": 115.31,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE"
  },
  {
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "backwardYaw": 91.19,
   "yaw": -20.73,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7C9F79CC_553F_ABC8_41C1_D0A22584B538",
  "this.overlay_7F2C82F6_553E_F9D9_41BB_AB137EF44F19",
  "this.overlay_7C98D047_553E_B8C7_41D3_1F27A396CC22",
  "this.overlay_194A1B8B_55C9_A848_41D0_6AC1ED01C5DA",
  "this.overlay_4EAC74C4_56A2_155E_41D1_0698C1C6F9CA",
  "this.overlay_41130E63_56A2_155A_41B5_F2B3AF7AD1FD"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58875CB9_541A_E02C_41D3_73B63887517E_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_t.jpg",
 "label": "FUNCTION_1_2 .PNG",
 "id": "panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35"
  },
  {
   "panorama": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
   "backwardYaw": 2.09,
   "yaw": 161.66,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_457D5F1B_54C9_A84F_41D0_CC70DEB20A1A",
  "this.overlay_453E03C5_54C9_F838_41C7_1644F591CCA4",
  "this.overlay_46F3CF35_54C9_A85B_41C7_26CF4ED55518",
  "this.overlay_4EFBAFEC_56E2_132E_4198_76638DAE65B7",
  "this.overlay_4ED7BB59_56E2_1376_41C7_704F5B762DC8",
  "this.overlay_4EADD036_5662_0D3A_41CC_0B20C5D43A7C"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -45.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D3FC09B_5662_0DEA_4187_73A6D518A2C2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -160.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DE6CFF8_5662_1335_41C2_351B8F64528F",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_t.jpg",
 "label": "FUNCTION_2_1 .PNG",
 "id": "panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "backwardYaw": -80.89,
   "yaw": 23.92,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4753D893_54DB_A85F_41D2_3081185CAB5D",
  "this.overlay_4737DB44_54DB_6839_41C8_3C74B4AC10A6",
  "this.overlay_4E8FAC8D_569E_75EE_41C2_77B339CA0032",
  "this.overlay_4F86FEB5_569E_353E_41B7_CBDD7C47FAB9"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_t.jpg",
 "label": "MALE_TOILET_1 .PNG",
 "id": "panorama_5E4972F0_541B_603C_41D1_9087F06C38E5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6466A378_554E_D8C9_41D4_A355E112BEAB",
  "this.overlay_4FBBACBA_56AE_152A_41CB_02D62EBE82F9"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 164.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48A67E00_5662_14D6_41A3_9034C5F55F28",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_t.jpg",
 "label": "RECEPTION_LOBBY_2 .PNG",
 "id": "panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E"
  },
  {
   "panorama": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "backwardYaw": 48.74,
   "yaw": -84.03,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "backwardYaw": -47.48,
   "yaw": 98.98,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "backwardYaw": -47.48,
   "yaw": 103.25,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_45EA15F1_5476_E03D_41CC_908CDE0031C6",
  "this.overlay_46DD3214_5469_23E4_41C7_22C86B4BC606",
  "this.overlay_475E7325_5469_2024_41C7_476010387DB4",
  "this.overlay_4F65F3AC_54FB_5849_41D4_59BF15BBFDFE",
  "this.overlay_15749879_5547_68CB_41AD_4B56C68A0807",
  "this.overlay_19F47A7E_55FA_A8C8_41D2_8A254FEBF3D2",
  "this.overlay_1FDDE67A_55FB_78C9_41B5_F17B15C72482",
  "this.overlay_44E28913_56A2_1CFA_41C4_B591FFEF745E",
  "this.overlay_41EE1C72_56E2_353A_41CB_9EBEB5FD86AA"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A5591A4_5662_0FDE_41C6_1698706FA4E3",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C6D2F77_5662_133A_41B8_AD04F585282A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_t.jpg",
 "label": "PASSAGE_2 .PNG",
 "id": "panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
   "backwardYaw": -20.73,
   "yaw": 91.19,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "backwardYaw": 150.86,
   "yaw": -136.54,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
   "backwardYaw": -131.77,
   "yaw": -86.04,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
   "backwardYaw": -105.26,
   "yaw": -0.75,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7FEDEB8B_553A_A84F_41C8_93858504AE00",
  "this.overlay_7E5E404C_553A_D8C9_4187_542156C4E048",
  "this.overlay_7E7FB4C5_553A_F83B_41BA_2CC7EBEF2904",
  "this.overlay_7E9C18BE_553A_A848_41B0_4C65860424C2",
  "this.overlay_1F445E41_55CE_A838_41C0_F4B1723225FF",
  "this.overlay_1BB80AAA_55CF_E849_41D4_D7CA65DFA269",
  "this.overlay_4ED1FD45_56A2_375E_41CA_151BCAE8B7F2",
  "this.overlay_415CE127_56A2_0CDB_41C6_ECCD9070E214"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48F38DAE_5662_172A_41CD_59B1C4E7EE21",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 32.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B99FCFA_5662_152A_41B7_F866B4CCFF51",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C2E1FC2_5662_1355_41CE_018A5B3D7674",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_5E568337_5419_2024_41D2_A30D47360735_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E55FC6B_5419_202C_41B6_215937597045",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_5E55FC6B_5419_202C_41B6_215937597045_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E4972F0_541B_603C_41D1_9087F06C38E5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5E56643F_5419_6024_41AB_F20D58121F15",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 0)",
   "camera": "this.panorama_5E56643F_5419_6024_41AB_F20D58121F15_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 15.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C1ACFCC_5662_136D_41D2_076C7420C5AA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_588580AA_541A_E02C_4144_D3F282922A1E_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A45C1B4_5662_0F3E_41CF_481E806704A1",
 "class": "PanoramaCamera"
},
{
 "data": {
  "label": "_Non_Copyrighted_Music_LAKEY_INSPIRED_Chill_Day_Hip_Hop_23IiqeIw38w_140"
 },
 "audio": {
  "mp3Url": "media/audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91.ogg"
 },
 "autoplay": true,
 "id": "audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91",
 "class": "MediaAudio"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_t.jpg",
 "label": "FUNCTION_2_2 .PNG",
 "id": "panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420",
   "backwardYaw": -69.21,
   "yaw": 19.72,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104",
   "backwardYaw": 23.92,
   "yaw": -80.89,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4020EE3A_54D9_A848_41D2_8D756664A2FE",
  "this.overlay_40E83D59_54DF_E8C8_41CD_0DDADA9DE190",
  "this.overlay_400A9638_569E_1536_41CF_BE76CAB5FF95",
  "this.overlay_41A5A51F_569E_74EA_41C7_3C2F0DC728DE"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B001DA4_5662_17DE_41CF_E493542F0C91",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 140.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C918F13_5662_14FA_41D4_ECFA94F18BE2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58FDA850_5419_207C_41C9_069E791B36A6_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_t.jpg",
 "label": "D5_Panorama 5_20230214_175429",
 "id": "panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "backwardYaw": 131.89,
   "yaw": 15.8,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "backwardYaw": -9.88,
   "yaw": -164.8,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_69BF9C6B_5546_A8CF_41CB_97D6B9DB0D26",
  "this.overlay_6E09B9FB_554A_ABCF_41CA_DC7DB868932B",
  "this.overlay_1E805AB1_55C6_A858_41C0_782A9DEE9FFB",
  "this.overlay_4EFCF3DD_56A2_336E_41C1_AF5812C40415"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 34.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B2E6D8F_5662_17EA_41B0_F46368645F0F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 95.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B4EBD6F_5662_172A_4192_BFD43AA76466",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B7BAD30_5662_1736_41CF_5DEBDE5C7A81",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_t.jpg",
 "label": "ELEVATOR_CORE_4.PNG",
 "id": "panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "backwardYaw": -98.99,
   "yaw": -88.33,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "backwardYaw": -147.72,
   "yaw": 16.82,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4F6D3A76_54CB_A8D9_41D3_96962A08E0B9",
  "this.overlay_48DAC0E7_54CB_D9C7_41C2_7C8B1C9BE026",
  "this.overlay_474C839F_56A2_F3EA_41D1_C2011180DD07",
  "this.overlay_47355580_56A2_77D6_41AA_E812641A8BB6"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4CC250_5419_207C_4135_0A9EBC679160_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CDA8EA4_5662_15DE_41C5_3F6B07ECAC99",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CB6BEDC_5662_156E_41BF_851D885DC368",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 136.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B21CD84_5662_17DE_41BE_DDCEB2F25864",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_t.jpg",
 "label": "PASSAGE-MANAGER_OFFICE_INTERSECTION .PNG",
 "id": "panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "backwardYaw": -84.03,
   "yaw": 48.74,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
   "backwardYaw": 115.31,
   "yaw": 134.48,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "backwardYaw": -43.28,
   "yaw": 85.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_460E259C_546B_20E4_417B_BEB60A66A628",
  "this.overlay_5A90722A_54B6_E832_41CE_A94C466F7AD3",
  "this.overlay_145244D2_5539_B9D8_41B9_647C0DF2B027",
  "this.overlay_1F7E4B1C_553A_A848_41D3_91B5E874D6D9",
  "this.overlay_1CA857E9_55F9_E7CB_41C0_E1CA2C306557",
  "this.overlay_1F53EA21_55F9_A87B_41BC_79B00CB590FB",
  "this.overlay_193BD4B6_55C6_F859_41D4_BDF1F2CF31DC",
  "this.overlay_449654FA_56A1_F535_41BD_45E99860D685"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D522079_5662_0D37_41D1_A21BDCF7392B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 120.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C948F1E_5662_14EA_41D1_B53850240000",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_t.jpg",
 "label": "MALE_TOILET_2 .PNG",
 "id": "panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "backwardYaw": -0.75,
   "yaw": -105.26,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_67A9AF81_5549_A83B_41D2_496B53961503",
  "this.overlay_1FC478B9_55CA_A84B_41B9_033B8F46B747"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E56643F_5419_6024_41AB_F20D58121F15_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C9E7F2A_5662_132A_41CE_E006348EA3C7",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_t.jpg",
 "label": "CHILD_CARE_CLASS_1 .PNG",
 "id": "panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
   "backwardYaw": -145.58,
   "yaw": 29.38,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "backwardYaw": 12.92,
   "yaw": -64.69,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_74E0E74A_54CF_F8C9_41B8_2EEFCD1307FC",
  "this.overlay_74B74DAC_54CF_A848_41B4_0946EFB25647",
  "this.overlay_412AC211_56A2_0CF6_41C5_8290359E6C3D",
  "this.overlay_414E4B40_56A2_1356_41D1_F264B4833D88"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_t.jpg",
 "label": "CONFERENCE_ROOM_1 .PNG",
 "id": "panorama_5E5595D8_5419_606C_41D0_D644098500B8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160",
   "backwardYaw": 6.78,
   "yaw": -5.02,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "backwardYaw": 17.61,
   "yaw": 147.97,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "backwardYaw": 17.61,
   "yaw": -170.58,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
   "backwardYaw": -23.11,
   "yaw": -145.96,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7293A1BA_5539_B849_416C_6562BAFD227C",
  "this.overlay_7CD6817F_553E_D8C7_41B8_2ADB3FC51E16",
  "this.overlay_118BF144_55CA_F839_41BD_56FB1CED2171",
  "this.overlay_1057182E_55C9_6848_41D4_2651DF687AE9",
  "this.overlay_1A8623B3_55CB_B85F_41D4_34052EFFB805",
  "this.overlay_4EEBC0CA_56A6_0D6A_41B9_C90235F6C8F3",
  "this.overlay_410C72FE_56A6_0D2D_41C9_4FEB6712979B"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54DF5F_5419_2064_4181_001C4457D09E_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A7B717F_5662_0F2A_41BE_9F939652D2FC",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_t.jpg",
 "label": "D5_Panorama 10_20230214_173943",
 "id": "panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "backwardYaw": -2.14,
   "yaw": 162.92,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E56643F_5419_6024_41AB_F20D58121F15",
   "backwardYaw": 43.99,
   "yaw": 2.26,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_681CE3FF_554F_7FC7_41C0_6B062EC1BABC",
  "this.overlay_6B101B13_5549_A85F_41D0_9668FF663E0F",
  "this.overlay_19CF3258_553F_B8C9_41D3_6415DF3CB07D",
  "this.overlay_412F9B4B_56A2_136A_41BB_734D508FD106"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A2781DA_5662_0F6A_41C4_3A10308F43C0",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_t.jpg",
 "label": "FEMALE_TOILET_1 .PNG",
 "id": "panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E55FC6B_5419_202C_41B6_215937597045",
   "backwardYaw": 43.46,
   "yaw": -9.42,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "backwardYaw": -86.04,
   "yaw": -131.77,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_665DA18E_554B_D849_41CE_EDB2A6325C0A",
  "this.overlay_66CB8C4D_554B_E8CB_41C2_0DF5463E80E7",
  "this.overlay_1ECE1E2F_55C9_6847_41CC_EA2CF593C0A9",
  "this.overlay_4015C70D_56A2_34EE_41D4_444633157ADE"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B60CD44_5662_175E_41D1_506240F17143",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5881B97C_541B_2024_4199_2DF060A6B33C_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_t.jpg",
 "label": "FEMALE_TOILET_2 .PNG",
 "id": "panorama_5E55FC6B_5419_202C_41B6_215937597045",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
   "backwardYaw": -9.42,
   "yaw": 43.46,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6746AAC9_554A_E9CB_41AB_1EA66EA1C0C7",
  "this.overlay_4E9EE93D_56A2_1F2E_41D1_D23D0F481EE7"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4BAC2CE9_5662_1556_41BA_90582DE8E022",
 "class": "PanoramaCamera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CDC4EB0_5662_1536_41B0_11B5AAAEEEAD",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -48.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48D00DCE_5662_176A_41CC_9DC76E09A59C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 74.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4AE7D0D5_5662_0D7E_41D0_4BF4B0146836",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -136.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DA43036_5662_0D3D_41D1_8B1B2B6AD225",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_t.jpg",
 "label": "D5_Panorama 4_20230214_175735",
 "id": "panorama_58FDA850_5419_207C_41C9_069E791B36A6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
   "backwardYaw": -164.8,
   "yaw": -9.88,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
   "backwardYaw": -14.57,
   "yaw": -163.65,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
   "backwardYaw": 161.91,
   "yaw": -86.1,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_669A0EDB_555A_E9C8_41AD_F184C9EEEE4D",
  "this.overlay_66A2ACBB_555A_A848_41BB_0F0D8F7D8407",
  "this.overlay_14B1AECA_554B_69C9_41C8_4BDA504B6766",
  "this.overlay_192E667D_55FB_F8CB_4198_E7FA64BA57CB",
  "this.overlay_182C9F0A_55FB_6848_41D0_ED2DF790E516",
  "this.overlay_46698F75_56A2_F33E_41CE_21B674C9BB86"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 76.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C729F4B_5662_136A_41D5_093E4CEAFD2C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -150.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CC97EC7_5662_155A_41D1_855E7ECEF1E7",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E535B7C_5419_2024_4174_88508DC54FA3_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 74.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CA80F07_5662_14DA_41D1_47CD69FA763D",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_t.jpg",
 "label": "WEST_PATIO_1 .PNG",
 "id": "panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "backwardYaw": 85.29,
   "yaw": -43.28,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3"
  },
  {
   "panorama": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "backwardYaw": -71.22,
   "yaw": 129.25,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_48DF7066_54F9_B8F9_41C7_4B4AEB002B03",
  "this.overlay_480C2E79_54C6_A8C8_41C2_10296EEBAA63",
  "this.overlay_4AAECD1D_54C7_E84B_41C4_C1894A3966DA",
  "this.overlay_18DEF918_55DB_A849_41D3_6BBC43BCB892",
  "this.overlay_4179A031_56A2_0D36_418A_AAF1CEA1BD8A",
  "this.overlay_415DD90D_56A6_3CEF_41D1_D699B8A85C20"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_t.jpg",
 "label": "COWORKING_SPACE_1 .PNG",
 "id": "panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "backwardYaw": 0.73,
   "yaw": -141.15,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "backwardYaw": 0.73,
   "yaw": 159.35,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9"
  },
  {
   "panorama": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "backwardYaw": 147.97,
   "yaw": 17.61,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_72240DA3_54C6_A87F_41D2_D205722802B1",
  "this.overlay_7D1392BF_5539_D848_41C4_4E5D84036F39",
  "this.overlay_7D21481E_553A_A848_41C1_97EDA83E34B1",
  "this.overlay_4ECF49B0_56A6_1F35_41B4_F172A4555FB0",
  "this.overlay_41796BA8_56A6_13D6_41A7_D6150EE06A4D",
  "this.overlay_4F6EC3FA_5666_1335_41C7_6ACF7EC3BBF7",
  "this.overlay_4FA5AC9B_5666_F5EA_41B6_ABDD86AA5B51"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -136.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D905041_5662_0D57_41AB_C6D6814C379C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D2A80A6_5662_0DDD_41B5_46E934092C73",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_t.jpg",
 "label": "RECEPTION_LOBBY_1 .PNG",
 "id": "panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
   "backwardYaw": 16.82,
   "yaw": -147.72,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "backwardYaw": 102.62,
   "yaw": -39.72,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389",
   "backwardYaw": 142.82,
   "yaw": 104.88,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_46DA38DD_5417_6064_41C6_3C0D1BE33B10",
  "this.overlay_46011B01_5417_61DC_41B3_3151F215B7C4",
  "this.overlay_590F525E_54CB_58C8_41AB_F52F945C95FE",
  "this.overlay_1F7FD2B1_55C7_585B_41AD_1EDC25EBC1E5",
  "this.overlay_4752D693_56AE_15FA_41D4_0EF7D7E8DD05",
  "this.overlay_4714EA05_56AE_3CDE_41D4_F98CC9BDC7C5"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_t.jpg",
 "label": "COVERED_TERRACE .PNG",
 "id": "panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "backwardYaw": 19.72,
   "yaw": -69.21,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_419F252F_54D9_F847_41D2_B26C4C975FC5",
  "this.overlay_41C80661_56A2_1556_41C3_7BEC791A56FC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48C35DDB_5662_176A_41A4_FF2AE6D66ADA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B6D6D4E_5662_176A_41C1_9B0651DF4936",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_t.jpg",
 "label": "FUNCTION_1_1 .PNG",
 "id": "panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
   "backwardYaw": 161.66,
   "yaw": 2.09,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_440B2075_54CB_B8DB_41C8_9010DF9867A3",
  "this.overlay_45E9523E_54CB_F848_41D1_2F5C7D81A3EB",
  "this.overlay_4533FF21_54CA_E87B_41B9_DF971C003C2D",
  "this.overlay_4EABA458_56E2_3576_41CF_EE51CD9D68F9",
  "this.overlay_418219FD_56E2_1F2F_41C5_D200DD5B0A0D"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 108.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48EB7DC3_5662_175A_41B8_FB4FC11F5BA1",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_t.jpg",
 "label": "D5_Panorama 6_20230214_175136",
 "id": "panorama_588580AA_541A_E02C_4144_D3F282922A1E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "backwardYaw": 118.2,
   "yaw": 156.76,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "backwardYaw": 118.2,
   "yaw": -124.1,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E",
   "backwardYaw": 143.07,
   "yaw": 29.02,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6E1CCB85_554B_E83B_41D1_1883752D4E7F",
  "this.overlay_4ED22146_56A6_0F5A_41D4_76156827518C",
  "this.overlay_4067A185_569E_0FDE_41D0_CF8D02D895D7",
  "this.overlay_401626FA_569E_152A_41CD_F1E851D560C1",
  "this.overlay_4161E494_569E_75FD_41C8_EDDD871A3980"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 48.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CA51EFC_5662_152E_41D4_52FC02210F3E",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_t.jpg",
 "label": "D5_Panorama 3_20230214_180038",
 "id": "panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
   "backwardYaw": -3.14,
   "yaw": 114.1,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "backwardYaw": -163.65,
   "yaw": -14.57,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6D3B05A1_555A_D87B_41C0_B589713A4BAD",
  "this.overlay_6DC50E8B_555A_A848_41D3_D47201A0E1A2",
  "this.overlay_1FDBE5E9_55CA_DBCB_41C2_7625E4125D70",
  "this.overlay_41484B89_56AE_33D7_41C3_961BA19ACC32"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CB87EE7_5662_155A_41D0_AA995ED02B28",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -64.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B3B6D79_5662_1736_41B0_7ABD6D6D939B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 16.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A899169_5662_0F56_41D3_A9AA6EC80EE2",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_t.jpg",
 "label": "D5_Panorama 1_20230214_180640",
 "id": "panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
   "backwardYaw": -134.12,
   "yaw": 76.98,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1",
   "backwardYaw": -83.94,
   "yaw": -105.42,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_62AA3DA5_555F_E846_41C4_655ECFB7358B",
  "this.overlay_62BABD27_555E_A847_41C3_09AE9B54B2B3",
  "this.overlay_412FDCB4_56A2_353E_41D3_3BBD4843EFE8",
  "this.overlay_41B4F8E0_56A2_3D56_41D1_A56B91E551BC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C4D4FA1_5662_13D6_41D1_4B0B4EE41C7C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -29.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CA38EF1_5662_1536_41CB_B867CE438EB5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -37.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4AF6E0C6_5662_0D5A_41D2_63FBF8874D9F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -170.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B5B8D59_5662_1776_41D5_B696B9D6B635",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 56.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4897EE0B_5662_14EA_41C9_BAA3C41EC879",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B408D64_5662_175E_41B7_103623962D70",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_t.jpg",
 "label": "D5_Panorama 2_20230214_180336",
 "id": "panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
   "backwardYaw": 114.1,
   "yaw": -3.14,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
   "backwardYaw": 76.98,
   "yaw": -134.12,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_63D296FE_5559_B9C9_41CC_AD5040903674",
  "this.overlay_63EA539F_5559_7847_41C4_F526BFE8D247",
  "this.overlay_4E841DA6_56A2_17DA_41A6_9B7200B8BB0C",
  "this.overlay_41724ED6_56A1_F57A_41B6_E4FB2E3A98BD"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_t.jpg",
 "label": "ELEVATOR_CORE_1 .PNG",
 "id": "panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "backwardYaw": -10.63,
   "yaw": 0.64,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "backwardYaw": -86.1,
   "yaw": 161.91,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "backwardYaw": -86.1,
   "yaw": -164.3,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5A5B9C4D_5417_2064_41C5_2019A5418612",
  "this.overlay_44EB76DA_5469_E06C_41BF_1B2BE3A02627",
  "this.overlay_5A868FC4_546F_2064_41D1_89F073A03BEC",
  "this.overlay_463C7007_5662_0CDA_41B8_D944FEA38A24",
  "this.overlay_47A36C76_56A3_F53A_41D1_088E1600475C"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D67F06C_5662_0D2D_41CA_28DB6E9D8A50",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -131.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C63EF61_5662_1356_41C5_411CEE21C777",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_t.jpg",
 "label": "FUNCTION_1_3 .PNG",
 "id": "panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_46215149_54D9_58C8_41BA_08FADF1C6B3C",
  "this.overlay_47FB4961_54D9_68FB_41CF_963BE8E9126C",
  "this.overlay_41420D79_56E2_1736_41B5_192616AA7448",
  "this.overlay_4EA24F9B_56E2_73EA_4142_94784F7B6529"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C87DF35_5662_1339_41CE_719D5138B794",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -141.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CC7BEBA_5662_152A_41D1_9CBD1CE7B740",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C0D1FE2_5662_1355_41B4_6F87D579449C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C740F56_5662_137A_41D0_44C6F05D36F6",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 96.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B8D5D20_5662_14D6_4191_ADC40F7575E3",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -65.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C555F82_5662_13DA_4148_1FDC47AEDD7E",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_t.jpg",
 "label": "CONFERENCE_ROOM_2 .PNG",
 "id": "panorama_5E4CC250_5419_207C_4135_0A9EBC679160",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "backwardYaw": -5.02,
   "yaw": 6.78,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7C007312_553F_B859_41D3_B88854B53FAD",
  "this.overlay_4122E5DB_56A6_176A_41BA_C86CFBC3F501"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A1791EA_5662_0F2A_4197_799B4D758541",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_t.jpg",
 "label": "RECEPTION_LOBBY_3 .PNG",
 "id": "panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2"
  },
  {
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "backwardYaw": -39.72,
   "yaw": 102.62,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1",
   "backwardYaw": -59.41,
   "yaw": 9.16,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5AACF93F_54C9_6847_41C0_70A74B648382",
  "this.overlay_5A1519F7_54C9_ABC7_41CC_06E7541B3882",
  "this.overlay_5B860E01_54C9_E83B_41C6_27F3122816DD",
  "this.overlay_4758106A_56AE_0D2A_41D4_B63936C99C28",
  "this.overlay_47B0D81F_56AE_3CEA_419C_5A08294F9596",
  "this.overlay_47CC42A4_56AE_0DDE_41C4_4586BC2900BB"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D5DA085_5662_0DDF_418A_BFE376599D79",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E5595D8_5419_606C_41D0_D644098500B8_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_t.jpg",
 "label": "CALL_ROOM_.PNG",
 "id": "panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "backwardYaw": -145.96,
   "yaw": -23.11,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_727EA40C_553B_D849_41C3_D62497F54276",
  "this.overlay_1F0D3BFA_55C9_AFC8_41AF_05823D544BD3"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_t.jpg",
 "label": "PASSAGE_1 .PNG",
 "id": "panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "backwardYaw": -136.54,
   "yaw": 150.86,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "backwardYaw": 138.8,
   "yaw": -15.2,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7E56268E_5539_5848_41D5_06408BAA8628",
  "this.overlay_7E85FFAE_5539_6849_41CC_DB363C38910C",
  "this.overlay_1FE381DF_55CE_BBC7_41C6_3017759F5448",
  "this.overlay_4E81D405_56A2_34DE_41D3_41AD6B2929CB"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_t.jpg",
 "label": "D5_Panorama 8_20230214_174529",
 "id": "panorama_5881B97C_541B_2024_4199_2DF060A6B33C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E",
   "backwardYaw": 10.05,
   "yaw": 70.22,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_68A859AE_554F_E849_41B2_83AC49094BC1",
  "this.overlay_4134B736_56A6_333A_41D2_B54394E25870"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_t.jpg",
 "label": "CHILD_CARE_CLASS_3 .PNG",
 "id": "panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "backwardYaw": -15.2,
   "yaw": 138.8,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "backwardYaw": -123.85,
   "yaw": -131.39,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
   "backwardYaw": -64.69,
   "yaw": 12.92,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_767A61BF_54CB_7847_41BC_649418533AA7",
  "this.overlay_7643CB3F_54CB_A847_41D1_465B924A9189",
  "this.overlay_67BDBC2D_554A_A84B_41C8_E817CF20FFAE",
  "this.overlay_1F4378F8_55DB_69C9_418E_CF6BD8CD862F",
  "this.overlay_41A22766_56BE_735A_41D5_04385C8CB88A"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DFAAFED_5662_132F_41C6_9045AE68F4F8",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_t.jpg",
 "label": "D5_Panorama_20230214_180942",
 "id": "panorama_58804E3F_541B_6024_41AE_5E1B04832DC1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
   "backwardYaw": -105.42,
   "yaw": -83.94,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_62849D9A_5559_6849_41C7_3A910DEBAD67",
  "this.overlay_412FC393_56A2_13FA_41C3_30967E18AFC8"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_t.jpg",
 "label": "D5_Panorama 7_20230214_174831",
 "id": "panorama_58875CB9_541A_E02C_41D3_73B63887517E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8"
  },
  {
   "panorama": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E",
   "backwardYaw": 29.02,
   "yaw": 143.07,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C",
   "backwardYaw": 70.22,
   "yaw": 10.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6EBF3E0A_554A_E849_41BD_2E94DF748DB5",
  "this.overlay_6EEC8803_554A_A83F_41C8_9AF385572CD4",
  "this.overlay_68740CF7_5549_69C7_41CB_C42E54CE811C",
  "this.overlay_4EC194A0_56A6_15D6_41D4_C6CFD9302568",
  "this.overlay_4E5C006C_5662_0D2E_41AD_D067AFA4AB69"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -75.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48CE5DE8_5662_1756_41CC_810AEA2A12EB",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D8A1057_5662_0D7B_41CE_D659CE934064",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 76.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C8A9F41_5662_1356_41D4_C8F8A5CEA9DD",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D4F2091_5662_0DF7_41C7_C199E8B284AF",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -109.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CCCFED1_5662_1579_41BD_C02BB9A3A96B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -167.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B1B7D99_5662_17F6_41C8_94CF6EAA511B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E568337_5419_2024_41D2_A30D47360735_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 34.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4ACC6123_5662_0CDA_41A9_5A6A59703FD2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D9C704B_5662_0D6B_41D4_86D71B70F659",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C011FD7_5662_137B_41B4_611217D9A2B1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_t.jpg",
 "label": "CHILD_CARE_CLASS_2 .PNG",
 "id": "panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "backwardYaw": 158.27,
   "yaw": 11.81,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
   "backwardYaw": 29.38,
   "yaw": -145.58,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_75813AD7_54CE_A9D8_41BA_A35AA4837D8E",
  "this.overlay_7768E603_54C9_583F_4193_04F17263813D",
  "this.overlay_1F0ACE65_55D9_68FB_41D1_9E91EFAAAD5C",
  "this.overlay_4E94B549_56A2_1756_41CF_22896B713AC0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DD31002_5662_0CD5_41C0_C01EE20CEA03",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -162.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DC4C016_5662_0CFD_41B9_90B2D9130D88",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -163.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D1B80B0_5662_0D35_41D3_04258FD76075",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -162.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DD8800C_5662_0CED_4171_627BDD535346",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_t.jpg",
 "label": "FEMALE_CHANGEING_ROOM_1 .PNG",
 "id": "panorama_5E56643F_5419_6024_41AB_F20D58121F15",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
   "backwardYaw": 2.26,
   "yaw": 43.99,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_68E5DCB1_554E_E85B_41B7_81B9E8A1B6AE",
  "this.overlay_4EF4BA72_56A2_3D3A_41B0_E4AC81F39AD3"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A996158_5662_0F76_41CF_4FBEBB392F81",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -21.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4AD020FB_5662_0D2A_41D1_65D85F48B32E",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D0600BC_5662_0D2D_41C6_CB7A45791C6B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4AA8B147_5662_0F5A_41A0_274023B91DA0",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E55FC6B_5419_202C_41B6_215937597045_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 45.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B806D10_5662_14F6_41D1_F68EBE19D1A1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 156.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DB2B021_5662_0CD7_41B3_CBA7CB96AC77",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_t.jpg",
 "label": "ELEVATOR_LOBBY .PNG",
 "id": "panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B"
  },
  {
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "backwardYaw": 9.16,
   "yaw": -59.41,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_45F06652_54CE_B8D9_41D5_31B2E29318E2",
  "this.overlay_5BB88345_54C9_7838_41CA_C0A9F967C596",
  "this.overlay_44EE0CE6_54C9_E9F9_418F_4F224C02ADEE",
  "this.overlay_47BF4BDA_56A2_336A_41D0_B13D80C69BA5",
  "this.overlay_47976DBD_56A2_172E_41BB_C5CD6835A639",
  "this.overlay_40653481_56E2_15D6_41CE_23B01324646F"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_t.jpg",
 "label": "WEST_PATIO_2 .PNG",
 "id": "panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "backwardYaw": 162.92,
   "yaw": -14.32,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "backwardYaw": -145.57,
   "yaw": -103.25,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_48187D70_54C6_A8D9_41C6_B566AB6B0F6E",
  "this.overlay_490D9F80_54C9_A839_41C2_7EF0B5298FED",
  "this.overlay_183FF1EB_55DB_7BCF_41B8_D1266A7560E6",
  "this.overlay_1BF3F0EC_55DA_F9C9_41C9_DF1AE9811BFD"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 38.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C276FB7_5662_133B_41B6_574EA51B1E59",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_t.jpg",
 "label": "COFFEE_LOUNGE .PNG",
 "id": "panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "backwardYaw": 104.88,
   "yaw": 142.82,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_163FE96D_5539_68C8_41C6_001BB8EE3E0A",
  "this.overlay_16FC03BD_5539_B84B_41BF_BE08436FFDCB",
  "this.overlay_11C4F7DA_553A_A7C9_41CB_AB34A3BEC3C0",
  "this.overlay_415D3B57_56E2_737A_4190_051CED25F99E",
  "this.overlay_4EE5CFCB_56E6_736A_4195_42BF02D045E2"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 115.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CD6FE99_5662_15F6_41D2_CD3A2041937A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E578F69_541B_602C_41C2_4A0F1F976829_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -32.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4A0151FF_5662_0F2A_41B8_4A467A3B790B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48F80DB8_5662_1736_41CB_7D7BC08769D5",
 "class": "PanoramaCamera"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipOpacity": 0.5,
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 641,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.64,
 "verticalAlign": "top",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "bottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "height": 118,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "24.125%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "37.622%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": "7.14%",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "visible": false,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "Entrance"
 },
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.23%",
 "width": 110,
 "paddingRight": 10,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 3,
 "borderColor": "#000000",
 "height": 47,
 "top": "4.76%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Living Room"
 },
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "7.901%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "5.081%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Kitchen"
 },
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "4.946%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "4.973%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 1"
 },
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 2"
 },
 "id": "HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 3"
 },
 "id": "HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bathroom"
 },
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "12.364%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Hallway"
 },
 "id": "HTMLText_6D10649B_7332_5218_41D2_21101FE2809C",
 "left": "2.11%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5.19%",
 "minWidth": 1,
 "borderSize": 3,
 "width": "12.364%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Hallway</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA, this.camera_4CDC4EB0_5662_1536_41B0_11B5AAAEEEAD); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5BBC71A4_5469_2024_41D0_EA3CC4D3F976",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -10.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0_HS_0_1_0_map.gif",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.63,
   "hfov": 66.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3, this.camera_4CDA8EA4_5662_15DE_41C5_3F6B07ECAC99); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_44E27EE1_5476_E05C_41BB_768C41F96A0D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -98.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_1_1_0_map.gif",
      "width": 126,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.35,
   "hfov": 59.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4CC7BEBA_5662_152A_41D1_9CBD1CE7B740); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_45220375_5477_E024_41CE_392863C2B851",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_2_1_0_map.gif",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.29,
   "hfov": 54.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "id": "overlay_46A728B1_569E_3D36_41BA_566C0859A93F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB7FDF3_56A2_773A_41C3_8D07A7927BDF",
   "pitch": -10.5,
   "yaw": -98.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.32,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -98.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.5,
   "hfov": 4.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "id": "overlay_46C4A3DA_569E_136A_41D1_065D3A6BA421",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_414B661B_56A6_34EA_41D1_EB6387247872",
   "pitch": -3.15,
   "yaw": -6.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -6.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.15,
   "hfov": 2.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_46B120D9_56A2_0D77_41CB_D310DBBF4F86",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB46DF4_56A2_773E_41CD_854C37CC17D6",
   "pitch": -6.63,
   "yaw": 87.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 87.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.63,
   "hfov": 3.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3, this.camera_4C2E1FC2_5662_1355_41CE_018A5B3D7674); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_77B693DC_54CA_FFC9_41D2_FE18B976347F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 162.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_1_HS_0_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.33,
   "hfov": 32.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB, this.camera_4C276FB7_5662_133B_41B6_574EA51B1E59); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_725C74E8_54C7_59C9_41C7_DAF0417A40BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 148
     }
    ]
   },
   "pitch": -0.97,
   "hfov": 111.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_193D29C7_55D9_A838_4192_111551E7E5E4",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_437D2E53_56A2_757A_41CB_23C499010CD8",
   "pitch": -2.39,
   "yaw": 164.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 164.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.39,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E8F1FE2_56A6_135A_41C7_E2531731FF30",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4021EB68_56A2_3355_41D3_8F015A13EEC2",
   "pitch": -6.32,
   "yaw": 4.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.32,
   "hfov": 3.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2, this.camera_4C87DF35_5662_1339_41CE_719D5138B794); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_47F24588_5479_20EC_41A2_241E3413310F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E, this.camera_4C740F56_5662_137A_41D0_44C6F05D36F6); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_406F33B8_5479_602C_41C4_666876E935A8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 38.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_1_1_6_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.04,
   "hfov": 61.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3, this.camera_4C8A9F41_5662_1356_41D4_C8F8A5CEA9DD); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4F9C4BC0_54FB_A839_416B_BB4C58AB91E0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -145.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_2_1_6_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.51,
   "hfov": 73.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3, this.camera_4C729F4B_5662_136A_41D5_093E4CEAFD2C); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_15FC46CD_5546_B9C8_41D3_8333B33B3335",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 164.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_3_1_6_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.33,
   "hfov": 30.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1C6F92C3_55F9_B83F_4151_4710606F99F1",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB36DF5_56A2_773E_41BC_B399D4F18044",
   "pitch": 0.71,
   "yaw": -160.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -160.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.71,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "id": "overlay_47997AAE_56A6_7D2A_41C7_60C1A5A7F88F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB38DF6_56A2_773A_41D1_CECACBCDF30C",
   "pitch": -5.55,
   "yaw": 27.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.06,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 27.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.55,
   "hfov": 3.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_46B18605_56A1_F4DE_41CC_E595C2D6AE66",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB3CDF6_56A2_773A_41B9_E59C6248EBC9",
   "pitch": -12.76,
   "yaw": -54.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -54.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.76,
   "hfov": 3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B, this.camera_4A5591A4_5662_0FDE_41C6_1698706FA4E3); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6C40399D_5549_684B_41B6_F5E704C8B67B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 131.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_0_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -0.44,
   "hfov": 14.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B, this.camera_4A3731C9_5662_0F56_41D3_127C70BAAE09); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6FFC66F0_5549_D9D9_41A1_E174845AE772",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_588580AA_541A_E02C_4144_D3F282922A1E, this.camera_4A45C1B4_5662_0F3E_41CF_481E806704A1); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_1F3AFC65_55CA_A8FB_41B3_363934EE7DFF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 118.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_2_1_6_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.83,
   "hfov": 10.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_1F537CCE_5539_A9C9_41B5_89312B6A793D",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 2.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_3_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.44,
   "hfov": 7.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_1F215C28_5539_E849_41CF_0DB6283B0E19",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 120.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -0.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 120.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.25,
   "hfov": 3.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "id": "overlay_19E582B2_553A_B859_41D0_C8A22B357B6B",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43770E5F_56A2_756A_41D2_00A24A80254F",
   "pitch": -8.6,
   "yaw": 130.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 130.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_5_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.6,
   "hfov": 4.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3, this.camera_4C3A9FAB_5662_132A_41B0_7273A041E606); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_75A4A9A7_54CB_6878_4199_4B8B50B7C036",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -123.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_0_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.09,
   "hfov": 48.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA, this.camera_4C4D4FA1_5662_13D6_41D1_4B0B4EE41C7C); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4B64AA8C_54C9_A849_41C9_F5E2314F8F2E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 158.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_1_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.22,
   "hfov": 45.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E, this.camera_4C46AF97_5662_13FA_41D1_8B863B156AD3); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_10A75D88_55D9_6849_41B2_3202E464A850",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -71.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ]
   },
   "pitch": 7.71,
   "hfov": 57.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Generic 01"
 },
 "id": "overlay_19880BA5_55DF_687B_41C7_D99E445612D4",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDEEE02_56A2_74DA_419A_510DDB0F4A6E",
   "pitch": -9.42,
   "yaw": -81.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.34,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -81.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.42,
   "hfov": 4.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1F65259F_55DF_5848_41C4_AD0ABB1620F3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDF2E02_56A2_74DA_41D2_57D5D6120A8C",
   "pitch": -2.64,
   "yaw": -117.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -117.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.64,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1F9709D9_55DE_ABCB_41CC_D894D02E235B",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDF7E02_56A2_74DA_41B9_E8FC012F55D2",
   "pitch": -2.39,
   "yaw": 155.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 155.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.39,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3, this.camera_4D3FC09B_5662_0DEA_4187_73A6D518A2C2); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7C9F79CC_553F_ABC8_41C1_D0A22584B538",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4D2A80A6_5662_0DDD_41B5_46E934092C73); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7F2C82F6_553E_F9D9_41BB_AB137EF44F19",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7C98D047_553E_B8C7_41D3_1F27A396CC22",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -67.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_2_1_6_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.05,
   "hfov": 27.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_194A1B8B_55C9_A848_41D0_6AC1ED01C5DA",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_437A6E57_56A2_757A_41CB_AB88932773F5",
   "pitch": -15.54,
   "yaw": 116.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.35,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 116.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.54,
   "hfov": 6.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EAC74C4_56A2_155E_41D1_0698C1C6F9CA",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4BC69E3C_5662_152E_4162_F95A4925993D",
   "pitch": -6.22,
   "yaw": -69.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -69.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.22,
   "hfov": 3.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41130E63_56A2_155A_41B5_F2B3AF7AD1FD",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4BC55E3D_5662_152E_41AD_8D71F6813B0B",
   "pitch": -6.19,
   "yaw": -8.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.93,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -8.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.19,
   "hfov": 3.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_457D5F1B_54C9_A84F_41D0_CC70DEB20A1A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 109.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ]
   },
   "pitch": 1.43,
   "hfov": 62.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A, this.camera_4B001DA4_5662_17DE_41CF_E493542F0C91); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_453E03C5_54C9_F838_41C7_1644F591CCA4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 161.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_1_HS_1_1_0_map.gif",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.58,
   "hfov": 35.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_46F3CF35_54C9_A85B_41C7_26CF4ED55518",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 17.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ]
   },
   "pitch": 3.93,
   "hfov": 92.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EFBAFEC_56E2_132E_4198_76638DAE65B7",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402EBB5F_56A2_336B_41D1_742E0D95CC9D",
   "pitch": -11.52,
   "yaw": 2.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.31,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.52,
   "hfov": 4.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4ED7BB59_56E2_1376_41C7_704F5B762DC8",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4BF09E25_5662_14DE_41BF_4EE5C185CD28",
   "pitch": -6,
   "yaw": 170.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.5,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 170.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6,
   "hfov": 3.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EADD036_5662_0D3A_41CC_0B20C5D43A7C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4BF72E25_5662_14DE_41C0_E85EC0DF47BC",
   "pitch": -2.16,
   "yaw": 120.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 120.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.16,
   "hfov": 3.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4753D893_54DB_A85F_41D2_3081185CAB5D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -59.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -6.84,
   "hfov": 81.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F, this.camera_48F38DAE_5662_172A_41CD_59B1C4E7EE21); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4737DB44_54DB_6839_41C8_3C74B4AC10A6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 23.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ]
   },
   "pitch": -5.9,
   "hfov": 72.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E8FAC8D_569E_75EE_41C2_77B339CA0032",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402D9B61_56A2_3357_41C1_F1D4F6F164CC",
   "pitch": -5.32,
   "yaw": -71.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.06,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -71.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.32,
   "hfov": 3.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4F86FEB5_569E_353E_41B7_CBDD7C47FAB9",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402DAB61_56A2_3357_41A8_41C41191F51B",
   "pitch": -7.04,
   "yaw": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.36,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.04,
   "hfov": 4.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6466A378_554E_D8C9_41D4_A355E112BEAB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4FBBACBA_56AE_152A_41CB_02D62EBE82F9",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4026CB70_56A2_3335_41C4_67E48F952A26",
   "pitch": -5.84,
   "yaw": 45.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 45.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.84,
   "hfov": 5.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4C6BFF6B_5662_132A_41D2_7E1BE2F81FCC); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_45EA15F1_5476_E03D_41CC_908CDE0031C6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 98.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_0_1_0_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.08,
   "hfov": 96.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "id": "overlay_46DD3214_5469_23E4_41C7_22C86B4BC606",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_1_1_0_map.gif",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 5.45,
   "hfov": 91.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3, this.camera_4C63EF61_5662_1356_41C5_411CEE21C777); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_475E7325_5469_2024_41C7_476010387DB4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -84.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_2_1_0_map.gif",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 5.08,
   "hfov": 81.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4F65F3AC_54FB_5849_41D4_59BF15BBFDFE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -149.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_3_1_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.83,
   "hfov": 56.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4C6D2F77_5662_133A_41B8_AD04F585282A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_15749879_5547_68CB_41AD_4B56C68A0807",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_4_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_4_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_4_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_4_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "id": "overlay_19F47A7E_55FA_A8C8_41D2_8A254FEBF3D2",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAE6DF7_56A2_773A_41BF_0A532FFE5C84",
   "pitch": -8.35,
   "yaw": 98.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.52,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 98.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_5_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.35,
   "hfov": 6.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1FDDE67A_55FB_78C9_41B5_F17B15C72482",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAEADF7_56A2_773A_4189_47BC6BFED05C",
   "pitch": 0.79,
   "yaw": -160.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.27,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -160.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.79,
   "hfov": 5.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_44E28913_56A2_1CFA_41C4_B591FFEF745E",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAF2DF7_56A2_773A_41B0_F3835922042F",
   "pitch": -17.46,
   "yaw": -1.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -1.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.46,
   "hfov": 4.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41EE1C72_56E2_353A_41CB_9EBEB5FD86AA",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4029FB59_56A2_3377_41D2_BB53B6BE2497",
   "pitch": -8.67,
   "yaw": -86.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.34,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -86.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.67,
   "hfov": 4.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16, this.camera_4CB87EE7_5662_155A_41D0_AA995ED02B28); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7FEDEB8B_553A_A84F_41C8_93858504AE00",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829, this.camera_4CA80F07_5662_14DA_41D1_47CD69FA763D); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7E5E404C_553A_D8C9_4187_542156C4E048",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA, this.camera_4CA51EFC_5662_152E_41D4_52FC02210F3E); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7E7FB4C5_553A_F83B_41BA_2CC7EBEF2904",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -86.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_2_1_6_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.32,
   "hfov": 44.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE, this.camera_4CA38EF1_5662_1536_41CB_B867CE438EB5); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7E9C18BE_553A_A848_41B0_4C65860424C2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -136.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_3_1_6_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.75,
   "hfov": 42.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_1F445E41_55CE_A838_41C0_F4B1723225FF",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 2.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_4_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -9.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.23,
   "hfov": 7.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_1BB80AAA_55CF_E849_41D4_D7CA65DFA269",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -83.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_5_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -5.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -83.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.21,
   "hfov": 7.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4ED1FD45_56A2_375E_41CA_151BCAE8B7F2",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40204B6E_56A2_332D_418F_DBEC55D6DADF",
   "pitch": -6.15,
   "yaw": -135.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -135.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.15,
   "hfov": 4.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_415CE127_56A2_0CDB_41C6_ECCD9070E214",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40201B6E_56A2_332D_41A4_7454EAE57A07",
   "pitch": -6.66,
   "yaw": 83.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.36,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 83.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.66,
   "hfov": 4.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104, this.camera_4AA8B147_5662_0F5A_41A0_274023B91DA0); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4020EE3A_54D9_A848_41D2_8D756664A2FE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -80.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -9.32,
   "hfov": 102.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420, this.camera_4ABDB132_5662_0F3A_419F_90EAB34CD153); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_40E83D59_54DF_E8C8_41CD_0DDADA9DE190",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_400A9638_569E_1536_41CF_BE76CAB5FF95",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402D6B61_56A2_3357_41B4_3CE3DEE8778F",
   "pitch": -10.57,
   "yaw": 25.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.32,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 25.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.57,
   "hfov": 4.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41A5A51F_569E_74EA_41C7_3C2F0DC728DE",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402D3B61_56A2_3357_41D3_ED5D1D1BB513",
   "pitch": -0.86,
   "yaw": -87.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.47,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -87.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.86,
   "hfov": 3.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_48D00DCE_5662_176A_41CC_9DC76E09A59C); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_69BF9C6B_5546_A8CF_41CB_97D6B9DB0D26",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_48C35DDB_5662_176A_41A4_FF2AE6D66ADA); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6E09B9FB_554A_ABCF_41CA_DC7DB868932B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -164.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_1_HS_1_1_6_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.26,
   "hfov": 29.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1E805AB1_55C6_A858_41C0_782A9DEE9FFB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4376AE5E_56A2_756A_41D2_A4FC6B0FB64A",
   "pitch": -1.88,
   "yaw": -164.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -164.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.88,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EFCF3DD_56A2_336E_41C1_AF5812C40415",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4024FB74_56A2_333D_41CF_1F6B6C3886CD",
   "pitch": -2.21,
   "yaw": 15.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 15.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.21,
   "hfov": 3.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E, this.camera_4BAC2CE9_5662_1556_41BA_90582DE8E022); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4F6D3A76_54CB_A8D9_41D3_96962A08E0B9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -88.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_0_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.99,
   "hfov": 103.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B, this.camera_4B99FCFA_5662_152A_41B7_F866B4CCFF51); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_48DAC0E7_54CB_D9C7_41C2_7C8B1C9BE026",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 16.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_1_1_0_map.gif",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0.53,
   "hfov": 83.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_474C839F_56A2_F3EA_41D1_C2011180DD07",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB09DF6_56A2_773A_41CF_EEFFEABCEB40",
   "pitch": -5.51,
   "yaw": -89.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -89.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.51,
   "hfov": 4.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_47355580_56A2_77D6_41AA_E812641A8BB6",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB0DDF6_56A2_773A_41C2_A7C1DCEE2D0F",
   "pitch": -10.77,
   "yaw": 14.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.02,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 14.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.77,
   "hfov": 3.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_460E259C_546B_20E4_417B_BEB60A66A628",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -29.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_0_1_0_map.gif",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 13.54,
   "hfov": 131.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2, this.camera_4B4EBD6F_5662_172A_4192_BFD43AA76466); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5A90722A_54B6_E832_41CE_A94C466F7AD3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 48.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_1_1_0_map.gif",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.61,
   "hfov": 38.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16, this.camera_4B3B6D79_5662_1736_41B0_7ABD6D6D939B); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_145244D2_5539_B9D8_41B9_647C0DF2B027",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 134.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_2_1_0_map.gif",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0.56,
   "hfov": 58.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E, this.camera_4B21CD84_5662_17DE_41BE_DDCEB2F25864); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_1F7E4B1C_553A_A848_41D3_91B5E874D6D9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 85.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_3_1_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.32,
   "hfov": 23.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1CA857E9_55F9_E7CB_41C0_E1CA2C306557",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAEEDF8_56A2_7736_41CF_FA4CF964B6E4",
   "pitch": 0.44,
   "yaw": 90.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.27,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.44,
   "hfov": 5.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1F53EA21_55F9_A87B_41BC_79B00CB590FB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAF3DF8_56A2_7736_41B5_A7EAA00D82E5",
   "pitch": -5.58,
   "yaw": 134.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 134.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.58,
   "hfov": 5.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "id": "overlay_193BD4B6_55C6_F859_41D4_BDF1F2CF31DC",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAF5DF9_56A2_7736_41C5_D8D5F5EAFF2B",
   "pitch": -10.11,
   "yaw": 48.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.04,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 48.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.11,
   "hfov": 6.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_449654FA_56A1_F535_41BD_45E99860D685",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAF9DF9_56A2_7736_4199_6826440989A9",
   "pitch": -4.64,
   "yaw": -50.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -50.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.64,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4DFAAFED_5662_132F_41C6_9045AE68F4F8); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_67A9AF81_5549_A83B_41D2_496B53961503",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_1FC478B9_55CA_A84B_41B9_033B8F46B747",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -103.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_1_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -1.7
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -103.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.7,
   "hfov": 7.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA, this.camera_4B2E6D8F_5662_17EA_41B0_F46368645F0F); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_74E0E74A_54CF_F8C9_41B8_2EEFCD1307FC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 29.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_0_1_0_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.48,
   "hfov": 59.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3, this.camera_4B1B7D99_5662_17F6_41C8_94CF6EAA511B); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_74B74DAC_54CF_A848_41B4_0946EFB25647",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -64.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_1_HS_1_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.11,
   "hfov": 51.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_412AC211_56A2_0CF6_41C5_8290359E6C3D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40230B66_56A2_335D_41C7_9BB9D878D68C",
   "pitch": -4.72,
   "yaw": -50.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -50.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.72,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_414E4B40_56A2_1356_41D1_F264B4833D88",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40232B66_56A2_335D_41CB_E033DF572C45",
   "pitch": -5.31,
   "yaw": 13.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.63,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 13.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.31,
   "hfov": 4.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160, this.camera_4DD31002_5662_0CD5_41C0_C01EE20CEA03); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7293A1BA_5539_B849_416C_6562BAFD227C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9, this.camera_4DB2B021_5662_0CD7_41B3_CBA7CB96AC77); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7CD6817F_553E_D8C7_41B8_2ADB3FC51E16",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -145.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_1_1_6_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.97,
   "hfov": 29.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB, this.camera_4DD8800C_5662_0CED_4171_627BDD535346); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_118BF144_55CA_F839_41BD_56FB1CED2171",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 147.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_2_1_0_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -14.76,
   "hfov": 75.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB, this.camera_4DC4C016_5662_0CFD_41B9_90B2D9130D88); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_1057182E_55C9_6848_41D4_2651DF687AE9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -170.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_3_1_6_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.47,
   "hfov": 19.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1A8623B3_55CB_B85F_41D4_34052EFFB805",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_437A4E56_56A2_757A_41D5_56E9DFB5FDB6",
   "pitch": -3.39,
   "yaw": -153.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -153.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.39,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EEBC0CA_56A6_0D6A_41B9_C90235F6C8F3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40205B6B_56A2_332B_41D0_0B4BFB3B9030",
   "pitch": -35.48,
   "yaw": 5.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 5.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.48,
   "hfov": 7.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_410C72FE_56A6_0D2D_41C9_4FEB6712979B",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4BC0AE3B_5662_152A_41B5_137C171EDDD1",
   "pitch": -6.94,
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.93,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.94,
   "hfov": 3.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E56643F_5419_6024_41AB_F20D58121F15, this.camera_4DA43036_5662_0D3D_41D1_8B1B2B6AD225); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_681CE3FF_554F_7FC7_41C0_6B062EC1BABC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4DBED02C_5662_0D2D_41CA_21D5A1866879); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6B101B13_5549_A85F_41D0_9668FF663E0F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 162.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_1_1_6_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.33,
   "hfov": 35.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_19CF3258_553F_B8C9_41D3_6415DF3CB07D",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 172.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_3_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -2.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 172.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.95,
   "hfov": 7.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_412F9B4B_56A2_136A_41BB_734D508FD106",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41DACB78_56A2_3335_41CE_7CBF3F30DF14",
   "pitch": -13.78,
   "yaw": 1.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.4,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 1.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.78,
   "hfov": 6.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4D9C704B_5662_0D6B_41D4_86D71B70F659); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_665DA18E_554B_D849_41CE_EDB2A6325C0A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -131.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_1_HS_0_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.73,
   "hfov": 46.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E55FC6B_5419_202C_41B6_215937597045, this.camera_4D905041_5662_0D57_41AB_C6D6814C379C); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_66CB8C4D_554B_E8CB_41C2_0DF5463E80E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "id": "overlay_1ECE1E2F_55C9_6847_41CC_EA2CF593C0A9",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -132.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_1_HS_3_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -132.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.06,
   "hfov": 7.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4015C70D_56A2_34EE_41D4_444633157ADE",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40277B6F_56A2_332B_41D2_8DDE4772AE3A",
   "pitch": -5.84,
   "yaw": 4.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 4.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.84,
   "hfov": 5.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA, this.camera_48BB1DF4_5662_173E_419A_0F28871823FE); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6746AAC9_554A_E9CB_41AB_1EA66EA1C0C7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 43.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_1_HS_0_1_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.28,
   "hfov": 55.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E9EE93D_56A2_1F2E_41D1_D23D0F481EE7",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40273B70_56A2_3335_41B0_C4AA6E1D9B50",
   "pitch": -8.1,
   "yaw": 44.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.22,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 44.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.1,
   "hfov": 5.22
  }
 ]
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton HS "
 },
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "data": {
  "name": "IconButton VR"
 },
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994, this.camera_4C011FD7_5662_137B_41B4_611217D9A2B1); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_669A0EDB_555A_E9C8_41AD_F184C9EEEE4D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -163.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_0_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -4.69,
   "hfov": 31.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B, this.camera_4C1ACFCC_5662_136D_41D2_076C7420C5AA); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_66A2ACBB_555A_A848_41BB_0F0D8F7D8407",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -9.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_1_1_0_map.gif",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.75,
   "hfov": 60.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA, this.camera_4C0D1FE2_5662_1355_41B4_6F87D579449C); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_14B1AECA_554B_69C9_41C8_4BDA504B6766",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -86.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_2_1_0_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 79.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_192E667D_55FB_F8CB_4198_E7FA64BA57CB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB54DF4_56A2_773E_41A2_4FAC8384DCC3",
   "pitch": -0.87,
   "yaw": -8.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -8.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.87,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_182C9F0A_55FB_6848_41D0_ED2DF790E516",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB5EDF5_56A2_773E_41C0_0FD018A64E70",
   "pitch": 0.38,
   "yaw": -165.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.38,
   "hfov": 4.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_46698F75_56A2_F33E_41CE_21B674C9BB86",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB23DF5_56A2_773E_41BB_D2F731DF7D27",
   "pitch": -4.88,
   "yaw": -87.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.07,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -87.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.88,
   "hfov": 3.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3, this.camera_48F80DB8_5662_1736_41CB_7D7BC08769D5); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_48DF7066_54F9_B8F9_41C7_4B4AEB002B03",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_480C2E79_54C6_A8C8_41C2_10296EEBAA63",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 41.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ]
   },
   "pitch": -1.58,
   "hfov": 58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626, this.camera_48EB7DC3_5662_175A_41B8_FB4FC11F5BA1); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4AAECD1D_54C7_E84B_41C4_C1894A3966DA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_1_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_1_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_18DEF918_55DB_A849_41D3_6BBC43BCB892",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EA01E01_56A2_74D6_41D5_33FE79CECA99",
   "pitch": -33,
   "yaw": 148.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.69,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 148.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_1_HS_5_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33,
   "hfov": 3.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4179A031_56A2_0D36_418A_AAF1CEA1BD8A",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402C4B63_56A2_335B_41D0_3EA193B28844",
   "pitch": -7.81,
   "yaw": -33.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -33.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.81,
   "hfov": 4.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_415DD90D_56A6_3CEF_41D1_D699B8A85C20",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402C6B63_56A2_335B_41C7_80D5044E6302",
   "pitch": -3.16,
   "yaw": 59.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 59.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.16,
   "hfov": 3.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9, this.camera_4A2781DA_5662_0F6A_41C4_3A10308F43C0); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_72240DA3_54C6_A87F_41D2_D205722802B1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -141.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_1_HS_0_1_0_map.gif",
      "width": 142,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.99,
   "hfov": 82.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9, this.camera_4A1791EA_5662_0F2A_4197_799B4D758541); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7D1392BF_5539_D848_41C4_4E5D84036F39",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 159.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_1_1_0_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.21,
   "hfov": 40.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5595D8_5419_606C_41D0_D644098500B8, this.camera_4A0151FF_5662_0F2A_41B8_4A467A3B790B); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7D21481E_553A_A848_41C1_97EDA83E34B1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 17.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_2_1_0_map.gif",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.84,
   "hfov": 46.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4ECF49B0_56A6_1F35_41B4_F172A4555FB0",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F9DB62D_5662_352E_41B0_2161DC703E36",
   "pitch": -7.22,
   "yaw": 2.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.62,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.22,
   "hfov": 2.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41796BA8_56A6_13D6_41A7_D6150EE06A4D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40216B69_56A2_3357_41C4_925F00F12C49",
   "pitch": -6.63,
   "yaw": 169.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 169.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.63,
   "hfov": 4.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4F6EC3FA_5666_1335_41C7_6ACF7EC3BBF7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -14.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_7_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.83,
   "hfov": 13.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_4FA5AC9B_5666_F5EA_41B6_ABDD86AA5B51",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F9DE62D_5662_352E_41D1_8B970972ED91",
   "pitch": -2.68,
   "yaw": -13.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.07,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -13.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.68,
   "hfov": 3.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3, this.camera_4D1B80B0_5662_0D35_41D3_04258FD76075); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_46DA38DD_5417_6064_41C6_3C0D1BE33B10",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -147.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_0_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 7.85,
   "hfov": 72.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82, this.camera_4D0600BC_5662_0D2D_41C6_CB7A45791C6B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_46011B01_5417_61DC_41B3_3151F215B7C4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -39.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0_HS_1_1_0_map.gif",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -0.36,
   "hfov": 86.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389, this.camera_4AF6E0C6_5662_0D5A_41D2_63FBF8874D9F); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_590F525E_54CB_58C8_41AB_F52F945C95FE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 104.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_2_1_0_map.gif",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.63,
   "hfov": 124.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "id": "overlay_1F7FD2B1_55C7_585B_41AD_1EDC25EBC1E5",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAC9DF9_56A2_7736_41D5_1C38644CDFB6",
   "pitch": -15.26,
   "yaw": -156.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.77,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -156.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.26,
   "hfov": 10.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4752D693_56AE_15FA_41D4_0EF7D7E8DD05",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EACCDFA_56A2_772A_41D4_FCD9AA0A50D5",
   "pitch": -9.36,
   "yaw": 92.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.2,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 92.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.36,
   "hfov": 5.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4714EA05_56AE_3CDE_41D4_F98CC9BDC7C5",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40288B5B_56A2_336B_41D0_3CBF118029AE",
   "pitch": -14.07,
   "yaw": -66.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -66.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.07,
   "hfov": 4.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F, this.camera_4DE6CFF8_5662_1335_41C2_351B8F64528F); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_419F252F_54D9_F847_41D2_B26C4C975FC5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41C80661_56A2_1556_41C3_7BEC791A56FC",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402CCB62_56A2_3355_41D0_B02CE75AAFB9",
   "pitch": -14.33,
   "yaw": -55.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -55.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.33,
   "hfov": 4.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_440B2075_54CB_B8DB_41C8_9010DF9867A3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_45E9523E_54CB_F848_41D1_2F5C7D81A3EB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -152.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_1_HS_1_1_6_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.05,
   "hfov": 55.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B, this.camera_4C9E7F2A_5662_132A_41CE_E006348EA3C7); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4533FF21_54CA_E87B_41B9_DF971C003C2D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EABA458_56E2_3576_41CF_EE51CD9D68F9",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402F9B5E_56A2_336D_41D3_03611045CC56",
   "pitch": -6.33,
   "yaw": -0.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -0.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.33,
   "hfov": 4.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_418219FD_56E2_1F2F_41C5_D200DD5B0A0D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402FBB5E_56A2_336D_41D1_F7AC317DC6D9",
   "pitch": -6.51,
   "yaw": 159.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 159.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.51,
   "hfov": 3.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58875CB9_541A_E02C_41D3_73B63887517E, this.camera_4D4F2091_5662_0DF7_41C7_C199E8B284AF); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6E1CCB85_554B_E83B_41D1_1883752D4E7F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 29.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_0_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.03,
   "hfov": 57.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4ED22146_56A6_0F5A_41D4_76156827518C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40240B75_56A2_333F_41C4_F6180B99F996",
   "pitch": -7.91,
   "yaw": 32.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 32.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.91,
   "hfov": 4.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_4067A185_569E_0FDE_41D0_CF8D02D895D7",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 168.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_3_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 7.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 168.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.98,
   "hfov": 8.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4D522079_5662_0D37_41D1_A21BDCF7392B); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_401626FA_569E_152A_41CD_F1E851D560C1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_4_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_4_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_4_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4D5DA085_5662_0DDF_418A_BFE376599D79); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_4161E494_569E_75FD_41C8_EDDD871A3980",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF, this.camera_4A996158_5662_0F76_41CF_4FBEBB392F81); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6D3B05A1_555A_D87B_41C0_B589713A4BAD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4A899169_5662_0F56_41D3_A9AA6EC80EE2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6DC50E8B_555A_A848_41D3_D47201A0E1A2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1FDBE5E9_55CA_DBCB_41C2_7625E4125D70",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4378EE5B_56A2_756A_41B6_2BA23B5BA349",
   "pitch": 2.95,
   "yaw": -13.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.78,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -13.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.95,
   "hfov": 8.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41484B89_56AE_33D7_41C3_961BA19ACC32",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40267B71_56A2_3337_41A1_8D1141B8EDD4",
   "pitch": -10.76,
   "yaw": 135.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.32,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 135.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.76,
   "hfov": 4.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF, this.camera_4B806D10_5662_14F6_41D1_F68EBE19D1A1); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_62AA3DA5_555F_E846_41C4_655ECFB7358B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1, this.camera_4B8D5D20_5662_14D6_4191_ADC40F7575E3); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_62BABD27_555E_A847_41C3_09AE9B54B2B3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -105.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ]
   },
   "pitch": -0.42,
   "hfov": 108.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_412FDCB4_56A2_353E_41D3_3BBD4843EFE8",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4025BB72_56A2_3335_419C_473DC6861949",
   "pitch": -13.78,
   "yaw": -106.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.27,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -106.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.78,
   "hfov": 4.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41B4F8E0_56A2_3D56_41D1_A56B91E551BC",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40255B73_56A2_333B_41BE_D83262664659",
   "pitch": -6.77,
   "yaw": 76.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.36,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 76.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.77,
   "hfov": 4.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994, this.camera_4C555F82_5662_13DA_4148_1FDC47AEDD7E); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_63D296FE_5559_B9C9_41CC_AD5040903674",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -3.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ]
   },
   "pitch": -3.86,
   "hfov": 75.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8, this.camera_4C5ECF8D_5662_13EE_41C0_83199951E52D); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_63EA539F_5559_7847_41C4_F526BFE8D247",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -134.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ]
   },
   "pitch": -11.11,
   "hfov": 96.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E841DA6_56A2_17DA_41A6_9B7200B8BB0C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40262B72_56A2_3335_41C0_535B5BD1E893",
   "pitch": -9.21,
   "yaw": -10.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.34,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -10.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.21,
   "hfov": 4.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41724ED6_56A1_F57A_41B6_E4FB2E3A98BD",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4025CB72_56A2_3335_41C5_3F6024627A4B",
   "pitch": -11.01,
   "yaw": -135.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.31,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -135.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.01,
   "hfov": 4.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E, this.camera_4D8A1057_5662_0D7B_41CE_D659CE934064); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5A5B9C4D_5417_2064_41C5_2019A5418612",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_0_1_0_map.gif",
      "width": 165,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.04,
   "hfov": 83.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4D746061_5662_0D57_41BE_5B8590683E73); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_44EB76DA_5469_E06C_41BF_1B2BE3A02627",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 161.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_1_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.42,
   "hfov": 35.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4D67F06C_5662_0D2D_41CA_28DB6E9D8A50); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5A868FC4_546F_2064_41D1_89F073A03BEC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -164.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_1_HS_2_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.95,
   "hfov": 31.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "id": "overlay_463C7007_5662_0CDA_41B8_D944FEA38A24",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB6ADF2_56A2_773A_41D1_4C18C0915556",
   "pitch": -10.12,
   "yaw": -3.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.46,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -3.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.12,
   "hfov": 3.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_47A36C76_56A3_F53A_41D1_088E1600475C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4148561A_56A6_34EA_41D2_A46C01127C88",
   "pitch": -4.78,
   "yaw": 176.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.07,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 176.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.78,
   "hfov": 3.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_46215149_54D9_58C8_41BA_08FADF1C6B3C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 8.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_0_1_0_map.gif",
      "width": 161,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.76,
   "hfov": 75.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_47FB4961_54D9_68FB_41CF_963BE8E9126C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 124.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 3.89,
   "hfov": 80.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41420D79_56E2_1736_41B5_192616AA7448",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402E0B60_56A2_3355_41A3_64D7B520316A",
   "pitch": -6.97,
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.05,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.97,
   "hfov": 3.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EA24F9B_56E2_73EA_4142_94784F7B6529",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402E2B60_56A2_3355_41C6_3FE3D9E394FE",
   "pitch": -8.92,
   "yaw": 128.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.04,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 128.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.92,
   "hfov": 3.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5595D8_5419_606C_41D0_D644098500B8, this.camera_4B408D64_5662_175E_41B7_103623962D70); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7C007312_553F_B859_41D3_B88854B53FAD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4122E5DB_56A6_176A_41BA_C86CFBC3F501",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40219B6B_56A2_332B_41CA_8D2562BB0B4F",
   "pitch": -12.37,
   "yaw": 17.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.15,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 17.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.37,
   "hfov": 5.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1, this.camera_4C948F1E_5662_14EA_41D1_B53850240000); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5AACF93F_54C9_6847_41C0_70A74B648382",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 9.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_0_1_0_map.gif",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.65,
   "hfov": 71.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5A1519F7_54C9_ABC7_41CC_06E7541B3882",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -90.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 4.5,
   "hfov": 105.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B, this.camera_4C918F13_5662_14FA_41D4_ECFA94F18BE2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5B860E01_54C9_E83B_41C6_27F3122816DD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ]
   },
   "pitch": 1.5,
   "hfov": 91.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4758106A_56AE_0D2A_41D4_B63936C99C28",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAA0DFA_56A2_772A_41C3_A8F2633BDB5B",
   "pitch": -10.2,
   "yaw": 102.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.33,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.2,
   "hfov": 4.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_47B0D81F_56AE_3CEA_419C_5A08294F9596",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAA6DFA_56A2_772A_41D5_60BF71D66E6B",
   "pitch": -4.35,
   "yaw": 15.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 15.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.35,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_47CC42A4_56AE_0DDE_41C4_4586BC2900BB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EAA9DFB_56A2_772A_41D3_9E1CF1BA5B6B",
   "pitch": -4.82,
   "yaw": -81.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -81.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.82,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5595D8_5419_606C_41D0_D644098500B8, this.camera_4ACC6123_5662_0CDA_41A9_5A6A59703FD2); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_727EA40C_553B_D849_41C3_D62497F54276",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1F0D3BFA_55C9_AFC8_41AF_05823D544BD3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40212B69_56A2_3357_419E_178FD4FE8319",
   "pitch": -4.33,
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.76,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.33,
   "hfov": 8.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3, this.camera_4B6D6D4E_5662_176A_41C1_9B0651DF4936); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7E56268E_5539_5848_41D5_06408BAA8628",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4B60CD44_5662_175E_41D1_506240F17143); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7E85FFAE_5539_6849_41CC_DB363C38910C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1FE381DF_55CE_BBC7_41C6_3017759F5448",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_437B5E59_56A2_7576_41AE_CE856BABAD12",
   "pitch": -12.62,
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.58,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.62,
   "hfov": 8.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E81D405_56A2_34DE_41D3_41AD6B2929CB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40279B6E_56A2_332D_41CC_6D2F91DD86E5",
   "pitch": -4.14,
   "yaw": 160.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 160.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.14,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58875CB9_541A_E02C_41D3_73B63887517E, this.camera_4B7BAD30_5662_1736_41CF_5DEBDE5C7A81); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_68A859AE_554F_E849_41B2_83AC49094BC1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 70.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0_HS_0_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.5,
   "hfov": 90.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4134B736_56A6_333A_41D2_B54394E25870",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41A17D78_5661_F736_41D1_83FDACE34BC5",
   "pitch": -9.42,
   "yaw": 76.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.34,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 76.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.42,
   "hfov": 4.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB, this.camera_4CD6FE99_5662_15F6_41D2_CD3A2041937A); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_767A61BF_54CB_7847_41BC_649418533AA7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626, this.camera_4897EE0B_5662_14EA_41C9_BAA3C41EC879); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7643CB3F_54CB_A847_41D1_465B924A9189",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE, this.camera_48A67E00_5662_14D6_41A3_9034C5F55F28); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 63.3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_2_0.png",
      "width": 680,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": -5.27,
   "roll": 0
  }
 ],
 "id": "overlay_67BDBC2D_554A_A84B_41C8_E817CF20FFAE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_2_1_6_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.27,
   "hfov": 63.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1F4378F8_55DB_69C9_418E_CF6BD8CD862F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDB7E04_56A2_74DE_41C8_86BD608599EB",
   "pitch": -6.59,
   "yaw": -127.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.55,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -127.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59,
   "hfov": 6.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_41A22766_56BE_735A_41D5_04385C8CB88A",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40220B67_56A2_335B_4189_A92D5D316FA9",
   "pitch": -14.62,
   "yaw": -6.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -6.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.62,
   "hfov": 4.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8, this.camera_4AE7D0D5_5662_0D7E_41D0_4BF4B0146836); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_62849D9A_5559_6849_41C7_3A910DEBAD67",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_412FC393_56A2_13FA_41C3_30967E18AFC8",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40251B73_56A2_333B_41C0_1E0567724BD4",
   "pitch": -3.47,
   "yaw": -83.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -83.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.47,
   "hfov": 3.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_588580AA_541A_E02C_4144_D3F282922A1E, this.camera_4CC97EC7_5662_155A_41D1_855E7ECEF1E7); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6EBF3E0A_554A_E849_41BD_2E94DF748DB5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_6EEC8803_554A_A83F_41C8_9AF385572CD4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C, this.camera_4CCCFED1_5662_1579_41BD_C02BB9A3A96B); this.mainPlayList.set('selectedIndex', 43)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_68740CF7_5549_69C7_41CB_C42E54CE811C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 10.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_2_1_6_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.7,
   "hfov": 73.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EC194A0_56A6_15D6_41D4_C6CFD9302568",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41DB9B76_56A2_333D_41D0_F0E4B1DC7363",
   "pitch": -14.54,
   "yaw": 6.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.54,
   "hfov": 6.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E5C006C_5662_0D2E_41AD_D067AFA4AB69",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -173.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.56,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_7_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ]
   },
   "pitch": -5.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -173.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.24,
   "hfov": 6.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626, this.camera_4AD020FB_5662_0D2A_41D1_65D85F48B32E); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_75813AD7_54CE_A9D8_41BA_A35AA4837D8E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB, this.camera_4AC1410E_5662_0CED_41D5_298D53DB38AC); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_7768E603_54C9_583F_4193_04F17263813D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -145.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_1_1_6_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.06,
   "hfov": 69.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1F0ACE65_55D9_68FB_41D1_9E91EFAAAD5C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDD6E03_56A2_74DA_41CF_ACB4718DA4DC",
   "pitch": -3.08,
   "yaw": -12.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.78,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -12.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.08,
   "hfov": 8.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4E94B549_56A2_1756_41CF_22896B713AC0",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40228B67_56A2_335B_41AC_1C2E5E4778F7",
   "pitch": -14.13,
   "yaw": -120.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.11,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -120.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.13,
   "hfov": 5.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B, this.camera_4CB6BEDC_5662_156E_41BF_851D885DC368); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_68E5DCB1_554E_E85B_41B7_81B9E8A1B6AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EF4BA72_56A2_3D3A_41B0_E4AC81F39AD3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41DA8B78_56A2_3335_41BA_A3F065F84C23",
   "pitch": -10.81,
   "yaw": 52.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.47,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 52.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.81,
   "hfov": 6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_45F06652_54CE_B8D9_41D5_31B2E29318E2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -121.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_0_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.33,
   "hfov": 64.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82, this.camera_4B5B8D59_5662_1776_41D5_B696B9D6B635); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_5BB88345_54C9_7838_41CA_C0A9F967C596",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_1_1_0_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -8.31,
   "hfov": 82.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_44EE0CE6_54C9_E9F9_418F_4F224C02ADEE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -14.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_2_1_0_map.gif",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.78,
   "hfov": 53.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_47BF4BDA_56A2_336A_41D0_B13D80C69BA5",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402FEB5C_56A2_336E_41B2_D08EBCF9BD44",
   "pitch": -8.57,
   "yaw": -66.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -66.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.57,
   "hfov": 4.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_47976DBD_56A2_172E_41BB_C5CD6835A639",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EA80DFB_56A2_772A_419C_1C8B01A34E7B",
   "pitch": -5.2,
   "yaw": -4.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.2,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_40653481_56E2_15D6_41CE_23B01324646F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402FAB5D_56A2_336F_41C8_8259105AF231",
   "pitch": -9.38,
   "yaw": -137.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.34,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -137.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.38,
   "hfov": 4.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4A6BA18E_5662_0FEA_41D3_64D3B01A7DE2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_48187D70_54C6_A8D9_41C6_B566AB6B0F6E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9, this.camera_4A7B717F_5662_0F2A_41BE_9F939652D2FC); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_490D9F80_54C9_A839_41C2_7EF0B5298FED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -14.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_1_1_6_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.32,
   "hfov": 36.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_183FF1EB_55DB_7BCF_41B8_D1266A7560E6",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EA16E01_56A2_74D6_41D0_00029264B181",
   "pitch": -5.4,
   "yaw": -15.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -15.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.4,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "id": "overlay_1BF3F0EC_55DA_F9C9_41C9_DF1AE9811BFD",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EA19E01_56A2_74D6_41D3_A403CA6E0832",
   "pitch": -4.9,
   "yaw": -75.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.38,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -75.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.9,
   "hfov": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B, this.camera_48CE5DE8_5662_1756_41CC_810AEA2A12EB); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_163FE96D_5539_68C8_41C6_001BB8EE3E0A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_16FC03BD_5539_B84B_41BF_BE08436FFDCB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 13.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ]
   },
   "pitch": 2.67,
   "hfov": 70.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_11C4F7DA_553A_A7C9_41CB_AB34A3BEC3C0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_415D3B57_56E2_737A_4190_051CED25F99E",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402F1B5E_56A2_336D_41C7_3C58917A07F8",
   "pitch": -4.11,
   "yaw": 3.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.07,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 3.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.11,
   "hfov": 3.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "id": "overlay_4EE5CFCB_56E6_736A_4195_42BF02D045E2",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_402F2B5E_56A2_336D_41C5_431BF75DD6D0",
   "pitch": -8.69,
   "yaw": 133.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.48,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 133.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.69,
   "hfov": 3.48
  }
 ]
},
{
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 110,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "center",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "91.304%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "data": {
  "name": "-button set container"
 },
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 30,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "height": 51,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB7FDF3_56A2_773A_41C3_8D07A7927BDF",
 "levels": [
  {
   "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_414B661B_56A6_34EA_41D1_EB6387247872",
 "levels": [
  {
   "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB46DF4_56A2_773E_41CD_854C37CC17D6",
 "levels": [
  {
   "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437D2E53_56A2_757A_41CB_23C499010CD8",
 "levels": [
  {
   "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4021EB68_56A2_3355_41D3_8F015A13EEC2",
 "levels": [
  {
   "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EB36DF5_56A2_773E_41BC_B399D4F18044",
 "levels": [
  {
   "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB38DF6_56A2_773A_41D1_CECACBCDF30C",
 "levels": [
  {
   "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB3CDF6_56A2_773A_41B9_E59C6248EBC9",
 "levels": [
  {
   "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_43770E5F_56A2_756A_41D2_00A24A80254F",
 "levels": [
  {
   "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "id": "AnimatedImageResource_4EDEEE02_56A2_74DA_419A_510DDB0F4A6E",
 "levels": [
  {
   "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDF2E02_56A2_74DA_41D2_57D5D6120A8C",
 "levels": [
  {
   "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDF7E02_56A2_74DA_41B9_E8FC012F55D2",
 "levels": [
  {
   "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437A6E57_56A2_757A_41CB_AB88932773F5",
 "levels": [
  {
   "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BC69E3C_5662_152E_4162_F95A4925993D",
 "levels": [
  {
   "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BC55E3D_5662_152E_41AD_8D71F6813B0B",
 "levels": [
  {
   "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402EBB5F_56A2_336B_41D1_742E0D95CC9D",
 "levels": [
  {
   "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BF09E25_5662_14DE_41BF_4EE5C185CD28",
 "levels": [
  {
   "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BF72E25_5662_14DE_41C0_E85EC0DF47BC",
 "levels": [
  {
   "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402D9B61_56A2_3357_41C1_F1D4F6F164CC",
 "levels": [
  {
   "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402DAB61_56A2_3357_41A8_41C41191F51B",
 "levels": [
  {
   "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4026CB70_56A2_3335_41C4_67E48F952A26",
 "levels": [
  {
   "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4EAE6DF7_56A2_773A_41BF_0A532FFE5C84",
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EAEADF7_56A2_773A_4189_47BC6BFED05C",
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAF2DF7_56A2_773A_41B0_F3835922042F",
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4029FB59_56A2_3377_41D2_BB53B6BE2497",
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40204B6E_56A2_332D_418F_DBEC55D6DADF",
 "levels": [
  {
   "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40201B6E_56A2_332D_41A4_7454EAE57A07",
 "levels": [
  {
   "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402D6B61_56A2_3357_41B4_3CE3DEE8778F",
 "levels": [
  {
   "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402D3B61_56A2_3357_41D3_ED5D1D1BB513",
 "levels": [
  {
   "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4376AE5E_56A2_756A_41D2_A4FC6B0FB64A",
 "levels": [
  {
   "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4024FB74_56A2_333D_41CF_1F6B6C3886CD",
 "levels": [
  {
   "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB09DF6_56A2_773A_41CF_EEFFEABCEB40",
 "levels": [
  {
   "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB0DDF6_56A2_773A_41C2_A7C1DCEE2D0F",
 "levels": [
  {
   "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EAEEDF8_56A2_7736_41CF_FA4CF964B6E4",
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EAF3DF8_56A2_7736_41B5_A7EAA00D82E5",
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4EAF5DF9_56A2_7736_41C5_D8D5F5EAFF2B",
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAF9DF9_56A2_7736_4199_6826440989A9",
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40230B66_56A2_335D_41C7_9BB9D878D68C",
 "levels": [
  {
   "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40232B66_56A2_335D_41CB_E033DF572C45",
 "levels": [
  {
   "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437A4E56_56A2_757A_41D5_56E9DFB5FDB6",
 "levels": [
  {
   "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40205B6B_56A2_332B_41D0_0B4BFB3B9030",
 "levels": [
  {
   "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BC0AE3B_5662_152A_41B5_137C171EDDD1",
 "levels": [
  {
   "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41DACB78_56A2_3335_41CE_7CBF3F30DF14",
 "levels": [
  {
   "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40277B6F_56A2_332B_41D2_8DDE4772AE3A",
 "levels": [
  {
   "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40273B70_56A2_3335_41B0_C4AA6E1D9B50",
 "levels": [
  {
   "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EB54DF4_56A2_773E_41A2_4FAC8384DCC3",
 "levels": [
  {
   "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EB5EDF5_56A2_773E_41C0_0FD018A64E70",
 "levels": [
  {
   "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB23DF5_56A2_773E_41BB_D2F731DF7D27",
 "levels": [
  {
   "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "id": "AnimatedImageResource_4EA01E01_56A2_74D6_41D5_33FE79CECA99",
 "levels": [
  {
   "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402C4B63_56A2_335B_41D0_3EA193B28844",
 "levels": [
  {
   "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402C6B63_56A2_335B_41C7_80D5044E6302",
 "levels": [
  {
   "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4F9DB62D_5662_352E_41B0_2161DC703E36",
 "levels": [
  {
   "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40216B69_56A2_3357_41C4_925F00F12C49",
 "levels": [
  {
   "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4F9DE62D_5662_352E_41D1_8B970972ED91",
 "levels": [
  {
   "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4EAC9DF9_56A2_7736_41D5_1C38644CDFB6",
 "levels": [
  {
   "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EACCDFA_56A2_772A_41D4_FCD9AA0A50D5",
 "levels": [
  {
   "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40288B5B_56A2_336B_41D0_3CBF118029AE",
 "levels": [
  {
   "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402CCB62_56A2_3355_41D0_B02CE75AAFB9",
 "levels": [
  {
   "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402F9B5E_56A2_336D_41D3_03611045CC56",
 "levels": [
  {
   "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402FBB5E_56A2_336D_41D1_F7AC317DC6D9",
 "levels": [
  {
   "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40240B75_56A2_333F_41C4_F6180B99F996",
 "levels": [
  {
   "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4378EE5B_56A2_756A_41B6_2BA23B5BA349",
 "levels": [
  {
   "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40267B71_56A2_3337_41A1_8D1141B8EDD4",
 "levels": [
  {
   "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4025BB72_56A2_3335_419C_473DC6861949",
 "levels": [
  {
   "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40255B73_56A2_333B_41BE_D83262664659",
 "levels": [
  {
   "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40262B72_56A2_3335_41C0_535B5BD1E893",
 "levels": [
  {
   "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4025CB72_56A2_3335_41C5_3F6024627A4B",
 "levels": [
  {
   "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB6ADF2_56A2_773A_41D1_4C18C0915556",
 "levels": [
  {
   "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4148561A_56A6_34EA_41D2_A46C01127C88",
 "levels": [
  {
   "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402E0B60_56A2_3355_41A3_64D7B520316A",
 "levels": [
  {
   "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402E2B60_56A2_3355_41C6_3FE3D9E394FE",
 "levels": [
  {
   "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40219B6B_56A2_332B_41CA_8D2562BB0B4F",
 "levels": [
  {
   "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAA0DFA_56A2_772A_41C3_A8F2633BDB5B",
 "levels": [
  {
   "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAA6DFA_56A2_772A_41D5_60BF71D66E6B",
 "levels": [
  {
   "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAA9DFB_56A2_772A_41D3_9E1CF1BA5B6B",
 "levels": [
  {
   "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_40212B69_56A2_3357_419E_178FD4FE8319",
 "levels": [
  {
   "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437B5E59_56A2_7576_41AE_CE856BABAD12",
 "levels": [
  {
   "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40279B6E_56A2_332D_41CC_6D2F91DD86E5",
 "levels": [
  {
   "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41A17D78_5661_F736_41D1_83FDACE34BC5",
 "levels": [
  {
   "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDB7E04_56A2_74DE_41C8_86BD608599EB",
 "levels": [
  {
   "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40220B67_56A2_335B_4189_A92D5D316FA9",
 "levels": [
  {
   "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40251B73_56A2_333B_41C0_1E0567724BD4",
 "levels": [
  {
   "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41DB9B76_56A2_333D_41D0_F0E4B1DC7363",
 "levels": [
  {
   "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDD6E03_56A2_74DA_41CF_ACB4718DA4DC",
 "levels": [
  {
   "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40228B67_56A2_335B_41AC_1C2E5E4778F7",
 "levels": [
  {
   "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41DA8B78_56A2_3335_41BA_A3F065F84C23",
 "levels": [
  {
   "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402FEB5C_56A2_336E_41B2_D08EBCF9BD44",
 "levels": [
  {
   "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EA80DFB_56A2_772A_419C_1C8B01A34E7B",
 "levels": [
  {
   "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402FAB5D_56A2_336F_41C8_8259105AF231",
 "levels": [
  {
   "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EA16E01_56A2_74D6_41D0_00029264B181",
 "levels": [
  {
   "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EA19E01_56A2_74D6_41D3_A403CA6E0832",
 "levels": [
  {
   "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402F1B5E_56A2_336D_41C7_3C58917A07F8",
 "levels": [
  {
   "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402F2B5E_56A2_336D_41C5_431BF75DD6D0",
 "levels": [
  {
   "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "image button menu"
 },
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "data": {
  "name": "IconButton TWITTER"
 },
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/', '_blank')",
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "class": "Player",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
