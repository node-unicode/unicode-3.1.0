module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,93,153,201,146,237,186,113,69,255,229,141,61,40,0,9,54,67,146,137,252,9,219,3,55,106,108,73,238,101,91,250,122,211,161,179,42,98,213,128,47,18,175,14,54,115,103,177,246,2,207,253,235,95,254,238,151,191,250,229,239,223,235,31,222,235,31,223,235,87,239,245,235,247,250,205,123,253,246,189,254,233,189,254,249,189,126,247,94,191,127,175,63,188,215,191,188,215,191,190,215,191,189,215,191,191,215,127,188,215,127,190,215,127,189,215,31,223,235,191,223,235,127,222,235,127,223,235,79,239,245,231,247,250,155,63,126,125,93,215,167,184,39,5,255,39,235,83,172,47,138,70,209,41,6,69,80,160,179,54,138,157,226,160,56,41,184,215,186,41,30,138,164,88,20,244,83,244,83,244,83,244,83,244,83,244,83,244,83,244,83,180,81,180,81,180,81,180,81,180,81,180,81,180,81,159,54,218,87,163,24,20,147,98,167,56,41,110,138,164,64,167,161,211,208,105,232,52,116,26,58,13,157,134,78,67,167,163,211,209,233,232,116,116,58,58,29,157,142,78,71,103,160,51,208,25,232,12,116,198,65,113,81,60,20,159,65,181,248,162,232,20,65,177,81,160,19,52,22,52,22,52,22,52,54,105,108,210,216,164,177,73,99,19,157,137,206,68,103,162,179,161,179,161,179,161,179,161,179,161,179,161,179,161,179,161,179,163,179,163,179,163,179,163,179,51,159,157,249,236,204,103,71,231,96,80,7,58,7,58,7,243,57,216,126,208,198,201,84,79,62,124,210,243,201,77,79,154,63,185,233,69,207,23,247,186,216,126,113,47,50,161,93,108,191,184,233,77,171,55,191,202,155,95,229,205,221,9,144,118,127,239,226,238,55,150,31,118,61,236,122,48,248,240,225,228,94,137,211,228,166,201,246,164,231,228,166,137,78,114,119,114,172,17,95,141,212,106,132,85,35,163,26,209,212,72,164,70,16,53,242,167,145,63,141,180,105,132,76,35,82,26,73,210,8,144,70,110,116,114,163,147,27,157,220,232,228,70,39,55,58,185,209,201,141,78,110,116,114,163,147,27,157,220,232,228,70,39,55,58,185,209,201,141,78,110,116,226,162,19,23,157,184,232,196,69,39,46,58,113,209,137,139,78,92,116,226,162,207,47,10,126,52,59,197,247,103,130,130,155,206,141,130,187,207,131,130,54,230,69,65,63,243,161,160,177,185,40,232,112,163,31,254,240,251,70,63,36,64,223,232,135,40,232,27,253,144,9,125,163,31,194,161,111,244,67,74,244,141,126,136,139,190,209,15,185,209,119,250,33,64,250,78,63,36,73,223,233,135,72,233,59,253,144,45,125,167,159,157,126,72,155,190,211,15,177,211,119,250,33,127,58,249,211,201,159,126,208,207,65,63,36,82,63,232,135,104,234,7,253,28,244,67,88,245,131,126,14,250,57,232,135,28,235,228,88,63,232,231,160,159,147,126,78,250,33,235,250,73,63,39,253,144,126,253,164,159,147,126,78,250,33,24,59,193,216,9,198,126,210,207,73,63,68,101,63,233,231,162,31,194,179,95,244,67,138,246,139,126,136,211,126,209,207,69,63,4,108,191,232,135,164,237,36,109,191,232,135,200,29,76,99,240,163,241,253,163,107,81,124,90,29,228,243,184,27,69,167,24,20,65,49,41,54,138,157,226,160,56,41,46,138,155,130,126,200,249,65,206,15,114,126,60,244,243,208,207,67,63,15,253,60,244,243,208,15,116,24,15,253,60,244,3,47,198,67,63,15,253,64,144,241,208,15,40,25,160,100,36,109,36,247,2,37,35,185,87,34,8,65,6,4,25,16,100,64,144,1,65,6,4,25,16,100,64,144,1,65,6,4,25,16,100,112,130,29,156,96,7,76,25,48,37,198,23,69,163,232,20,131,34,40,190,119,109,20,59,197,65,113,82,92,20,55,197,67,145,20,139,226,211,124,112,174,139,160,31,14,120,17,244,195,73,47,130,126,56,242,69,208,15,103,191,224,236,23,65,63,28,2,35,232,135,211,96,4,253,112,44,12,112,19,224,38,192,77,128,155,0,55,1,110,2,220,4,184,9,112,19,224,38,192,77,128,155,0,55,1,110,2,220,4,184,9,40,19,192,37,96,74,128,146,128,32,1,56,2,94,4,152,8,232,16,64,33,96,65,128,128,32,249,131,192,15,114,62,136,247,32,213,131,200,13,146,54,8,216,32,87,131,56,13,82,52,8,207,32,51,131,168,12,18,50,8,198,32,15,131,24,12,210,47,8,189,32,235,130,28,11,226,43,72,173,32,172,130,140,10,162,41,72,164,32,136,130,252,9,98,39,8,153,32,91,130,0,9,82,34,136,130,72,238,69,38,4,81,16,201,189,200,132,32,19,130,76,8,50,33,200,132,32,19,130,76,8,50,33,200,132,32,19,130,76,8,162,32,72,128,248,78,0,78,149,147,71,107,114,128,153,60,99,147,3,204,228,97,155,28,96,38,79,221,228,0,51,183,111,193,139,226,166,120,40,146,98,81,124,90,157,28,96,38,143,232,228,0,51,121,86,39,7,152,201,67,59,57,192,76,158,222,201,1,102,242,24,79,14,48,147,231,121,114,128,153,60,216,147,3,204,228,9,159,28,96,38,143,250,228,0,51,57,192,76,14,48,147,3,204,228,0,51,63,7,152,182,62,39,243,183,24,20,147,226,251,51,39,197,77,145,20,245,41,26,58,13,157,134,78,67,167,161,211,208,105,232,52,116,58,58,29,157,142,78,71,167,163,211,209,233,232,116,116,6,58,3,157,129,206,64,103,160,51,208,25,232,12,116,2,157,64,39,208,9,116,2,157,64,39,208,9,116,38,58,19,157,137,206,68,103,162,51,209,153,232,76,116,54,116,54,116,54,116,54,116,54,116,54,116,54,116,54,116,118,116,118,116,118,116,118,116,118,116,118,116,118,116,118,116,14,116,14,116,14,116,190,159,177,3,157,3,157,3,157,3,157,19,157,19,157,19,157,207,41,247,45,16,252,156,114,223,2,229,207,41,247,45,184,197,133,224,133,224,133,224,133,206,197,246,235,123,23,141,93,52,118,163,115,163,115,163,115,163,115,163,115,163,115,163,115,163,243,160,243,160,243,160,243,160,243,160,243,160,243,160,243,160,147,232,36,58,137,78,162,147,232,36,58,137,78,162,179,208,89,232,44,116,22,58,11,157,133,206,66,103,161,83,232,20,58,133,78,161,243,9,243,86,95,95,20,141,162,83,12,138,160,152,20,27,197,71,176,26,58,196,78,53,116,200,159,106,232,16,68,213,217,69,200,84,103,23,105,83,157,93,253,123,23,119,39,127,106,160,67,200,212,64,135,180,169,129,14,177,83,3,29,242,167,2,29,66,166,2,29,210,166,2,29,98,167,38,187,136,148,154,236,34,91,106,178,107,126,239,226,238,164,77,109,232,16,41,181,161,67,182,212,134,14,33,83,27,58,164,77,237,232,16,41,181,163,67,182,212,142,14,33,83,59,58,251,183,206,65,193,211,242,33,227,91,220,20,15,197,231,57,172,131,187,19,68,117,112,119,18,169,14,238,78,52,213,193,221,201,168,58,209,33,136,234,68,135,68,170,19,29,162,169,136,166,34,154,234,66,135,252,169,11,29,130,168,46,116,72,164,186,208,33,154,234,70,135,252,169,27,29,130,168,110,116,110,182,223,223,219,215,167,120,216,69,236,212,195,174,135,93,228,79,37,55,37,100,42,217,78,218,84,178,139,180,169,197,46,34,165,22,187,200,150,90,220,148,144,169,133,14,105,83,197,46,146,164,138,93,197,135,63,145,210,191,62,0,234,237,235,162,88,20,252,232,19,5,157,239,249,123,251,252,85,190,197,95,158,177,119,204,95,20,141,162,83,12,138,160,152,20,219,167,104,124,166,241,153,198,103,218,247,103,254,210,115,241,103,94,252,153,23,127,230,197,159,121,241,103,254,22,27,197,247,246,131,226,164,184,40,110,138,135,34,41,22,69,125,138,79,128,20,1,82,4,72,17,32,69,128,20,1,82,4,72,17,32,111,65,63,147,126,62,47,143,121,124,181,247,191,79,63,188,60,189,252,241,225,219,203,199,203,244,114,121,89,90,126,242,249,123,217,188,236,94,14,47,195,203,233,229,230,229,238,165,253,14,251,29,246,59,236,119,216,239,176,223,97,191,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,195,126,3,191,99,254,255,178,93,94,222,94,62,94,254,216,187,188,44,45,251,151,151,205,203,238,229,240,50,188,156,94,110,94,238,94,30,94,158,94,218,111,183,223,110,191,221,126,187,253,118,251,29,246,59,236,119,216,239,176,223,176,114,88,121,90,121,90,121,90,121,90,121,122,146,211,163,155,30,221,244,232,166,71,55,61,186,233,209,77,143,110,122,116,211,6,167,13,110,54,184,217,224,102,131,155,13,110,54,184,249,81,217,236,119,179,223,195,202,135,149,15,43,31,86,62,172,124,252,80,246,36,15,79,242,240,36,15,79,242,240,36,15,79,242,240,36,15,79,242,244,36,79,79,242,180,223,211,126,79,251,61,237,247,180,223,211,126,79,251,61,237,247,180,223,211,126,111,43,223,86,190,173,124,91,249,254,33,229,89,221,158,213,237,89,61,158,213,227,225,60,30,206,227,105,60,238,249,113,207,143,123,126,220,243,227,105,60,182,240,248,183,255,216,209,99,71,143,29,45,43,47,43,47,43,47,43,47,43,47,43,151,103,85,126,174,202,163,43,143,174,252,92,149,39,89,158,100,121,146,229,73,150,39,89,246,91,246,91,246,91,246,91,246,91,242,155,95,95,94,54,47,187,151,242,155,198,98,26,139,105,44,166,177,152,198,98,26,139,105,44,166,177,152,198,98,26,139,105,44,166,177,152,198,98,26,139,105,44,166,177,152,198,98,26,139,105,44,166,177,152,198,98,26,139,57,236,119,216,239,176,223,97,191,198,98,26,139,105,44,230,180,178,41,153,243,135,178,39,105,74,166,41,153,166,100,154,146,105,74,166,41,153,166,100,154,146,105,74,166,41,153,166,100,154,146,105,74,166,41,153,166,100,110,246,187,217,239,102,191,155,253,154,146,105,74,166,41,153,166,100,154,146,121,252,80,246,36,77,201,52,37,211,148,76,83,50,77,201,52,37,211,148,76,83,50,77,201,52,37,211,148,76,83,50,77,201,52,37,211,148,204,211,126,79,251,61,237,247,180,223,219,202,134,102,222,86,54,67,211,12,77,51,52,205,208,124,60,73,35,53,141,212,124,60,73,19,54,77,216,52,97,211,132,77,19,54,77,216,52,97,211,132,77,19,54,77,216,52,97,51,237,55,237,55,237,55,237,215,132,77,19,54,77,216,52,97,211,132,77,19,54,77,216,52,97,211,132,77,19,54,77,216,52,97,211,132,77,19,54,77,216,52,97,211,132,77,19,118,153,176,203,132,93,38,236,50,97,215,87,120,57,189,220,188,148,223,101,194,46,19,118,153,176,203,132,93,38,236,234,63,148,15,47,79,47,47,47,111,47,31,47,211,203,229,165,39,105,194,46,19,118,153,176,203,132,93,38,236,50,97,151,9,187,76,216,53,236,119,216,239,176,223,97,191,38,236,50,97,151,9,187,76,216,101,194,174,249,67,217,147,52,97,151,9,187,76,216,101,194,46,19,118,153,176,203,132,93,38,236,50,97,151,9,187,76,216,101,194,46,19,118,153,176,203,132,93,155,253,110,246,187,217,239,102,191,38,236,50,97,151,9,187,76,216,101,194,46,19,118,153,176,203,132,93,38,236,50,97,151,9,187,76,216,101,194,46,19,118,153,176,203,132,93,38,236,50,97,151,9,187,76,216,101,194,46,19,118,93,246,123,217,239,101,191,151,253,154,146,235,249,241,83,79,195,148,92,166,228,50,37,151,41,185,76,201,101,74,46,83,114,153,146,203,148,92,166,228,50,37,151,41,185,76,201,101,74,46,83,114,165,253,166,253,166,253,166,253,166,253,166,253,166,253,166,13,166,13,166,13,166,13,46,27,92,54,104,44,46,99,113,25,139,203,88,44,99,177,140,197,50,22,203,88,44,99,177,140,197,50,22,203,88,172,175,195,203,211,203,203,203,219,203,199,203,244,114,121,105,191,205,126,155,253,54,251,109,246,219,236,183,217,96,179,193,102,131,205,6,253,53,120,249,107,240,50,7,203,28,44,115,176,204,193,50,7,107,252,80,246,232,134,71,55,60,186,225,209,133,71,23,30,93,120,116,225,209,133,71,23,126,84,194,126,195,126,195,126,195,126,195,126,195,126,195,126,253,143,17,229,175,193,203,223,123,151,191,247,46,191,224,151,95,240,203,47,248,229,23,124,254,37,253,123,105,229,221,202,187,149,119,43,239,63,148,61,186,221,163,219,61,186,221,163,219,61,186,221,163,219,61,186,221,163,219,61,186,221,143,202,97,191,135,253,250,107,240,242,215,224,229,175,193,203,95,131,151,95,240,203,47,248,229,23,252,242,121,163,124,222,40,159,55,202,231,141,242,121,163,124,222,168,203,202,151,149,47,43,95,86,190,172,124,89,249,246,232,110,143,238,246,232,110,143,238,246,232,110,143,206,223,123,151,191,247,46,127,239,93,254,222,187,252,70,95,126,163,47,191,209,151,223,232,203,111,244,229,55,250,242,27,125,249,141,190,124,86,41,31,78,202,135,147,242,225,164,124,56,41,31,78,234,61,156,252,237,255,1,9,240,177,163,158,58,0,0])))