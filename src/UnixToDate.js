function createDate() {
    for (let index = 0; index < data.length; index++) {
      let unix_time = data[index].UNIX_TIME;
      
      var date = new Date(unix_time * 1000);
      
      data[index].DATE = date.toISOString().split('T')[0];
      data[index].TIME = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
}

const data = [
    {
      "UNIX_TIME": 1655445022,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131154,
      "POSITION_YARDS": 4092,
      "LATITUDE": 51.500071,
      "LONGITUDE": -0.076659,
      "SCORE": 53
    },
    {
      "UNIX_TIME": 1655445023,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131154,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500118,
      "LONGITUDE": -0.076755,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1655445035,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131154,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.50081,
      "LONGITUDE": -0.078005,
      "SCORE": 68
    },
    {
      "UNIX_TIME": 1655445314,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131154,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504149,
      "LONGITUDE": -0.101938,
      "SCORE": 78
    },
    {
      "UNIX_TIME": 1655446595,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131158,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504216,
      "LONGITUDE": -0.102105,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1655452172,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 9262,
      "LATITUDE": 51.471327,
      "LONGITUDE": -0.02721,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1655452187,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 9130,
      "LATITUDE": 51.472509,
      "LONGITUDE": -0.029157,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1655452440,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.50012,
      "LONGITUDE": -0.076693,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1655452448,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500795,
      "LONGITUDE": -0.077997,
      "SCORE": 74
    },
    {
      "UNIX_TIME": 1655452746,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504197,
      "LONGITUDE": -0.101853,
      "SCORE": 79
    },
    {
      "UNIX_TIME": 1655452747,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504202,
      "LONGITUDE": -0.101953,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1655452830,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 1364,
      "LATITUDE": 51.504316,
      "LONGITUDE": -0.108476,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1655453000,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 792,
      "LATITUDE": 51.504755,
      "LONGITUDE": -0.11544,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1655453001,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131174,
      "POSITION_YARDS": 792,
      "LATITUDE": 51.504771,
      "LONGITUDE": -0.115508,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1655454000,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131176,
      "POSITION_YARDS": 792,
      "LATITUDE": 51.504868,
      "LONGITUDE": -0.115626,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1655704013,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 9130,
      "LATITUDE": 51.472507,
      "LONGITUDE": -0.029143,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1655704274,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 4092,
      "LATITUDE": 51.500015,
      "LONGITUDE": -0.076469,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1655704275,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500094,
      "LONGITUDE": -0.076652,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1655704283,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500816,
      "LONGITUDE": -0.077962,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1655704575,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504153,
      "LONGITUDE": -0.101782,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1655704576,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504164,
      "LONGITUDE": -0.101929,
      "SCORE": 70
    },
    {
      "UNIX_TIME": 1655704625,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 1342,
      "LATITUDE": 51.504288,
      "LONGITUDE": -0.10852,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1655705811,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504186,
      "LONGITUDE": -0.102084,
      "SCORE": 70
    },
    {
      "UNIX_TIME": 1655705812,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504171,
      "LONGITUDE": -0.101953,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1655706228,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492321,
      "LONGITUDE": -0.060303,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1655706229,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131379,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492277,
      "LONGITUDE": -0.060198,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1655711402,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.47266,
      "LONGITUDE": -0.029188,
      "SCORE": 68
    },
    {
      "UNIX_TIME": 1655711676,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 4092,
      "LATITUDE": 51.500094,
      "LONGITUDE": -0.076683,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1655711677,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500149,
      "LONGITUDE": -0.076778,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1655711689,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 3960,
      "LATITUDE": 51.500799,
      "LONGITUDE": -0.077955,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1655711690,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500854,
      "LONGITUDE": -0.078073,
      "SCORE": 68
    },
    {
      "UNIX_TIME": 1655711711,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502061,
      "LONGITUDE": -0.080302,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1655712031,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504163,
      "LONGITUDE": -0.101812,
      "SCORE": 69
    },
    {
      "UNIX_TIME": 1655712032,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131396,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504174,
      "LONGITUDE": -0.101933,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1655713345,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131408,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504207,
      "LONGITUDE": -0.102192,
      "SCORE": 67
    },
    {
      "UNIX_TIME": 1655721443,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131425,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472684,
      "LONGITUDE": -0.029216,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1655721724,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131425,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.50083,
      "LONGITUDE": -0.077974,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1655722028,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131425,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504156,
      "LONGITUDE": -0.101717,
      "SCORE": 74
    },
    {
      "UNIX_TIME": 1655722029,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 131425,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504167,
      "LONGITUDE": -0.101878,
      "SCORE": 79
    },
    {
      "UNIX_TIME": 1656308984,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132525,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.5001,
      "LONGITUDE": -0.076791,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656308985,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132525,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500157,
      "LONGITUDE": -0.076911,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656308998,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132525,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500896,
      "LONGITUDE": -0.078269,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656308997,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132525,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500837,
      "LONGITUDE": -0.078167,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1656309301,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132525,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.50411,
      "LONGITUDE": -0.102013,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1656309302,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132525,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.50413,
      "LONGITUDE": -0.102115,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656310588,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132528,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.503949,
      "LONGITUDE": -0.10217,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656316534,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132537,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.50017,
      "LONGITUDE": -0.076868,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656316535,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132537,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500193,
      "LONGITUDE": -0.07691,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656316536,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132537,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500219,
      "LONGITUDE": -0.076956,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656316552,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132537,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500899,
      "LONGITUDE": -0.078186,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656316553,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132537,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500952,
      "LONGITUDE": -0.078284,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656316908,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132537,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504141,
      "LONGITUDE": -0.102088,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1656317892,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132542,
      "POSITION_YARDS": 374,
      "LATITUDE": 51.506328,
      "LONGITUDE": -0.12066,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656326517,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132562,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500252,
      "LONGITUDE": -0.076981,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656326529,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132562,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500952,
      "LONGITUDE": -0.078341,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656326822,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132562,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504159,
      "LONGITUDE": -0.102049,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1656328563,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132565,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504162,
      "LONGITUDE": -0.102377,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656334177,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132588,
      "POSITION_YARDS": 9262,
      "LATITUDE": 51.471798,
      "LONGITUDE": -0.027955,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1656334197,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132588,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472686,
      "LONGITUDE": -0.029334,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1656334457,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132588,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500117,
      "LONGITUDE": -0.07692,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656334467,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132588,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500858,
      "LONGITUDE": -0.07827,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656334785,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132588,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504067,
      "LONGITUDE": -0.101924,
      "SCORE": 73
    },
    {
      "UNIX_TIME": 1656336208,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132595,
      "POSITION_YARDS": 2530,
      "LATITUDE": 51.504427,
      "LONGITUDE": -0.093322,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656336270,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132595,
      "POSITION_YARDS": 3190,
      "LATITUDE": 51.504947,
      "LONGITUDE": -0.085552,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1656336312,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132595,
      "POSITION_YARDS": 3454,
      "LATITUDE": 51.503413,
      "LONGITUDE": -0.083104,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1656336565,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132595,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.492348,
      "LONGITUDE": -0.060511,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1656395296,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500193,
      "LONGITUDE": -0.076775,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656395310,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500847,
      "LONGITUDE": -0.078039,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656395311,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.50089,
      "LONGITUDE": -0.078119,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656395629,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.50419,
      "LONGITUDE": -0.101794,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1656395630,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504198,
      "LONGITUDE": -0.101856,
      "SCORE": 69
    },
    {
      "UNIX_TIME": 1656395631,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504208,
      "LONGITUDE": -0.101917,
      "SCORE": 78
    },
    {
      "UNIX_TIME": 1656395632,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132743,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504229,
      "LONGITUDE": -0.101955,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1656396980,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132760,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504236,
      "LONGITUDE": -0.102093,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656396981,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132760,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504241,
      "LONGITUDE": -0.102031,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1656396982,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132760,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504243,
      "LONGITUDE": -0.101978,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656396983,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132760,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504249,
      "LONGITUDE": -0.101929,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1656402524,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 9130,
      "LATITUDE": 51.472551,
      "LONGITUDE": -0.029078,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656402525,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472638,
      "LONGITUDE": -0.029193,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656402830,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 4092,
      "LATITUDE": 51.500028,
      "LONGITUDE": -0.076502,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656402831,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500101,
      "LONGITUDE": -0.076646,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656402840,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 3960,
      "LATITUDE": 51.500766,
      "LONGITUDE": -0.077913,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656403132,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504152,
      "LONGITUDE": -0.101822,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656403133,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504156,
      "LONGITUDE": -0.101935,
      "SCORE": 78
    },
    {
      "UNIX_TIME": 1656403134,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504169,
      "LONGITUDE": -0.102027,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1656403338,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132775,
      "POSITION_YARDS": 1012,
      "LATITUDE": 51.50404,
      "LONGITUDE": -0.112804,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656404510,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132781,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504191,
      "LONGITUDE": -0.102244,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656404961,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132781,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492284,
      "LONGITUDE": -0.060256,
      "SCORE": 58
    },
    {
      "UNIX_TIME": 1656412915,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132792,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500222,
      "LONGITUDE": -0.076619,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656412924,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132792,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.501021,
      "LONGITUDE": -0.078032,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1656413217,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132792,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504177,
      "LONGITUDE": -0.101708,
      "SCORE": 74
    },
    {
      "UNIX_TIME": 1656413218,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132792,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504163,
      "LONGITUDE": -0.101851,
      "SCORE": 77
    },
    {
      "UNIX_TIME": 1656414963,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132796,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.5042,
      "LONGITUDE": -0.102073,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656420685,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500138,
      "LONGITUDE": -0.076758,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656420693,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500866,
      "LONGITUDE": -0.078082,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1656420738,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 3454,
      "LATITUDE": 51.503307,
      "LONGITUDE": -0.083096,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656420933,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2838,
      "LATITUDE": 51.50547,
      "LONGITUDE": -0.089316,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1656420943,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2750,
      "LATITUDE": 51.505248,
      "LONGITUDE": -0.090518,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656420946,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2728,
      "LATITUDE": 51.505174,
      "LONGITUDE": -0.090888,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1656420968,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2508,
      "LATITUDE": 51.50444,
      "LONGITUDE": -0.093452,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1656420969,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2486,
      "LATITUDE": 51.504403,
      "LONGITUDE": -0.093564,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1656420984,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2310,
      "LATITUDE": 51.504133,
      "LONGITUDE": -0.095838,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1656420985,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 2310,
      "LATITUDE": 51.504125,
      "LONGITUDE": -0.096,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1656421021,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504114,
      "LONGITUDE": -0.101828,
      "SCORE": 70
    },
    {
      "UNIX_TIME": 1656421022,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132806,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504117,
      "LONGITUDE": -0.101989,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1656422966,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132808,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492391,
      "LONGITUDE": -0.060506,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656422967,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132808,
      "POSITION_YARDS": 5698,
      "LATITUDE": 51.49226,
      "LONGITUDE": -0.060202,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656481474,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 10406,
      "LATITUDE": 51.465367,
      "LONGITUDE": -0.017668,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656481475,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 10384,
      "LATITUDE": 51.465457,
      "LONGITUDE": -0.017667,
      "SCORE": 40
    },
    {
      "UNIX_TIME": 1656481532,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 9218,
      "LATITUDE": 51.471446,
      "LONGITUDE": -0.027464,
      "SCORE": 43
    },
    {
      "UNIX_TIME": 1656481540,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472629,
      "LONGITUDE": -0.029196,
      "SCORE": 43
    },
    {
      "UNIX_TIME": 1656481754,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500263,
      "LONGITUDE": -0.076922,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656481755,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500333,
      "LONGITUDE": -0.077049,
      "SCORE": 48
    },
    {
      "UNIX_TIME": 1656481765,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500964,
      "LONGITUDE": -0.078258,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1656481766,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.501014,
      "LONGITUDE": -0.078385,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1656481787,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502107,
      "LONGITUDE": -0.080429,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1656481788,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502161,
      "LONGITUDE": -0.080528,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656482107,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504151,
      "LONGITUDE": -0.101934,
      "SCORE": 69
    },
    {
      "UNIX_TIME": 1656482108,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132866,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504189,
      "LONGITUDE": -0.102083,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656483799,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132867,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.49248,
      "LONGITUDE": -0.060673,
      "SCORE": 47
    },
    {
      "UNIX_TIME": 1656483800,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132867,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492362,
      "LONGITUDE": -0.060416,
      "SCORE": 41
    },
    {
      "UNIX_TIME": 1656483366,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132867,
      "POSITION_YARDS": 1826,
      "LATITUDE": 51.504168,
      "LONGITUDE": -0.102462,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1656488948,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 9130,
      "LATITUDE": 51.472567,
      "LONGITUDE": -0.029079,
      "SCORE": 48
    },
    {
      "UNIX_TIME": 1656488949,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472677,
      "LONGITUDE": -0.029226,
      "SCORE": 46
    },
    {
      "UNIX_TIME": 1656489087,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492106,
      "LONGITUDE": -0.059888,
      "SCORE": 48
    },
    {
      "UNIX_TIME": 1656489088,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.492227,
      "LONGITUDE": -0.06016,
      "SCORE": 46
    },
    {
      "UNIX_TIME": 1656489162,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500162,
      "LONGITUDE": -0.076739,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656489163,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500241,
      "LONGITUDE": -0.076886,
      "SCORE": 53
    },
    {
      "UNIX_TIME": 1656489173,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500888,
      "LONGITUDE": -0.078113,
      "SCORE": 70
    },
    {
      "UNIX_TIME": 1656489174,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500953,
      "LONGITUDE": -0.078229,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1656489197,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502069,
      "LONGITUDE": -0.080382,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656489198,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132874,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502123,
      "LONGITUDE": -0.080481,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1656489563,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132877,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504118,
      "LONGITUDE": -0.101959,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1656489564,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132877,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504114,
      "LONGITUDE": -0.102095,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656489676,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132877,
      "POSITION_YARDS": 1342,
      "LATITUDE": 51.504189,
      "LONGITUDE": -0.108602,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656489736,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132877,
      "POSITION_YARDS": 792,
      "LATITUDE": 51.504752,
      "LONGITUDE": -0.115556,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1656489737,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132877,
      "POSITION_YARDS": 770,
      "LATITUDE": 51.504781,
      "LONGITUDE": -0.115701,
      "SCORE": 44
    },
    {
      "UNIX_TIME": 1656491248,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132878,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502192,
      "LONGITUDE": -0.080487,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656490752,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132878,
      "POSITION_YARDS": 770,
      "LATITUDE": 51.504925,
      "LONGITUDE": -0.115843,
      "SCORE": 48
    },
    {
      "UNIX_TIME": 1656490802,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132878,
      "POSITION_YARDS": 1342,
      "LATITUDE": 51.504155,
      "LONGITUDE": -0.108935,
      "SCORE": 41
    },
    {
      "UNIX_TIME": 1656490903,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132878,
      "POSITION_YARDS": 1826,
      "LATITUDE": 51.504174,
      "LONGITUDE": -0.102493,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656491349,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132878,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492344,
      "LONGITUDE": -0.060431,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1656491247,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132878,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502243,
      "LONGITUDE": -0.08059,
      "SCORE": 44
    },
    {
      "UNIX_TIME": 1656499451,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132919,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500147,
      "LONGITUDE": -0.076795,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656499452,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132919,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500213,
      "LONGITUDE": -0.076928,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656499464,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132919,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500884,
      "LONGITUDE": -0.078192,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1656499465,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132919,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500936,
      "LONGITUDE": -0.078287,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656499753,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132919,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504166,
      "LONGITUDE": -0.101967,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1656499754,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 132919,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504171,
      "LONGITUDE": -0.10212,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656567907,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472545,
      "LONGITUDE": -0.029071,
      "SCORE": 53
    },
    {
      "UNIX_TIME": 1656568135,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500118,
      "LONGITUDE": -0.076696,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656568136,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500181,
      "LONGITUDE": -0.076815,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656568146,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500806,
      "LONGITUDE": -0.078021,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656568165,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502026,
      "LONGITUDE": -0.080194,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656568166,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502076,
      "LONGITUDE": -0.080288,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656568476,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504173,
      "LONGITUDE": -0.101773,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656568477,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504178,
      "LONGITUDE": -0.10188,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1656568478,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133114,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504187,
      "LONGITUDE": -0.101986,
      "SCORE": 77
    },
    {
      "UNIX_TIME": 1656570205,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133118,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492359,
      "LONGITUDE": -0.060413,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656569797,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133118,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504233,
      "LONGITUDE": -0.102146,
      "SCORE": 73
    },
    {
      "UNIX_TIME": 1656569798,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133118,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504209,
      "LONGITUDE": -0.10211,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1656569799,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133118,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504189,
      "LONGITUDE": -0.102075,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656569800,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133118,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504176,
      "LONGITUDE": -0.102041,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656569801,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133118,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.50417,
      "LONGITUDE": -0.102008,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1656654246,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 10406,
      "LATITUDE": 51.465377,
      "LONGITUDE": -0.017696,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1656654312,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 9262,
      "LATITUDE": 51.471731,
      "LONGITUDE": -0.027889,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1656654526,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500101,
      "LONGITUDE": -0.076687,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656654527,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500211,
      "LONGITUDE": -0.07684,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656654538,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500911,
      "LONGITUDE": -0.078214,
      "SCORE": 67
    },
    {
      "UNIX_TIME": 1656654539,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500958,
      "LONGITUDE": -0.078321,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1656654843,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504151,
      "LONGITUDE": -0.102019,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656654844,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 1826,
      "LATITUDE": 51.504156,
      "LONGITUDE": -0.102153,
      "SCORE": 69
    },
    {
      "UNIX_TIME": 1656655042,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 792,
      "LATITUDE": 51.50476,
      "LONGITUDE": -0.115543,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656655043,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133339,
      "POSITION_YARDS": 770,
      "LATITUDE": 51.504795,
      "LONGITUDE": -0.115668,
      "SCORE": 43
    },
    {
      "UNIX_TIME": 1656656183,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133340,
      "POSITION_YARDS": 1826,
      "LATITUDE": 51.504143,
      "LONGITUDE": -0.102429,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656656059,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133340,
      "POSITION_YARDS": 1342,
      "LATITUDE": 51.504138,
      "LONGITUDE": -0.108936,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1656656184,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133340,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504137,
      "LONGITUDE": -0.102307,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1656656060,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133340,
      "POSITION_YARDS": 1342,
      "LATITUDE": 51.504158,
      "LONGITUDE": -0.108794,
      "SCORE": 47
    },
    {
      "UNIX_TIME": 1656661800,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472714,
      "LONGITUDE": -0.029324,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1656661941,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.492167,
      "LONGITUDE": -0.06012,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1656662049,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500107,
      "LONGITUDE": -0.076764,
      "SCORE": 58
    },
    {
      "UNIX_TIME": 1656662050,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500183,
      "LONGITUDE": -0.076893,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656662061,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500869,
      "LONGITUDE": -0.078237,
      "SCORE": 72
    },
    {
      "UNIX_TIME": 1656662062,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.50091,
      "LONGITUDE": -0.078335,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1656662084,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502051,
      "LONGITUDE": -0.080451,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1656662391,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504118,
      "LONGITUDE": -0.101912,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1656662392,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133347,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504119,
      "LONGITUDE": -0.102058,
      "SCORE": 78
    },
    {
      "UNIX_TIME": 1656914034,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504152,
      "LONGITUDE": -0.101858,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1656913462,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 9130,
      "LATITUDE": 51.472411,
      "LONGITUDE": -0.029041,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656913381,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 10406,
      "LATITUDE": 51.465291,
      "LONGITUDE": -0.017604,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1656914035,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504157,
      "LONGITUDE": -0.101922,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1656914036,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504161,
      "LONGITUDE": -0.101986,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1656913706,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 4092,
      "LATITUDE": 51.500218,
      "LONGITUDE": -0.076751,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656913718,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500843,
      "LONGITUDE": -0.07801,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656913717,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133629,
      "POSITION_YARDS": 3960,
      "LATITUDE": 51.500803,
      "LONGITUDE": -0.077899,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1656915238,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133636,
      "POSITION_YARDS": 792,
      "LATITUDE": 51.504905,
      "LONGITUDE": -0.115632,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656915382,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133636,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504236,
      "LONGITUDE": -0.102071,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1656915383,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133636,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504209,
      "LONGITUDE": -0.101951,
      "SCORE": 47
    },
    {
      "UNIX_TIME": 1656999810,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 10406,
      "LATITUDE": 51.465327,
      "LONGITUDE": -0.017665,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1656999811,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 10406,
      "LATITUDE": 51.465389,
      "LONGITUDE": -0.017692,
      "SCORE": 41
    },
    {
      "UNIX_TIME": 1656999900,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 9262,
      "LATITUDE": 51.47144,
      "LONGITUDE": -0.027563,
      "SCORE": 40
    },
    {
      "UNIX_TIME": 1657000100,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500136,
      "LONGITUDE": -0.076831,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1657000111,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500845,
      "LONGITUDE": -0.078137,
      "SCORE": 74
    },
    {
      "UNIX_TIME": 1657000112,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.5009,
      "LONGITUDE": -0.078244,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1657000132,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502008,
      "LONGITUDE": -0.080342,
      "SCORE": 40
    },
    {
      "UNIX_TIME": 1657000384,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 1870,
      "LATITUDE": 51.504052,
      "LONGITUDE": -0.101793,
      "SCORE": 78
    },
    {
      "UNIX_TIME": 1657000385,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133822,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504065,
      "LONGITUDE": -0.10195,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1657001632,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133825,
      "POSITION_YARDS": 1342,
      "LATITUDE": 51.504204,
      "LONGITUDE": -0.108872,
      "SCORE": 44
    },
    {
      "UNIX_TIME": 1657001747,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133825,
      "POSITION_YARDS": 1826,
      "LATITUDE": 51.504143,
      "LONGITUDE": -0.102487,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1657001748,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133825,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504141,
      "LONGITUDE": -0.102358,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1657001749,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 133825,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504147,
      "LONGITUDE": -0.102258,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1657172916,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.49224,
      "LONGITUDE": -0.060257,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1657172990,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500146,
      "LONGITUDE": -0.076774,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1657173002,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.500816,
      "LONGITUDE": -0.078112,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1657172991,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 4048,
      "LATITUDE": 51.500213,
      "LONGITUDE": -0.076895,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1657173003,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.50086,
      "LONGITUDE": -0.078201,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1657173025,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.501973,
      "LONGITUDE": -0.080369,
      "SCORE": 47
    },
    {
      "UNIX_TIME": 1657173296,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134357,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504059,
      "LONGITUDE": -0.102022,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1657174583,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134366,
      "POSITION_YARDS": 1848,
      "LATITUDE": 51.504135,
      "LONGITUDE": -0.102401,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1657174998,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134366,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.492418,
      "LONGITUDE": -0.060601,
      "SCORE": 48
    },
    {
      "UNIX_TIME": 1657180302,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 9262,
      "LATITUDE": 51.471299,
      "LONGITUDE": -0.027253,
      "SCORE": 53
    },
    {
      "UNIX_TIME": 1657180315,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472584,
      "LONGITUDE": -0.029103,
      "SCORE": 43
    },
    {
      "UNIX_TIME": 1657180493,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.492178,
      "LONGITUDE": -0.060158,
      "SCORE": 58
    },
    {
      "UNIX_TIME": 1657180494,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 5654,
      "LATITUDE": 51.492259,
      "LONGITUDE": -0.060338,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1657180587,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500077,
      "LONGITUDE": -0.076804,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1657180588,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 4070,
      "LATITUDE": 51.500147,
      "LONGITUDE": -0.07693,
      "SCORE": 53
    },
    {
      "UNIX_TIME": 1657180600,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 3938,
      "LATITUDE": 51.50086,
      "LONGITUDE": -0.078203,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1657180601,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 3916,
      "LATITUDE": 51.500914,
      "LONGITUDE": -0.078315,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1657180622,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134379,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502083,
      "LONGITUDE": -0.080458,
      "SCORE": 45
    },
    {
      "UNIX_TIME": 1657182497,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134395,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502242,
      "LONGITUDE": -0.080632,
      "SCORE": 42
    },
    {
      "UNIX_TIME": 1657182594,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134395,
      "POSITION_YARDS": 5676,
      "LATITUDE": 51.492436,
      "LONGITUDE": -0.060518,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1657182498,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134395,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502178,
      "LONGITUDE": -0.080537,
      "SCORE": 51
    },
    {
      "UNIX_TIME": 1657517549,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134842,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502228,
      "LONGITUDE": -0.080201,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1657517550,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134842,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502283,
      "LONGITUDE": -0.080283,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1657519118,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134846,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502409,
      "LONGITUDE": -0.080472,
      "SCORE": 47
    },
    {
      "UNIX_TIME": 1657519119,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134846,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502357,
      "LONGITUDE": -0.08037,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1657519120,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134846,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502301,
      "LONGITUDE": -0.080274,
      "SCORE": 75
    },
    {
      "UNIX_TIME": 1657526167,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134900,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502326,
      "LONGITUDE": -0.080199,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1657526447,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134900,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.479982,
      "LONGITUDE": -0.034964,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1657527661,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134900,
      "POSITION_YARDS": 19448,
      "LATITUDE": 51.407792,
      "LONGITUDE": 0.054481,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1657528025,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134900,
      "POSITION_YARDS": 22880,
      "LATITUDE": 51.384216,
      "LONGITUDE": 0.078831,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1657528108,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134900,
      "POSITION_YARDS": 23826,
      "LATITUDE": 51.377498,
      "LONGITUDE": 0.085407,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1657530028,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 134922,
      "POSITION_YARDS": 11352,
      "LATITUDE": 51.458367,
      "LONGITUDE": -0.012985,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1657690301,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135417,
      "POSITION_YARDS": 3740,
      "LATITUDE": 51.502067,
      "LONGITUDE": -0.079864,
      "SCORE": 44
    },
    {
      "UNIX_TIME": 1657698929,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.50246,
      "LONGITUDE": -0.080502,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1657698930,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502398,
      "LONGITUDE": -0.08039,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1657698931,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502334,
      "LONGITUDE": -0.080273,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1657699171,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 8118,
      "LATITUDE": 51.480256,
      "LONGITUDE": -0.03517,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1657699987,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 15048,
      "LATITUDE": 51.434923,
      "LONGITUDE": 0.016342,
      "SCORE": 47
    },
    {
      "UNIX_TIME": 1657700341,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 19404,
      "LATITUDE": 51.408064,
      "LONGITUDE": 0.054032,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1657700342,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 19426,
      "LATITUDE": 51.407954,
      "LONGITUDE": 0.054227,
      "SCORE": 77
    },
    {
      "UNIX_TIME": 1657700651,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 22902,
      "LATITUDE": 51.384023,
      "LONGITUDE": 0.078967,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1657700719,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135451,
      "POSITION_YARDS": 23804,
      "LATITUDE": 51.37761,
      "LONGITUDE": 0.085225,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1657701732,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 23804,
      "LATITUDE": 51.377481,
      "LONGITUDE": 0.0854,
      "SCORE": 58
    },
    {
      "UNIX_TIME": 1657701777,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 23100,
      "LATITUDE": 51.382398,
      "LONGITUDE": 0.080488,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1657701778,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 23078,
      "LATITUDE": 51.382549,
      "LONGITUDE": 0.080344,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1657701787,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 22902,
      "LATITUDE": 51.383697,
      "LONGITUDE": 0.079201,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1657701788,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 22902,
      "LATITUDE": 51.383829,
      "LONGITUDE": 0.079076,
      "SCORE": 58
    },
    {
      "UNIX_TIME": 1657701790,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 22858,
      "LATITUDE": 51.384073,
      "LONGITUDE": 0.078838,
      "SCORE": 53
    },
    {
      "UNIX_TIME": 1657701791,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135456,
      "POSITION_YARDS": 22836,
      "LATITUDE": 51.384192,
      "LONGITUDE": 0.078712,
      "SCORE": 48
    },
    {
      "UNIX_TIME": 1657703379,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135468,
      "POSITION_YARDS": 8514,
      "LATITUDE": 51.476929,
      "LONGITUDE": -0.033101,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1657703621,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135468,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502259,
      "LONGITUDE": -0.080342,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1657705169,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 135478,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502291,
      "LONGITUDE": -0.080245,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1657712830,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136403,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.480012,
      "LONGITUDE": -0.03497,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1658123940,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136503,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.50233,
      "LONGITUDE": -0.080346,
      "SCORE": 67
    },
    {
      "UNIX_TIME": 1658123941,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136503,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.50228,
      "LONGITUDE": -0.080253,
      "SCORE": 67
    },
    {
      "UNIX_TIME": 1658123939,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136503,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502376,
      "LONGITUDE": -0.08044,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1658129061,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136533,
      "POSITION_YARDS": 3740,
      "LATITUDE": 51.502147,
      "LONGITUDE": -0.07993,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1658129062,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136533,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502201,
      "LONGITUDE": -0.080028,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1658134301,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136607,
      "POSITION_YARDS": 16698,
      "LATITUDE": 51.424951,
      "LONGITUDE": 0.031754,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1658130896,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502362,
      "LONGITUDE": -0.080157,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1658130897,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 3740,
      "LATITUDE": 51.502294,
      "LONGITUDE": -0.080037,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1658131156,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.480049,
      "LONGITUDE": -0.035017,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1658131157,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.47995,
      "LONGITUDE": -0.034953,
      "SCORE": 50
    },
    {
      "UNIX_TIME": 1658131164,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 8250,
      "LATITUDE": 51.479242,
      "LONGITUDE": -0.034488,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1658132438,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 19426,
      "LATITUDE": 51.408036,
      "LONGITUDE": 0.054243,
      "SCORE": 67
    },
    {
      "UNIX_TIME": 1658132440,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 19448,
      "LATITUDE": 51.407888,
      "LONGITUDE": 0.054393,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1658132557,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136557,
      "POSITION_YARDS": 20702,
      "LATITUDE": 51.399452,
      "LONGITUDE": 0.063953,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1658210319,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136774,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502319,
      "LONGITUDE": -0.080315,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1658210320,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136774,
      "POSITION_YARDS": 3740,
      "LATITUDE": 51.502259,
      "LONGITUDE": -0.080195,
      "SCORE": 70
    },
    {
      "UNIX_TIME": 1658217296,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136850,
      "POSITION_YARDS": 3740,
      "LATITUDE": 51.502296,
      "LONGITUDE": -0.080237,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1658217486,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136850,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.479991,
      "LONGITUDE": -0.03501,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1658218805,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136869,
      "POSITION_YARDS": 19426,
      "LATITUDE": 51.407904,
      "LONGITUDE": 0.054356,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1658218806,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 136869,
      "POSITION_YARDS": 19448,
      "LATITUDE": 51.407832,
      "LONGITUDE": 0.054441,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1658303685,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.50237,
      "LONGITUDE": -0.080394,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1658303876,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 8118,
      "LATITUDE": 51.480231,
      "LONGITUDE": -0.0352,
      "SCORE": 59
    },
    {
      "UNIX_TIME": 1658303686,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.502308,
      "LONGITUDE": -0.080281,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1658303869,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 7964,
      "LATITUDE": 51.481315,
      "LONGITUDE": -0.035931,
      "SCORE": 43
    },
    {
      "UNIX_TIME": 1658303877,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.480082,
      "LONGITUDE": -0.0351,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1658305556,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 23804,
      "LATITUDE": 51.377621,
      "LONGITUDE": 0.085259,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1658304736,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 15048,
      "LATITUDE": 51.434962,
      "LONGITUDE": 0.016356,
      "SCORE": 49
    },
    {
      "UNIX_TIME": 1658305125,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137402,
      "POSITION_YARDS": 19404,
      "LATITUDE": 51.4082,
      "LONGITUDE": 0.054002,
      "SCORE": 66
    },
    {
      "UNIX_TIME": 1658306599,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137408,
      "POSITION_YARDS": 22880,
      "LATITUDE": 51.383859,
      "LONGITUDE": 0.079078,
      "SCORE": 57
    },
    {
      "UNIX_TIME": 1658306591,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137408,
      "POSITION_YARDS": 23056,
      "LATITUDE": 51.382684,
      "LONGITUDE": 0.080208,
      "SCORE": 62
    },
    {
      "UNIX_TIME": 1658306899,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137408,
      "POSITION_YARDS": 19360,
      "LATITUDE": 51.408203,
      "LONGITUDE": 0.053881,
      "SCORE": 63
    },
    {
      "UNIX_TIME": 1658307038,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137408,
      "POSITION_YARDS": 17094,
      "LATITUDE": 51.418935,
      "LONGITUDE": 0.041668,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1658308181,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 137419,
      "POSITION_YARDS": 8206,
      "LATITUDE": 51.479255,
      "LONGITUDE": -0.034605,
      "SCORE": 67
    },
    {
      "UNIX_TIME": 1658830032,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138598,
      "POSITION_YARDS": 8118,
      "LATITUDE": 51.480285,
      "LONGITUDE": -0.03518,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1658829695,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138598,
      "POSITION_YARDS": 3718,
      "LATITUDE": 51.50236,
      "LONGITUDE": -0.080396,
      "SCORE": 52
    },
    {
      "UNIX_TIME": 1659083039,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138946,
      "POSITION_YARDS": 19426,
      "LATITUDE": 51.408071,
      "LONGITUDE": 0.054112,
      "SCORE": 71
    },
    {
      "UNIX_TIME": 1659083413,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138946,
      "POSITION_YARDS": 23804,
      "LATITUDE": 51.377638,
      "LONGITUDE": 0.085197,
      "SCORE": 70
    },
    {
      "UNIX_TIME": 1659084129,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 23804,
      "LATITUDE": 51.377505,
      "LONGITUDE": 0.085321,
      "SCORE": 58
    },
    {
      "UNIX_TIME": 1659084178,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 22902,
      "LATITUDE": 51.383718,
      "LONGITUDE": 0.07921,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1659084179,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 22880,
      "LATITUDE": 51.383855,
      "LONGITUDE": 0.07906,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1659084523,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 19338,
      "LATITUDE": 51.408374,
      "LONGITUDE": 0.053723,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1659084588,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 18194,
      "LATITUDE": 51.416215,
      "LONGITUDE": 0.045342,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1659084589,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 18194,
      "LATITUDE": 51.416264,
      "LONGITUDE": 0.045253,
      "SCORE": 60
    },
    {
      "UNIX_TIME": 1659084668,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 17072,
      "LATITUDE": 51.418913,
      "LONGITUDE": 0.041727,
      "SCORE": 55
    },
    {
      "UNIX_TIME": 1659084668,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 17072,
      "LATITUDE": 51.418913,
      "LONGITUDE": 0.041727,
      "SCORE": 54
    },
    {
      "UNIX_TIME": 1659085584,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 9108,
      "LATITUDE": 51.472743,
      "LONGITUDE": -0.029373,
      "SCORE": 61
    },
    {
      "UNIX_TIME": 1659085694,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 8162,
      "LATITUDE": 51.479543,
      "LONGITUDE": -0.034783,
      "SCORE": 80
    },
    {
      "UNIX_TIME": 1659085695,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 8140,
      "LATITUDE": 51.479668,
      "LONGITUDE": -0.034855,
      "SCORE": 76
    },
    {
      "UNIX_TIME": 1659085916,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138964,
      "POSITION_YARDS": 3696,
      "LATITUDE": 51.502279,
      "LONGITUDE": -0.080265,
      "SCORE": 64
    },
    {
      "UNIX_TIME": 1659096832,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 139016,
      "POSITION_YARDS": 2882,
      "LATITUDE": 51.505768,
      "LONGITUDE": -0.089028,
      "SCORE": 56
    },
    {
      "UNIX_TIME": 1659094718,
      "ASSET_NAME": "Temperature Exceedence",
      "RECORDING_ID": 138998,
      "POSITION_YARDS": 8184,
      "LATITUDE": 51.479369,
      "LONGITUDE": -0.034707,
      "SCORE": 79
    }
   ]