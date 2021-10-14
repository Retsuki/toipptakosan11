import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/GlobalFooter-3c27c366.mjs": {
    "type": "application/javascript",
    "etag": "\"165-WwT0BJoA6vXwYkXrJNwT16w5tcs\"",
    "mtime": "2021-10-13T00:45:43.510Z",
    "path": "../public/_nuxt/GlobalFooter-3c27c366.mjs"
  },
  "/_nuxt/GlobalHeader-55b427cc.mjs": {
    "type": "application/javascript",
    "etag": "\"3c8-+4RpyxihbC8CuINdkrrFjH+9+Ao\"",
    "mtime": "2021-10-13T00:45:43.509Z",
    "path": "../public/_nuxt/GlobalHeader-55b427cc.mjs"
  },
  "/_nuxt/MemberDetailExperience-eee2071f.mjs": {
    "type": "application/javascript",
    "etag": "\"533-8G90JY+N/Na8WYExWlOHSFmHLNI\"",
    "mtime": "2021-10-13T00:45:43.509Z",
    "path": "../public/_nuxt/MemberDetailExperience-eee2071f.mjs"
  },
  "/_nuxt/MemberDetailSelfIntroduction-5954010a.mjs": {
    "type": "application/javascript",
    "etag": "\"4bb-51JiDV34x6PTD6FGzvmUlaTTnWk\"",
    "mtime": "2021-10-13T00:45:43.508Z",
    "path": "../public/_nuxt/MemberDetailSelfIntroduction-5954010a.mjs"
  },
  "/_nuxt/MemberDetailSkills-20744e42.mjs": {
    "type": "application/javascript",
    "etag": "\"253-KgQfTjUdZ0MLEXRdYApvXxPb1SA\"",
    "mtime": "2021-10-13T00:45:43.507Z",
    "path": "../public/_nuxt/MemberDetailSkills-20744e42.mjs"
  },
  "/_nuxt/[id]-e83890c8.mjs": {
    "type": "application/javascript",
    "etag": "\"537-qNog+s/WXBU6lF6GADc/rY5Fbz4\"",
    "mtime": "2021-10-13T00:45:43.507Z",
    "path": "../public/_nuxt/[id]-e83890c8.mjs"
  },
  "/_nuxt/entry-a8744911.mjs": {
    "type": "application/javascript",
    "etag": "\"23eef-uRUgyMX0wkT1F0EFdTrsA9Sq3jY\"",
    "mtime": "2021-10-13T00:45:43.502Z",
    "path": "../public/_nuxt/entry-a8744911.mjs"
  },
  "/_nuxt/index-7b5666c3.mjs": {
    "type": "application/javascript",
    "etag": "\"40a-fpcHBXYqvwcGJOh5lUS8zlgDtJM\"",
    "mtime": "2021-10-13T00:45:43.501Z",
    "path": "../public/_nuxt/index-7b5666c3.mjs"
  },
  "/_nuxt/index-b974a06f.mjs": {
    "type": "application/javascript",
    "etag": "\"3f63-+TEGG8SH9NKKYE1ACPf76d8Aeq0\"",
    "mtime": "2021-10-13T00:45:43.500Z",
    "path": "../public/_nuxt/index-b974a06f.mjs"
  },
  "/_nuxt/index-f7e86995.mjs": {
    "type": "application/javascript",
    "etag": "\"4fb-+qKujLHbRxTVLvADdQVmRygvh5k\"",
    "mtime": "2021-10-13T00:45:43.500Z",
    "path": "../public/_nuxt/index-f7e86995.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"fa0-KHigDyGGJvQCIdsISZK9hZ8TvAM\"",
    "mtime": "2021-10-13T00:45:43.499Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/memberDetail-8af55458.mjs": {
    "type": "application/javascript",
    "etag": "\"537-uhkjJFa5Hr5vyRPzWZwFnZPijEk\"",
    "mtime": "2021-10-13T00:45:43.499Z",
    "path": "../public/_nuxt/memberDetail-8af55458.mjs"
  },
  "/_nuxt/assets/GlobalFooter.62502b62.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e6-bGF14zVSp1fiqbj6mpDtOQnd7rk\"",
    "mtime": "2021-10-13T00:45:43.506Z",
    "path": "../public/_nuxt/assets/GlobalFooter.62502b62.css"
  },
  "/_nuxt/assets/GlobalHeader.c2293a1e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"210-fD+/U+Aw8YJG1Vg1qLLa3Q8GP4E\"",
    "mtime": "2021-10-13T00:45:43.506Z",
    "path": "../public/_nuxt/assets/GlobalHeader.c2293a1e.css"
  },
  "/_nuxt/assets/MemberDetailExperience.08785b21.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3b1-/nkemrehoRqRjImn/9yOrUlIXxA\"",
    "mtime": "2021-10-13T00:45:43.506Z",
    "path": "../public/_nuxt/assets/MemberDetailExperience.08785b21.css"
  },
  "/_nuxt/assets/MemberDetailSelfIntroduction.91399d81.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"be-V0RBt1MF9Ne/xTPkO2dLcIk4ZvM\"",
    "mtime": "2021-10-13T00:45:43.505Z",
    "path": "../public/_nuxt/assets/MemberDetailSelfIntroduction.91399d81.css"
  },
  "/_nuxt/assets/MemberDetailSkills.6a7b7a07.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"121-2OAay7vECTUT0G6lGo9CkPT82DI\"",
    "mtime": "2021-10-13T00:45:43.505Z",
    "path": "../public/_nuxt/assets/MemberDetailSkills.6a7b7a07.css"
  },
  "/_nuxt/assets/[id].f9028c00.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cb-z/GTfPTMgZzTo9lE89m3ILLnF8c\"",
    "mtime": "2021-10-13T00:45:43.504Z",
    "path": "../public/_nuxt/assets/[id].f9028c00.css"
  },
  "/_nuxt/assets/entry.d4de6b26.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"88-SGRTytDRVgbW1B9cdEQUUMejir8\"",
    "mtime": "2021-10-13T00:45:43.504Z",
    "path": "../public/_nuxt/assets/entry.d4de6b26.css"
  },
  "/_nuxt/assets/facebook-brands.e4e4ffee.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f4-Z7EIsFCifHP8enuXABXnXwZV52Q\"",
    "mtime": "2021-10-13T00:45:43.504Z",
    "path": "../public/_nuxt/assets/facebook-brands.e4e4ffee.svg"
  },
  "/_nuxt/assets/github-brands.4ea99f48.svg": {
    "type": "image/svg+xml",
    "etag": "\"600-6h8wpQ8SQcL2mQLsGkJ6No79IiM\"",
    "mtime": "2021-10-13T00:45:43.503Z",
    "path": "../public/_nuxt/assets/github-brands.4ea99f48.svg"
  },
  "/_nuxt/assets/index.b427d7e3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f2-qA5kr69Znd1ECVcmuU2/YfEi+Ls\"",
    "mtime": "2021-10-13T00:45:43.503Z",
    "path": "../public/_nuxt/assets/index.b427d7e3.css"
  },
  "/_nuxt/assets/index.efcfbd2c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"203-OuSC6Y1/Cl+N0/UKrr3IaZkz98Q\"",
    "mtime": "2021-10-13T00:45:43.503Z",
    "path": "../public/_nuxt/assets/index.efcfbd2c.css"
  },
  "/_nuxt/assets/twitter-brands.dd81ac6e.svg": {
    "type": "image/svg+xml",
    "etag": "\"401-GpqTDMkct1kDJSI17vejqOKiBd0\"",
    "mtime": "2021-10-13T00:45:43.502Z",
    "path": "../public/_nuxt/assets/twitter-brands.dd81ac6e.svg"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/toipptakosan11/GitHub/portfolio/mypage/dist" + "/" + "1634085940";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
