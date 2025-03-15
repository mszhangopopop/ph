[rewrite_local]
^https:\/\/(api\.dragonlongzhu\.cn|www\.hhlqilongzhu\.cn|api\.dragonlongzhu\.cn)\/.* url script-response-body https://raw.githubusercontent.com/mszhangopopop/ph/refs/heads/main/ph.js

[mitm]
hostname = api.xingzhige.com, www.hhlqilongzhu.cn, api.dragonlongzhu.cn
