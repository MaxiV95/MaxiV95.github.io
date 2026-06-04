class _e {
    constructor(t) {
        let i = t.textContent.trim();
        t.textContent = "",
        t.setAttribute("aria-label", i);
        for (let s = 0; s < i.length; s++) {
            let r = i[s]
              , n = document.createElement("span");
            n.classList.add("hover-char"),
            n.style.setProperty("--i", s);
            let h = document.createElement("span");
            h.textContent = r === " " ? " " : r;
            let a = document.createElement("span");
            a.textContent = r === " " ? " " : r,
            a.setAttribute("aria-hidden", "true"),
            n.appendChild(h),
            n.appendChild(a),
            t.appendChild(n)
        }
    }
    resize() {}
    update() {}
}
let wt = !1;
if (window.matchMedia) {
    const e = window.matchMedia("(prefers-color-scheme: dark)");
    wt = e.matches,
    e.addEventListener("change", () => {
        wt = e.matches
    }
    )
}
function xe() {
    return wt
}
function j(e) {
    let t = e[0]
      , i = e[1]
      , s = e[2];
    return Math.sqrt(t * t + i * i + s * s)
}
function yt(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e
}
function Ee(e, t, i, s) {
    return e[0] = t,
    e[1] = i,
    e[2] = s,
    e
}
function Ct(e, t, i) {
    return e[0] = t[0] + i[0],
    e[1] = t[1] + i[1],
    e[2] = t[2] + i[2],
    e
}
function St(e, t, i) {
    return e[0] = t[0] - i[0],
    e[1] = t[1] - i[1],
    e[2] = t[2] - i[2],
    e
}
function we(e, t, i) {
    return e[0] = t[0] * i[0],
    e[1] = t[1] * i[1],
    e[2] = t[2] * i[2],
    e
}
function ye(e, t, i) {
    return e[0] = t[0] / i[0],
    e[1] = t[1] / i[1],
    e[2] = t[2] / i[2],
    e
}
function at(e, t, i) {
    return e[0] = t[0] * i,
    e[1] = t[1] * i,
    e[2] = t[2] * i,
    e
}
function ve(e, t) {
    let i = t[0] - e[0]
      , s = t[1] - e[1]
      , r = t[2] - e[2];
    return Math.sqrt(i * i + s * s + r * r)
}
function Te(e, t) {
    let i = t[0] - e[0]
      , s = t[1] - e[1]
      , r = t[2] - e[2];
    return i * i + s * s + r * r
}
function Ft(e) {
    let t = e[0]
      , i = e[1]
      , s = e[2];
    return t * t + i * i + s * s
}
function Me(e, t) {
    return e[0] = -t[0],
    e[1] = -t[1],
    e[2] = -t[2],
    e
}
function Ae(e, t) {
    return e[0] = 1 / t[0],
    e[1] = 1 / t[1],
    e[2] = 1 / t[2],
    e
}
function vt(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = i * i + s * s + r * r;
    return n > 0 && (n = 1 / Math.sqrt(n)),
    e[0] = t[0] * n,
    e[1] = t[1] * n,
    e[2] = t[2] * n,
    e
}
function ne(e, t) {
    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
}
function Dt(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = i[0]
      , a = i[1]
      , l = i[2];
    return e[0] = r * l - n * a,
    e[1] = n * h - s * l,
    e[2] = s * a - r * h,
    e
}
function be(e, t, i, s) {
    let r = t[0]
      , n = t[1]
      , h = t[2];
    return e[0] = r + s * (i[0] - r),
    e[1] = n + s * (i[1] - n),
    e[2] = h + s * (i[2] - h),
    e
}
function Re(e, t, i, s, r) {
    const n = Math.exp(-s * r);
    let h = t[0]
      , a = t[1]
      , l = t[2];
    return e[0] = i[0] + (h - i[0]) * n,
    e[1] = i[1] + (a - i[1]) * n,
    e[2] = i[2] + (l - i[2]) * n,
    e
}
function Ce(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = i[3] * s + i[7] * r + i[11] * n + i[15];
    return h = h || 1,
    e[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / h,
    e[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / h,
    e[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / h,
    e
}
function Se(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = i[3] * s + i[7] * r + i[11] * n + i[15];
    return h = h || 1,
    e[0] = (i[0] * s + i[4] * r + i[8] * n) / h,
    e[1] = (i[1] * s + i[5] * r + i[9] * n) / h,
    e[2] = (i[2] * s + i[6] * r + i[10] * n) / h,
    e
}
function Fe(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2];
    return e[0] = s * i[0] + r * i[3] + n * i[6],
    e[1] = s * i[1] + r * i[4] + n * i[7],
    e[2] = s * i[2] + r * i[5] + n * i[8],
    e
}
function De(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = i[0]
      , a = i[1]
      , l = i[2]
      , c = i[3]
      , o = a * n - l * r
      , u = l * s - h * n
      , f = h * r - a * s
      , d = a * f - l * u
      , g = l * o - h * f
      , p = h * u - a * o
      , m = c * 2;
    return o *= m,
    u *= m,
    f *= m,
    d *= 2,
    g *= 2,
    p *= 2,
    e[0] = s + o + d,
    e[1] = r + u + g,
    e[2] = n + f + p,
    e
}
const Le = function() {
    const e = [0, 0, 0]
      , t = [0, 0, 0];
    return function(i, s) {
        yt(e, i),
        yt(t, s),
        vt(e, e),
        vt(t, t);
        let r = ne(e, t);
        return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r)
    }
}();
function ze(e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
}
class z extends Array {
    constructor(t=0, i=t, s=t) {
        return super(t, i, s),
        this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set z(t) {
        this[2] = t
    }
    set(t, i=t, s=t) {
        return t.length ? this.copy(t) : (Ee(this, t, i, s),
        this)
    }
    copy(t) {
        return yt(this, t),
        this
    }
    add(t, i) {
        return i ? Ct(this, t, i) : Ct(this, this, t),
        this
    }
    sub(t, i) {
        return i ? St(this, t, i) : St(this, this, t),
        this
    }
    multiply(t) {
        return t.length ? we(this, this, t) : at(this, this, t),
        this
    }
    divide(t) {
        return t.length ? ye(this, this, t) : at(this, this, 1 / t),
        this
    }
    inverse(t=this) {
        return Ae(this, t),
        this
    }
    len() {
        return j(this)
    }
    distance(t) {
        return t ? ve(this, t) : j(this)
    }
    squaredLen() {
        return Ft(this)
    }
    squaredDistance(t) {
        return t ? Te(this, t) : Ft(this)
    }
    negate(t=this) {
        return Me(this, t),
        this
    }
    cross(t, i) {
        return i ? Dt(this, t, i) : Dt(this, this, t),
        this
    }
    scale(t) {
        return at(this, this, t),
        this
    }
    normalize() {
        return vt(this, this),
        this
    }
    dot(t) {
        return ne(this, t)
    }
    equals(t) {
        return ze(this, t)
    }
    applyMatrix3(t) {
        return Fe(this, this, t),
        this
    }
    applyMatrix4(t) {
        return Ce(this, this, t),
        this
    }
    scaleRotateMatrix4(t) {
        return Se(this, this, t),
        this
    }
    applyQuaternion(t) {
        return De(this, this, t),
        this
    }
    angle(t) {
        return Le(this, t)
    }
    lerp(t, i) {
        return be(this, this, t, i),
        this
    }
    smoothLerp(t, i, s) {
        return Re(this, this, t, i, s),
        this
    }
    clone() {
        return new z(this[0],this[1],this[2])
    }
    fromArray(t, i=0) {
        return this[0] = t[i],
        this[1] = t[i + 1],
        this[2] = t[i + 2],
        this
    }
    toArray(t=[], i=0) {
        return t[i] = this[0],
        t[i + 1] = this[1],
        t[i + 2] = this[2],
        t
    }
    transformDirection(t) {
        const i = this[0]
          , s = this[1]
          , r = this[2];
        return this[0] = t[0] * i + t[4] * s + t[8] * r,
        this[1] = t[1] * i + t[5] * s + t[9] * r,
        this[2] = t[2] * i + t[6] * s + t[10] * r,
        this.normalize()
    }
}
const Lt = new z;
let Ue = 1
  , Ne = 1
  , zt = !1;
class Ie {
    constructor(t, i={}) {
        t.canvas || console.error("gl not passed as first argument to Geometry"),
        this.gl = t,
        this.attributes = i,
        this.id = Ue++,
        this.VAOs = {},
        this.drawRange = {
            start: 0,
            count: 0
        },
        this.instancedCount = 0,
        this.gl.renderer.bindVertexArray(null),
        this.gl.renderer.currentGeometry = null,
        this.glState = this.gl.renderer.state;
        for (let s in i)
            this.addAttribute(s, i[s])
    }
    addAttribute(t, i) {
        if (this.attributes[t] = i,
        i.id = Ne++,
        i.size = i.size || 1,
        i.type = i.type || (i.data.constructor === Float32Array ? this.gl.FLOAT : i.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
        i.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
        i.normalized = i.normalized || !1,
        i.stride = i.stride || 0,
        i.offset = i.offset || 0,
        i.count = i.count || (i.stride ? i.data.byteLength / i.stride : i.data.length / i.size),
        i.divisor = i.instanced || 0,
        i.needsUpdate = !1,
        i.usage = i.usage || this.gl.STATIC_DRAW,
        i.buffer || this.updateAttribute(i),
        i.divisor) {
            if (this.isInstanced = !0,
            this.instancedCount && this.instancedCount !== i.count * i.divisor)
                return console.warn("geometry has multiple instanced buffers of different length"),
                this.instancedCount = Math.min(this.instancedCount, i.count * i.divisor);
            this.instancedCount = i.count * i.divisor
        } else
            t === "index" ? this.drawRange.count = i.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, i.count))
    }
    updateAttribute(t) {
        const i = !t.buffer;
        i && (t.buffer = this.gl.createBuffer()),
        this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer),
        this.glState.boundBuffer = t.buffer),
        i ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data),
        t.needsUpdate = !1
    }
    setIndex(t) {
        this.addAttribute("index", t)
    }
    setDrawRange(t, i) {
        this.drawRange.start = t,
        this.drawRange.count = i
    }
    setInstancedCount(t) {
        this.instancedCount = t
    }
    createVAO(t) {
        this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(),
        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
        this.bindAttributes(t)
    }
    bindAttributes(t) {
        t.attributeLocations.forEach( (i, {name: s, type: r}) => {
            if (!this.attributes[s]) {
                console.warn(`active attribute ${s} not being supplied`);
                return
            }
            const n = this.attributes[s];
            this.gl.bindBuffer(n.target, n.buffer),
            this.glState.boundBuffer = n.buffer;
            let h = 1;
            r === 35674 && (h = 2),
            r === 35675 && (h = 3),
            r === 35676 && (h = 4);
            const a = n.size / h
              , l = h === 1 ? 0 : h * h * 4
              , c = h === 1 ? 0 : h * 4;
            for (let o = 0; o < h; o++)
                this.gl.vertexAttribPointer(i + o, a, n.type, n.normalized, n.stride + l, n.offset + o * c),
                this.gl.enableVertexAttribArray(i + o),
                this.gl.renderer.vertexAttribDivisor(i + o, n.divisor)
        }
        ),
        this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
    }
    draw({program: t, mode: i=this.gl.TRIANGLES}) {
        this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t),
        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
        this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`),
        t.attributeLocations.forEach( (_, {name: n}) => {
            const h = this.attributes[n];
            h.needsUpdate && this.updateAttribute(h)
        }
        );
        let s = 2;
        this.attributes.index?.type === this.gl.UNSIGNED_INT && (s = 4),
        this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(i, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * s, this.instancedCount) : this.gl.renderer.drawArraysInstanced(i, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(i, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * s) : this.gl.drawArrays(i, this.drawRange.start, this.drawRange.count)
    }
    getPosition() {
        const t = this.attributes.position;
        if (t.data)
            return t;
        if (!zt)
            return console.warn("No position buffer data found to compute bounds"),
            zt = !0
    }
    computeBoundingBox(t) {
        t || (t = this.getPosition());
        const i = t.data
          , s = t.size;
        this.bounds || (this.bounds = {
            min: new z,
            max: new z,
            center: new z,
            scale: new z,
            radius: 1 / 0
        });
        const r = this.bounds.min
          , n = this.bounds.max
          , h = this.bounds.center
          , a = this.bounds.scale;
        r.set(1 / 0),
        n.set(-1 / 0);
        for (let l = 0, c = i.length; l < c; l += s) {
            const o = i[l]
              , u = i[l + 1]
              , f = i[l + 2];
            r.x = Math.min(o, r.x),
            r.y = Math.min(u, r.y),
            r.z = Math.min(f, r.z),
            n.x = Math.max(o, n.x),
            n.y = Math.max(u, n.y),
            n.z = Math.max(f, n.z)
        }
        a.sub(n, r),
        h.add(r, n).divide(2)
    }
    computeBoundingSphere(t) {
        t || (t = this.getPosition());
        const i = t.data
          , s = t.size;
        this.bounds || this.computeBoundingBox(t);
        let r = 0;
        for (let n = 0, h = i.length; n < h; n += s)
            Lt.fromArray(i, n),
            r = Math.max(r, this.bounds.center.squaredDistance(Lt));
        this.bounds.radius = Math.sqrt(r)
    }
    remove() {
        for (let t in this.VAOs)
            this.gl.renderer.deleteVertexArray(this.VAOs[t]),
            delete this.VAOs[t];
        for (let t in this.attributes)
            this.gl.deleteBuffer(this.attributes[t].buffer),
            delete this.attributes[t]
    }
}
let Pe = 1;
const Ut = {};
class Q {
    constructor(t, {vertex: i, fragment: s, uniforms: r={}, transparent: n=!1, cullFace: h=t.BACK, frontFace: a=t.CCW, depthTest: l=!0, depthWrite: c=!0, depthFunc: o=t.LEQUAL}={}) {
        t.canvas || console.error("gl not passed as first argument to Program"),
        this.gl = t,
        this.uniforms = r,
        this.id = Pe++,
        i || console.warn("vertex shader not supplied"),
        s || console.warn("fragment shader not supplied"),
        this.transparent = n,
        this.cullFace = h,
        this.frontFace = a,
        this.depthTest = l,
        this.depthWrite = c,
        this.depthFunc = o,
        this.blendFunc = {},
        this.blendEquation = {},
        this.stencilFunc = {},
        this.stencilOp = {},
        this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
        this.vertexShader = t.createShader(t.VERTEX_SHADER),
        this.fragmentShader = t.createShader(t.FRAGMENT_SHADER),
        this.program = t.createProgram(),
        t.attachShader(this.program, this.vertexShader),
        t.attachShader(this.program, this.fragmentShader),
        this.setShaders({
            vertex: i,
            fragment: s
        })
    }
    setShaders({vertex: t, fragment: i}) {
        if (t && (this.gl.shaderSource(this.vertexShader, t),
        this.gl.compileShader(this.vertexShader),
        this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Nt(t)}`)),
        i && (this.gl.shaderSource(this.fragmentShader, i),
        this.gl.compileShader(this.fragmentShader),
        this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Nt(i)}`)),
        this.gl.linkProgram(this.program),
        !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
            return console.warn(this.gl.getProgramInfoLog(this.program));
        this.uniformLocations = new Map;
        let s = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
        for (let h = 0; h < s; h++) {
            let a = this.gl.getActiveUniform(this.program, h);
            this.uniformLocations.set(a, this.gl.getUniformLocation(this.program, a.name));
            const l = a.name.match(/(\w+)/g);
            a.uniformName = l[0],
            a.nameComponents = l.slice(1)
        }
        this.attributeLocations = new Map;
        const r = []
          , n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
        for (let h = 0; h < n; h++) {
            const a = this.gl.getActiveAttrib(this.program, h)
              , l = this.gl.getAttribLocation(this.program, a.name);
            l !== -1 && (r[l] = a.name,
            this.attributeLocations.set(a, l))
        }
        this.attributeOrder = r.join("")
    }
    setBlendFunc(t, i, s, r) {
        this.blendFunc.src = t,
        this.blendFunc.dst = i,
        this.blendFunc.srcAlpha = s,
        this.blendFunc.dstAlpha = r,
        t && (this.transparent = !0)
    }
    setBlendEquation(t, i) {
        this.blendEquation.modeRGB = t,
        this.blendEquation.modeAlpha = i
    }
    setStencilFunc(t, i, s) {
        this.stencilRef = i,
        this.stencilFunc.func = t,
        this.stencilFunc.ref = i,
        this.stencilFunc.mask = s
    }
    setStencilOp(t, i, s) {
        this.stencilOp.stencilFail = t,
        this.stencilOp.depthFail = i,
        this.stencilOp.depthPass = s
    }
    applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
        this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
        this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
        this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
        this.gl.renderer.setFrontFace(this.frontFace),
        this.gl.renderer.setDepthMask(this.depthWrite),
        this.gl.renderer.setDepthFunc(this.depthFunc),
        this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
        this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha),
        this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST),
        this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask),
        this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass)
    }
    use({flipFaces: t=!1}={}) {
        let i = -1;
        this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program),
        this.gl.renderer.state.currentProgram = this.id),
        this.uniformLocations.forEach( (r, n) => {
            let h = this.uniforms[n.uniformName];
            for (const a of n.nameComponents) {
                if (!h)
                    break;
                if (a in h)
                    h = h[a];
                else {
                    if (Array.isArray(h.value))
                        break;
                    h = void 0;
                    break
                }
            }
            if (!h)
                return It(`Active uniform ${n.name} has not been supplied`);
            if (h && h.value === void 0)
                return It(`${n.name} uniform is missing a value parameter`);
            if (h.value.texture)
                return i = i + 1,
                h.value.update(i),
                lt(this.gl, n.type, r, i);
            if (h.value.length && h.value[0].texture) {
                const a = [];
                return h.value.forEach(l => {
                    i = i + 1,
                    l.update(i),
                    a.push(i)
                }
                ),
                lt(this.gl, n.type, r, a)
            }
            lt(this.gl, n.type, r, h.value)
        }
        ),
        this.applyState(),
        t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
    }
    remove() {
        this.gl.deleteProgram(this.program)
    }
}
function lt(e, t, i, s) {
    s = s.length ? Oe(s) : s;
    const r = e.renderer.state.uniformLocations.get(i);
    if (s.length)
        if (r === void 0 || r.length !== s.length)
            e.renderer.state.uniformLocations.set(i, s.slice(0));
        else {
            if (Be(r, s))
                return;
            r.set ? r.set(s) : Xe(r, s),
            e.renderer.state.uniformLocations.set(i, r)
        }
    else {
        if (r === s)
            return;
        e.renderer.state.uniformLocations.set(i, s)
    }
    switch (t) {
    case 5126:
        return s.length ? e.uniform1fv(i, s) : e.uniform1f(i, s);
    case 35664:
        return e.uniform2fv(i, s);
    case 35665:
        return e.uniform3fv(i, s);
    case 35666:
        return e.uniform4fv(i, s);
    case 35670:
    case 5124:
    case 35678:
    case 36306:
    case 35680:
    case 36289:
        return s.length ? e.uniform1iv(i, s) : e.uniform1i(i, s);
    case 35671:
    case 35667:
        return e.uniform2iv(i, s);
    case 35672:
    case 35668:
        return e.uniform3iv(i, s);
    case 35673:
    case 35669:
        return e.uniform4iv(i, s);
    case 35674:
        return e.uniformMatrix2fv(i, !1, s);
    case 35675:
        return e.uniformMatrix3fv(i, !1, s);
    case 35676:
        return e.uniformMatrix4fv(i, !1, s)
    }
}
function Nt(e) {
    let t = e.split(`
`);
    for (let i = 0; i < t.length; i++)
        t[i] = i + 1 + ": " + t[i];
    return t.join(`
`)
}
function Oe(e) {
    const t = e.length
      , i = e[0].length;
    if (i === void 0)
        return e;
    const s = t * i;
    let r = Ut[s];
    r || (Ut[s] = r = new Float32Array(s));
    for (let n = 0; n < t; n++)
        r.set(e[n], n * i);
    return r
}
function Be(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let i = 0, s = e.length; i < s; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function Xe(e, t) {
    for (let i = 0, s = e.length; i < s; i++)
        e[i] = t[i]
}
let ct = 0;
function It(e) {
    ct > 100 || (console.warn(e),
    ct++,
    ct > 100 && console.warn("More than 100 program warnings - stopping logs."))
}
const ot = new z;
let Ye = 1;
class $e {
    constructor({canvas: t=document.createElement("canvas"), width: i=300, height: s=150, dpr: r=1, alpha: n=!1, depth: h=!0, stencil: a=!1, antialias: l=!1, premultipliedAlpha: c=!1, preserveDrawingBuffer: o=!1, powerPreference: u="default", autoClear: f=!0, webgl: d=2}={}) {
        const g = {
            alpha: n,
            depth: h,
            stencil: a,
            antialias: l,
            premultipliedAlpha: c,
            preserveDrawingBuffer: o,
            powerPreference: u
        };
        this.dpr = r,
        this.alpha = n,
        this.color = !0,
        this.depth = h,
        this.stencil = a,
        this.premultipliedAlpha = c,
        this.autoClear = f,
        this.id = Ye++,
        d === 2 && (this.gl = t.getContext("webgl2", g)),
        this.isWebgl2 = !!this.gl,
        this.gl || (this.gl = t.getContext("webgl", g)),
        this.gl || console.error("unable to create webgl context"),
        this.gl.renderer = this,
        this.setSize(i, s),
        this.state = {},
        this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        },
        this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        },
        this.state.cullFace = !1,
        this.state.frontFace = this.gl.CCW,
        this.state.depthMask = !0,
        this.state.depthFunc = this.gl.LEQUAL,
        this.state.premultiplyAlpha = !1,
        this.state.flipY = !1,
        this.state.unpackAlignment = 4,
        this.state.framebuffer = null,
        this.state.viewport = {
            x: 0,
            y: 0,
            width: null,
            height: null
        },
        this.state.textureUnits = [],
        this.state.activeTextureUnit = 0,
        this.state.boundBuffer = null,
        this.state.uniformLocations = new Map,
        this.state.currentProgram = null,
        this.extensions = {},
        this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
        this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
        this.getExtension("OES_texture_float_linear"),
        this.getExtension("OES_texture_half_float"),
        this.getExtension("OES_texture_half_float_linear"),
        this.getExtension("OES_element_index_uint"),
        this.getExtension("OES_standard_derivatives"),
        this.getExtension("EXT_sRGB"),
        this.getExtension("WEBGL_depth_texture"),
        this.getExtension("WEBGL_draw_buffers")),
        this.getExtension("WEBGL_compressed_texture_astc"),
        this.getExtension("EXT_texture_compression_bptc"),
        this.getExtension("WEBGL_compressed_texture_s3tc"),
        this.getExtension("WEBGL_compressed_texture_etc1"),
        this.getExtension("WEBGL_compressed_texture_pvrtc"),
        this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
        this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
        this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
        this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
        this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
        this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
        this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
        this.parameters = {},
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    setSize(t, i) {
        this.width = t,
        this.height = i,
        this.gl.canvas.width = t * this.dpr,
        this.gl.canvas.height = i * this.dpr,
        this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
            width: t + "px",
            height: i + "px"
        })
    }
    setViewport(t, i, s=0, r=0) {
        this.state.viewport.width === t && this.state.viewport.height === i || (this.state.viewport.width = t,
        this.state.viewport.height = i,
        this.state.viewport.x = s,
        this.state.viewport.y = r,
        this.gl.viewport(s, r, t, i))
    }
    setScissor(t, i, s=0, r=0) {
        this.gl.scissor(s, r, t, i)
    }
    enable(t) {
        this.state[t] !== !0 && (this.gl.enable(t),
        this.state[t] = !0)
    }
    disable(t) {
        this.state[t] !== !1 && (this.gl.disable(t),
        this.state[t] = !1)
    }
    setBlendFunc(t, i, s, r) {
        this.state.blendFunc.src === t && this.state.blendFunc.dst === i && this.state.blendFunc.srcAlpha === s && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t,
        this.state.blendFunc.dst = i,
        this.state.blendFunc.srcAlpha = s,
        this.state.blendFunc.dstAlpha = r,
        s !== void 0 ? this.gl.blendFuncSeparate(t, i, s, r) : this.gl.blendFunc(t, i))
    }
    setBlendEquation(t, i) {
        t = t || this.gl.FUNC_ADD,
        !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === i) && (this.state.blendEquation.modeRGB = t,
        this.state.blendEquation.modeAlpha = i,
        i !== void 0 ? this.gl.blendEquationSeparate(t, i) : this.gl.blendEquation(t))
    }
    setCullFace(t) {
        this.state.cullFace !== t && (this.state.cullFace = t,
        this.gl.cullFace(t))
    }
    setFrontFace(t) {
        this.state.frontFace !== t && (this.state.frontFace = t,
        this.gl.frontFace(t))
    }
    setDepthMask(t) {
        this.state.depthMask !== t && (this.state.depthMask = t,
        this.gl.depthMask(t))
    }
    setDepthFunc(t) {
        this.state.depthFunc !== t && (this.state.depthFunc = t,
        this.gl.depthFunc(t))
    }
    setStencilMask(t) {
        this.state.stencilMask !== t && (this.state.stencilMask = t,
        this.gl.stencilMask(t))
    }
    setStencilFunc(t, i, s) {
        this.state.stencilFunc === t && this.state.stencilRef === i && this.state.stencilFuncMask === s || (this.state.stencilFunc = t || this.gl.ALWAYS,
        this.state.stencilRef = i || 0,
        this.state.stencilFuncMask = s || 0,
        this.gl.stencilFunc(t || this.gl.ALWAYS, i || 0, s || 0))
    }
    setStencilOp(t, i, s) {
        this.state.stencilFail === t && this.state.stencilDepthFail === i && this.state.stencilDepthPass === s || (this.state.stencilFail = t,
        this.state.stencilDepthFail = i,
        this.state.stencilDepthPass = s,
        this.gl.stencilOp(t, i, s))
    }
    activeTexture(t) {
        this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t,
        this.gl.activeTexture(this.gl.TEXTURE0 + t))
    }
    bindFramebuffer({target: t=this.gl.FRAMEBUFFER, buffer: i=null}={}) {
        this.state.framebuffer !== i && (this.state.framebuffer = i,
        this.gl.bindFramebuffer(t, i))
    }
    getExtension(t, i, s) {
        return i && this.gl[i] ? this.gl[i].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
        i ? this.extensions[t] ? this.extensions[t][s].bind(this.extensions[t]) : null : this.extensions[t])
    }
    sortOpaque(t, i) {
        return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.program.id !== i.program.id ? t.program.id - i.program.id : t.zDepth !== i.zDepth ? t.zDepth - i.zDepth : i.id - t.id
    }
    sortTransparent(t, i) {
        return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.zDepth !== i.zDepth ? i.zDepth - t.zDepth : i.id - t.id
    }
    sortUI(t, i) {
        return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.program.id !== i.program.id ? t.program.id - i.program.id : i.id - t.id
    }
    getRenderList({scene: t, camera: i, frustumCull: s, sort: r}) {
        let n = [];
        if (i && s && i.updateFrustum(),
        t.traverse(h => {
            if (!h.visible)
                return !0;
            h.draw && (s && h.frustumCulled && i && !i.frustumIntersectsMesh(h) || n.push(h))
        }
        ),
        r) {
            const h = []
              , a = []
              , l = [];
            n.forEach(c => {
                c.program.transparent ? c.program.depthTest ? a.push(c) : l.push(c) : h.push(c),
                c.zDepth = 0,
                !(c.renderOrder !== 0 || !c.program.depthTest || !i) && (c.worldMatrix.getTranslation(ot),
                ot.applyMatrix4(i.projectionViewMatrix),
                c.zDepth = ot.z)
            }
            ),
            h.sort(this.sortOpaque),
            a.sort(this.sortTransparent),
            l.sort(this.sortUI),
            n = h.concat(a, l)
        }
        return n
    }
    render({scene: t, camera: i, target: s=null, update: r=!0, sort: n=!0, frustumCull: h=!0, clear: a}) {
        s === null ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(s),
        this.setViewport(s.width, s.height)),
        (a || this.autoClear && a !== !1) && (this.depth && (!s || s.depth) && (this.enable(this.gl.DEPTH_TEST),
        this.setDepthMask(!0)),
        (this.stencil || !s || s.stencil) && (this.enable(this.gl.STENCIL_TEST),
        this.setStencilMask(255)),
        this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
        r && t.updateMatrixWorld(),
        i && i.updateMatrixWorld(),
        this.getRenderList({
            scene: t,
            camera: i,
            frustumCull: h,
            sort: n
        }).forEach(c => {
            c.draw({
                camera: i
            })
        }
        )
    }
}
function qe(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e
}
function ke(e, t, i, s, r) {
    return e[0] = t,
    e[1] = i,
    e[2] = s,
    e[3] = r,
    e
}
function Ge(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = i * i + s * s + r * r + n * n;
    return h > 0 && (h = 1 / Math.sqrt(h)),
    e[0] = i * h,
    e[1] = s * h,
    e[2] = r * h,
    e[3] = n * h,
    e
}
function We(e, t) {
    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
}
function He(e) {
    return e[0] = 0,
    e[1] = 0,
    e[2] = 0,
    e[3] = 1,
    e
}
function Ve(e, t, i) {
    i = i * .5;
    let s = Math.sin(i);
    return e[0] = s * t[0],
    e[1] = s * t[1],
    e[2] = s * t[2],
    e[3] = Math.cos(i),
    e
}
function Pt(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = i[0]
      , l = i[1]
      , c = i[2]
      , o = i[3];
    return e[0] = s * o + h * a + r * c - n * l,
    e[1] = r * o + h * l + n * a - s * c,
    e[2] = n * o + h * c + s * l - r * a,
    e[3] = h * o - s * a - r * l - n * c,
    e
}
function Ze(e, t, i) {
    i *= .5;
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = Math.sin(i)
      , l = Math.cos(i);
    return e[0] = s * l + h * a,
    e[1] = r * l + n * a,
    e[2] = n * l - r * a,
    e[3] = h * l - s * a,
    e
}
function je(e, t, i) {
    i *= .5;
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = Math.sin(i)
      , l = Math.cos(i);
    return e[0] = s * l - n * a,
    e[1] = r * l + h * a,
    e[2] = n * l + s * a,
    e[3] = h * l - r * a,
    e
}
function Qe(e, t, i) {
    i *= .5;
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = Math.sin(i)
      , l = Math.cos(i);
    return e[0] = s * l + r * a,
    e[1] = r * l - s * a,
    e[2] = n * l + h * a,
    e[3] = h * l - n * a,
    e
}
function Ke(e, t, i, s) {
    let r = t[0], n = t[1], h = t[2], a = t[3], l = i[0], c = i[1], o = i[2], u = i[3], f, d, g, p, m;
    return d = r * l + n * c + h * o + a * u,
    d < 0 && (d = -d,
    l = -l,
    c = -c,
    o = -o,
    u = -u),
    1 - d > 1e-6 ? (f = Math.acos(d),
    g = Math.sin(f),
    p = Math.sin((1 - s) * f) / g,
    m = Math.sin(s * f) / g) : (p = 1 - s,
    m = s),
    e[0] = p * r + m * l,
    e[1] = p * n + m * c,
    e[2] = p * h + m * o,
    e[3] = p * a + m * u,
    e
}
function Je(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = i * i + s * s + r * r + n * n
      , a = h ? 1 / h : 0;
    return e[0] = -i * a,
    e[1] = -s * a,
    e[2] = -r * a,
    e[3] = n * a,
    e
}
function ti(e, t) {
    return e[0] = -t[0],
    e[1] = -t[1],
    e[2] = -t[2],
    e[3] = t[3],
    e
}
function ei(e, t) {
    let i = t[0] + t[4] + t[8], s;
    if (i > 0)
        s = Math.sqrt(i + 1),
        e[3] = .5 * s,
        s = .5 / s,
        e[0] = (t[5] - t[7]) * s,
        e[1] = (t[6] - t[2]) * s,
        e[2] = (t[1] - t[3]) * s;
    else {
        let r = 0;
        t[4] > t[0] && (r = 1),
        t[8] > t[r * 3 + r] && (r = 2);
        let n = (r + 1) % 3
          , h = (r + 2) % 3;
        s = Math.sqrt(t[r * 3 + r] - t[n * 3 + n] - t[h * 3 + h] + 1),
        e[r] = .5 * s,
        s = .5 / s,
        e[3] = (t[n * 3 + h] - t[h * 3 + n]) * s,
        e[n] = (t[n * 3 + r] + t[r * 3 + n]) * s,
        e[h] = (t[h * 3 + r] + t[r * 3 + h]) * s
    }
    return e
}
function ii(e, t, i="YXZ") {
    let s = Math.sin(t[0] * .5)
      , r = Math.cos(t[0] * .5)
      , n = Math.sin(t[1] * .5)
      , h = Math.cos(t[1] * .5)
      , a = Math.sin(t[2] * .5)
      , l = Math.cos(t[2] * .5);
    return i === "XYZ" ? (e[0] = s * h * l + r * n * a,
    e[1] = r * n * l - s * h * a,
    e[2] = r * h * a + s * n * l,
    e[3] = r * h * l - s * n * a) : i === "YXZ" ? (e[0] = s * h * l + r * n * a,
    e[1] = r * n * l - s * h * a,
    e[2] = r * h * a - s * n * l,
    e[3] = r * h * l + s * n * a) : i === "ZXY" ? (e[0] = s * h * l - r * n * a,
    e[1] = r * n * l + s * h * a,
    e[2] = r * h * a + s * n * l,
    e[3] = r * h * l - s * n * a) : i === "ZYX" ? (e[0] = s * h * l - r * n * a,
    e[1] = r * n * l + s * h * a,
    e[2] = r * h * a - s * n * l,
    e[3] = r * h * l + s * n * a) : i === "YZX" ? (e[0] = s * h * l + r * n * a,
    e[1] = r * n * l + s * h * a,
    e[2] = r * h * a - s * n * l,
    e[3] = r * h * l - s * n * a) : i === "XZY" && (e[0] = s * h * l - r * n * a,
    e[1] = r * n * l - s * h * a,
    e[2] = r * h * a + s * n * l,
    e[3] = r * h * l + s * n * a),
    e
}
const si = qe
  , ri = ke
  , ni = We
  , hi = Ge;
class ai extends Array {
    constructor(t=0, i=0, s=0, r=1) {
        super(t, i, s, r),
        this.onChange = () => {}
        ,
        this._target = this;
        const n = ["0", "1", "2", "3"];
        return new Proxy(this,{
            set(h, a) {
                const l = Reflect.set(...arguments);
                return l && n.includes(a) && h.onChange(),
                l
            }
        })
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    get w() {
        return this[3]
    }
    set x(t) {
        this._target[0] = t,
        this.onChange()
    }
    set y(t) {
        this._target[1] = t,
        this.onChange()
    }
    set z(t) {
        this._target[2] = t,
        this.onChange()
    }
    set w(t) {
        this._target[3] = t,
        this.onChange()
    }
    identity() {
        return He(this._target),
        this.onChange(),
        this
    }
    set(t, i, s, r) {
        return t.length ? this.copy(t) : (ri(this._target, t, i, s, r),
        this.onChange(),
        this)
    }
    rotateX(t) {
        return Ze(this._target, this._target, t),
        this.onChange(),
        this
    }
    rotateY(t) {
        return je(this._target, this._target, t),
        this.onChange(),
        this
    }
    rotateZ(t) {
        return Qe(this._target, this._target, t),
        this.onChange(),
        this
    }
    inverse(t=this._target) {
        return Je(this._target, t),
        this.onChange(),
        this
    }
    conjugate(t=this._target) {
        return ti(this._target, t),
        this.onChange(),
        this
    }
    copy(t) {
        return si(this._target, t),
        this.onChange(),
        this
    }
    normalize(t=this._target) {
        return hi(this._target, t),
        this.onChange(),
        this
    }
    multiply(t, i) {
        return i ? Pt(this._target, t, i) : Pt(this._target, this._target, t),
        this.onChange(),
        this
    }
    dot(t) {
        return ni(this._target, t)
    }
    fromMatrix3(t) {
        return ei(this._target, t),
        this.onChange(),
        this
    }
    fromEuler(t, i) {
        return ii(this._target, t, t.order),
        i || this.onChange(),
        this
    }
    fromAxisAngle(t, i) {
        return Ve(this._target, t, i),
        this.onChange(),
        this
    }
    slerp(t, i) {
        return Ke(this._target, this._target, t, i),
        this.onChange(),
        this
    }
    fromArray(t, i=0) {
        return this._target[0] = t[i],
        this._target[1] = t[i + 1],
        this._target[2] = t[i + 2],
        this._target[3] = t[i + 3],
        this.onChange(),
        this
    }
    toArray(t=[], i=0) {
        return t[i] = this[0],
        t[i + 1] = this[1],
        t[i + 2] = this[2],
        t[i + 3] = this[3],
        t
    }
}
const li = 1e-6;
function ci(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15],
    e
}
function oi(e, t, i, s, r, n, h, a, l, c, o, u, f, d, g, p, m) {
    return e[0] = t,
    e[1] = i,
    e[2] = s,
    e[3] = r,
    e[4] = n,
    e[5] = h,
    e[6] = a,
    e[7] = l,
    e[8] = c,
    e[9] = o,
    e[10] = u,
    e[11] = f,
    e[12] = d,
    e[13] = g,
    e[14] = p,
    e[15] = m,
    e
}
function fi(e) {
    return e[0] = 1,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = 1,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[10] = 1,
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
function ui(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = t[4]
      , a = t[5]
      , l = t[6]
      , c = t[7]
      , o = t[8]
      , u = t[9]
      , f = t[10]
      , d = t[11]
      , g = t[12]
      , p = t[13]
      , m = t[14]
      , _ = t[15]
      , T = i * a - s * h
      , E = i * l - r * h
      , x = i * c - n * h
      , y = s * l - r * a
      , w = s * c - n * a
      , A = r * c - n * l
      , C = o * p - u * g
      , S = o * m - f * g
      , b = o * _ - d * g
      , F = u * m - f * p
      , R = u * _ - d * p
      , D = f * _ - d * m
      , v = T * D - E * R + x * F + y * b - w * S + A * C;
    return v ? (v = 1 / v,
    e[0] = (a * D - l * R + c * F) * v,
    e[1] = (r * R - s * D - n * F) * v,
    e[2] = (p * A - m * w + _ * y) * v,
    e[3] = (f * w - u * A - d * y) * v,
    e[4] = (l * b - h * D - c * S) * v,
    e[5] = (i * D - r * b + n * S) * v,
    e[6] = (m * x - g * A - _ * E) * v,
    e[7] = (o * A - f * x + d * E) * v,
    e[8] = (h * R - a * b + c * C) * v,
    e[9] = (s * b - i * R - n * C) * v,
    e[10] = (g * w - p * x + _ * T) * v,
    e[11] = (u * x - o * w - d * T) * v,
    e[12] = (a * S - h * F - l * C) * v,
    e[13] = (i * F - s * S + r * C) * v,
    e[14] = (p * E - g * y - m * T) * v,
    e[15] = (o * y - u * E + f * T) * v,
    e) : null
}
function he(e) {
    let t = e[0]
      , i = e[1]
      , s = e[2]
      , r = e[3]
      , n = e[4]
      , h = e[5]
      , a = e[6]
      , l = e[7]
      , c = e[8]
      , o = e[9]
      , u = e[10]
      , f = e[11]
      , d = e[12]
      , g = e[13]
      , p = e[14]
      , m = e[15]
      , _ = t * h - i * n
      , T = t * a - s * n
      , E = t * l - r * n
      , x = i * a - s * h
      , y = i * l - r * h
      , w = s * l - r * a
      , A = c * g - o * d
      , C = c * p - u * d
      , S = c * m - f * d
      , b = o * p - u * g
      , F = o * m - f * g
      , R = u * m - f * p;
    return _ * R - T * F + E * b + x * S - y * C + w * A
}
function Ot(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = t[4]
      , l = t[5]
      , c = t[6]
      , o = t[7]
      , u = t[8]
      , f = t[9]
      , d = t[10]
      , g = t[11]
      , p = t[12]
      , m = t[13]
      , _ = t[14]
      , T = t[15]
      , E = i[0]
      , x = i[1]
      , y = i[2]
      , w = i[3];
    return e[0] = E * s + x * a + y * u + w * p,
    e[1] = E * r + x * l + y * f + w * m,
    e[2] = E * n + x * c + y * d + w * _,
    e[3] = E * h + x * o + y * g + w * T,
    E = i[4],
    x = i[5],
    y = i[6],
    w = i[7],
    e[4] = E * s + x * a + y * u + w * p,
    e[5] = E * r + x * l + y * f + w * m,
    e[6] = E * n + x * c + y * d + w * _,
    e[7] = E * h + x * o + y * g + w * T,
    E = i[8],
    x = i[9],
    y = i[10],
    w = i[11],
    e[8] = E * s + x * a + y * u + w * p,
    e[9] = E * r + x * l + y * f + w * m,
    e[10] = E * n + x * c + y * d + w * _,
    e[11] = E * h + x * o + y * g + w * T,
    E = i[12],
    x = i[13],
    y = i[14],
    w = i[15],
    e[12] = E * s + x * a + y * u + w * p,
    e[13] = E * r + x * l + y * f + w * m,
    e[14] = E * n + x * c + y * d + w * _,
    e[15] = E * h + x * o + y * g + w * T,
    e
}
function di(e, t, i) {
    let s = i[0], r = i[1], n = i[2], h, a, l, c, o, u, f, d, g, p, m, _;
    return t === e ? (e[12] = t[0] * s + t[4] * r + t[8] * n + t[12],
    e[13] = t[1] * s + t[5] * r + t[9] * n + t[13],
    e[14] = t[2] * s + t[6] * r + t[10] * n + t[14],
    e[15] = t[3] * s + t[7] * r + t[11] * n + t[15]) : (h = t[0],
    a = t[1],
    l = t[2],
    c = t[3],
    o = t[4],
    u = t[5],
    f = t[6],
    d = t[7],
    g = t[8],
    p = t[9],
    m = t[10],
    _ = t[11],
    e[0] = h,
    e[1] = a,
    e[2] = l,
    e[3] = c,
    e[4] = o,
    e[5] = u,
    e[6] = f,
    e[7] = d,
    e[8] = g,
    e[9] = p,
    e[10] = m,
    e[11] = _,
    e[12] = h * s + o * r + g * n + t[12],
    e[13] = a * s + u * r + p * n + t[13],
    e[14] = l * s + f * r + m * n + t[14],
    e[15] = c * s + d * r + _ * n + t[15]),
    e
}
function gi(e, t, i) {
    let s = i[0]
      , r = i[1]
      , n = i[2];
    return e[0] = t[0] * s,
    e[1] = t[1] * s,
    e[2] = t[2] * s,
    e[3] = t[3] * s,
    e[4] = t[4] * r,
    e[5] = t[5] * r,
    e[6] = t[6] * r,
    e[7] = t[7] * r,
    e[8] = t[8] * n,
    e[9] = t[9] * n,
    e[10] = t[10] * n,
    e[11] = t[11] * n,
    e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15],
    e
}
function pi(e, t, i, s) {
    let r = s[0], n = s[1], h = s[2], a = Math.hypot(r, n, h), l, c, o, u, f, d, g, p, m, _, T, E, x, y, w, A, C, S, b, F, R, D, v, $;
    return Math.abs(a) < li ? null : (a = 1 / a,
    r *= a,
    n *= a,
    h *= a,
    l = Math.sin(i),
    c = Math.cos(i),
    o = 1 - c,
    u = t[0],
    f = t[1],
    d = t[2],
    g = t[3],
    p = t[4],
    m = t[5],
    _ = t[6],
    T = t[7],
    E = t[8],
    x = t[9],
    y = t[10],
    w = t[11],
    A = r * r * o + c,
    C = n * r * o + h * l,
    S = h * r * o - n * l,
    b = r * n * o - h * l,
    F = n * n * o + c,
    R = h * n * o + r * l,
    D = r * h * o + n * l,
    v = n * h * o - r * l,
    $ = h * h * o + c,
    e[0] = u * A + p * C + E * S,
    e[1] = f * A + m * C + x * S,
    e[2] = d * A + _ * C + y * S,
    e[3] = g * A + T * C + w * S,
    e[4] = u * b + p * F + E * R,
    e[5] = f * b + m * F + x * R,
    e[6] = d * b + _ * F + y * R,
    e[7] = g * b + T * F + w * R,
    e[8] = u * D + p * v + E * $,
    e[9] = f * D + m * v + x * $,
    e[10] = d * D + _ * v + y * $,
    e[11] = g * D + T * v + w * $,
    t !== e && (e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15]),
    e)
}
function mi(e, t) {
    return e[0] = t[12],
    e[1] = t[13],
    e[2] = t[14],
    e
}
function ae(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[4]
      , h = t[5]
      , a = t[6]
      , l = t[8]
      , c = t[9]
      , o = t[10];
    return e[0] = Math.hypot(i, s, r),
    e[1] = Math.hypot(n, h, a),
    e[2] = Math.hypot(l, c, o),
    e
}
function _i(e) {
    let t = e[0]
      , i = e[1]
      , s = e[2]
      , r = e[4]
      , n = e[5]
      , h = e[6]
      , a = e[8]
      , l = e[9]
      , c = e[10];
    const o = t * t + i * i + s * s
      , u = r * r + n * n + h * h
      , f = a * a + l * l + c * c;
    return Math.sqrt(Math.max(o, u, f))
}
const le = function() {
    const e = [1, 1, 1];
    return function(t, i) {
        let s = e;
        ae(s, i);
        let r = 1 / s[0]
          , n = 1 / s[1]
          , h = 1 / s[2]
          , a = i[0] * r
          , l = i[1] * n
          , c = i[2] * h
          , o = i[4] * r
          , u = i[5] * n
          , f = i[6] * h
          , d = i[8] * r
          , g = i[9] * n
          , p = i[10] * h
          , m = a + u + p
          , _ = 0;
        return m > 0 ? (_ = Math.sqrt(m + 1) * 2,
        t[3] = .25 * _,
        t[0] = (f - g) / _,
        t[1] = (d - c) / _,
        t[2] = (l - o) / _) : a > u && a > p ? (_ = Math.sqrt(1 + a - u - p) * 2,
        t[3] = (f - g) / _,
        t[0] = .25 * _,
        t[1] = (l + o) / _,
        t[2] = (d + c) / _) : u > p ? (_ = Math.sqrt(1 + u - a - p) * 2,
        t[3] = (d - c) / _,
        t[0] = (l + o) / _,
        t[1] = .25 * _,
        t[2] = (f + g) / _) : (_ = Math.sqrt(1 + p - a - u) * 2,
        t[3] = (l - o) / _,
        t[0] = (d + c) / _,
        t[1] = (f + g) / _,
        t[2] = .25 * _),
        t
    }
}();
function xi(e, t, i, s) {
    let r = j([e[0], e[1], e[2]]);
    const n = j([e[4], e[5], e[6]])
      , h = j([e[8], e[9], e[10]]);
    he(e) < 0 && (r = -r),
    i[0] = e[12],
    i[1] = e[13],
    i[2] = e[14];
    const l = e.slice()
      , c = 1 / r
      , o = 1 / n
      , u = 1 / h;
    l[0] *= c,
    l[1] *= c,
    l[2] *= c,
    l[4] *= o,
    l[5] *= o,
    l[6] *= o,
    l[8] *= u,
    l[9] *= u,
    l[10] *= u,
    le(t, l),
    s[0] = r,
    s[1] = n,
    s[2] = h
}
function Ei(e, t, i, s) {
    const r = e
      , n = t[0]
      , h = t[1]
      , a = t[2]
      , l = t[3]
      , c = n + n
      , o = h + h
      , u = a + a
      , f = n * c
      , d = n * o
      , g = n * u
      , p = h * o
      , m = h * u
      , _ = a * u
      , T = l * c
      , E = l * o
      , x = l * u
      , y = s[0]
      , w = s[1]
      , A = s[2];
    return r[0] = (1 - (p + _)) * y,
    r[1] = (d + x) * y,
    r[2] = (g - E) * y,
    r[3] = 0,
    r[4] = (d - x) * w,
    r[5] = (1 - (f + _)) * w,
    r[6] = (m + T) * w,
    r[7] = 0,
    r[8] = (g + E) * A,
    r[9] = (m - T) * A,
    r[10] = (1 - (f + p)) * A,
    r[11] = 0,
    r[12] = i[0],
    r[13] = i[1],
    r[14] = i[2],
    r[15] = 1,
    r
}
function wi(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = i + i
      , a = s + s
      , l = r + r
      , c = i * h
      , o = s * h
      , u = s * a
      , f = r * h
      , d = r * a
      , g = r * l
      , p = n * h
      , m = n * a
      , _ = n * l;
    return e[0] = 1 - u - g,
    e[1] = o + _,
    e[2] = f - m,
    e[3] = 0,
    e[4] = o - _,
    e[5] = 1 - c - g,
    e[6] = d + p,
    e[7] = 0,
    e[8] = f + m,
    e[9] = d - p,
    e[10] = 1 - c - u,
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
function yi(e, t, i, s, r) {
    let n = 1 / Math.tan(t / 2)
      , h = 1 / (s - r);
    return e[0] = n / i,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = n,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[10] = (r + s) * h,
    e[11] = -1,
    e[12] = 0,
    e[13] = 0,
    e[14] = 2 * r * s * h,
    e[15] = 0,
    e
}
function vi(e, t, i, s, r, n, h) {
    let a = 1 / (t - i)
      , l = 1 / (s - r)
      , c = 1 / (n - h);
    return e[0] = -2 * a,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = -2 * l,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[10] = 2 * c,
    e[11] = 0,
    e[12] = (t + i) * a,
    e[13] = (r + s) * l,
    e[14] = (h + n) * c,
    e[15] = 1,
    e
}
function Ti(e, t, i, s) {
    let r = t[0]
      , n = t[1]
      , h = t[2]
      , a = s[0]
      , l = s[1]
      , c = s[2]
      , o = r - i[0]
      , u = n - i[1]
      , f = h - i[2]
      , d = o * o + u * u + f * f;
    d === 0 ? f = 1 : (d = 1 / Math.sqrt(d),
    o *= d,
    u *= d,
    f *= d);
    let g = l * f - c * u
      , p = c * o - a * f
      , m = a * u - l * o;
    return d = g * g + p * p + m * m,
    d === 0 && (c ? a += 1e-6 : l ? c += 1e-6 : l += 1e-6,
    g = l * f - c * u,
    p = c * o - a * f,
    m = a * u - l * o,
    d = g * g + p * p + m * m),
    d = 1 / Math.sqrt(d),
    g *= d,
    p *= d,
    m *= d,
    e[0] = g,
    e[1] = p,
    e[2] = m,
    e[3] = 0,
    e[4] = u * m - f * p,
    e[5] = f * g - o * m,
    e[6] = o * p - u * g,
    e[7] = 0,
    e[8] = o,
    e[9] = u,
    e[10] = f,
    e[11] = 0,
    e[12] = r,
    e[13] = n,
    e[14] = h,
    e[15] = 1,
    e
}
function Bt(e, t, i) {
    return e[0] = t[0] + i[0],
    e[1] = t[1] + i[1],
    e[2] = t[2] + i[2],
    e[3] = t[3] + i[3],
    e[4] = t[4] + i[4],
    e[5] = t[5] + i[5],
    e[6] = t[6] + i[6],
    e[7] = t[7] + i[7],
    e[8] = t[8] + i[8],
    e[9] = t[9] + i[9],
    e[10] = t[10] + i[10],
    e[11] = t[11] + i[11],
    e[12] = t[12] + i[12],
    e[13] = t[13] + i[13],
    e[14] = t[14] + i[14],
    e[15] = t[15] + i[15],
    e
}
function Xt(e, t, i) {
    return e[0] = t[0] - i[0],
    e[1] = t[1] - i[1],
    e[2] = t[2] - i[2],
    e[3] = t[3] - i[3],
    e[4] = t[4] - i[4],
    e[5] = t[5] - i[5],
    e[6] = t[6] - i[6],
    e[7] = t[7] - i[7],
    e[8] = t[8] - i[8],
    e[9] = t[9] - i[9],
    e[10] = t[10] - i[10],
    e[11] = t[11] - i[11],
    e[12] = t[12] - i[12],
    e[13] = t[13] - i[13],
    e[14] = t[14] - i[14],
    e[15] = t[15] - i[15],
    e
}
function Mi(e, t, i) {
    return e[0] = t[0] * i,
    e[1] = t[1] * i,
    e[2] = t[2] * i,
    e[3] = t[3] * i,
    e[4] = t[4] * i,
    e[5] = t[5] * i,
    e[6] = t[6] * i,
    e[7] = t[7] * i,
    e[8] = t[8] * i,
    e[9] = t[9] * i,
    e[10] = t[10] * i,
    e[11] = t[11] * i,
    e[12] = t[12] * i,
    e[13] = t[13] * i,
    e[14] = t[14] * i,
    e[15] = t[15] * i,
    e
}
class nt extends Array {
    constructor(t=1, i=0, s=0, r=0, n=0, h=1, a=0, l=0, c=0, o=0, u=1, f=0, d=0, g=0, p=0, m=1) {
        return super(t, i, s, r, n, h, a, l, c, o, u, f, d, g, p, m),
        this
    }
    get x() {
        return this[12]
    }
    get y() {
        return this[13]
    }
    get z() {
        return this[14]
    }
    get w() {
        return this[15]
    }
    set x(t) {
        this[12] = t
    }
    set y(t) {
        this[13] = t
    }
    set z(t) {
        this[14] = t
    }
    set w(t) {
        this[15] = t
    }
    set(t, i, s, r, n, h, a, l, c, o, u, f, d, g, p, m) {
        return t.length ? this.copy(t) : (oi(this, t, i, s, r, n, h, a, l, c, o, u, f, d, g, p, m),
        this)
    }
    translate(t, i=this) {
        return di(this, i, t),
        this
    }
    rotate(t, i, s=this) {
        return pi(this, s, t, i),
        this
    }
    scale(t, i=this) {
        return gi(this, i, typeof t == "number" ? [t, t, t] : t),
        this
    }
    add(t, i) {
        return i ? Bt(this, t, i) : Bt(this, this, t),
        this
    }
    sub(t, i) {
        return i ? Xt(this, t, i) : Xt(this, this, t),
        this
    }
    multiply(t, i) {
        return t.length ? i ? Ot(this, t, i) : Ot(this, this, t) : Mi(this, this, t),
        this
    }
    identity() {
        return fi(this),
        this
    }
    copy(t) {
        return ci(this, t),
        this
    }
    fromPerspective({fov: t, aspect: i, near: s, far: r}={}) {
        return yi(this, t, i, s, r),
        this
    }
    fromOrthogonal({left: t, right: i, bottom: s, top: r, near: n, far: h}) {
        return vi(this, t, i, s, r, n, h),
        this
    }
    fromQuaternion(t) {
        return wi(this, t),
        this
    }
    setPosition(t) {
        return this.x = t[0],
        this.y = t[1],
        this.z = t[2],
        this
    }
    inverse(t=this) {
        return ui(this, t),
        this
    }
    compose(t, i, s) {
        return Ei(this, t, i, s),
        this
    }
    decompose(t, i, s) {
        return xi(this, t, i, s),
        this
    }
    getRotation(t) {
        return le(t, this),
        this
    }
    getTranslation(t) {
        return mi(t, this),
        this
    }
    getScaling(t) {
        return ae(t, this),
        this
    }
    getMaxScaleOnAxis() {
        return _i(this)
    }
    lookAt(t, i, s) {
        return Ti(this, t, i, s),
        this
    }
    determinant() {
        return he(this)
    }
    fromArray(t, i=0) {
        return this[0] = t[i],
        this[1] = t[i + 1],
        this[2] = t[i + 2],
        this[3] = t[i + 3],
        this[4] = t[i + 4],
        this[5] = t[i + 5],
        this[6] = t[i + 6],
        this[7] = t[i + 7],
        this[8] = t[i + 8],
        this[9] = t[i + 9],
        this[10] = t[i + 10],
        this[11] = t[i + 11],
        this[12] = t[i + 12],
        this[13] = t[i + 13],
        this[14] = t[i + 14],
        this[15] = t[i + 15],
        this
    }
    toArray(t=[], i=0) {
        return t[i] = this[0],
        t[i + 1] = this[1],
        t[i + 2] = this[2],
        t[i + 3] = this[3],
        t[i + 4] = this[4],
        t[i + 5] = this[5],
        t[i + 6] = this[6],
        t[i + 7] = this[7],
        t[i + 8] = this[8],
        t[i + 9] = this[9],
        t[i + 10] = this[10],
        t[i + 11] = this[11],
        t[i + 12] = this[12],
        t[i + 13] = this[13],
        t[i + 14] = this[14],
        t[i + 15] = this[15],
        t
    }
}
function Ai(e, t, i="YXZ") {
    return i === "XYZ" ? (e[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)),
    Math.abs(t[8]) < .99999 ? (e[0] = Math.atan2(-t[9], t[10]),
    e[2] = Math.atan2(-t[4], t[0])) : (e[0] = Math.atan2(t[6], t[5]),
    e[2] = 0)) : i === "YXZ" ? (e[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)),
    Math.abs(t[9]) < .99999 ? (e[1] = Math.atan2(t[8], t[10]),
    e[2] = Math.atan2(t[1], t[5])) : (e[1] = Math.atan2(-t[2], t[0]),
    e[2] = 0)) : i === "ZXY" ? (e[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)),
    Math.abs(t[6]) < .99999 ? (e[1] = Math.atan2(-t[2], t[10]),
    e[2] = Math.atan2(-t[4], t[5])) : (e[1] = 0,
    e[2] = Math.atan2(t[1], t[0]))) : i === "ZYX" ? (e[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)),
    Math.abs(t[2]) < .99999 ? (e[0] = Math.atan2(t[6], t[10]),
    e[2] = Math.atan2(t[1], t[0])) : (e[0] = 0,
    e[2] = Math.atan2(-t[4], t[5]))) : i === "YZX" ? (e[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)),
    Math.abs(t[1]) < .99999 ? (e[0] = Math.atan2(-t[9], t[5]),
    e[1] = Math.atan2(-t[2], t[0])) : (e[0] = 0,
    e[1] = Math.atan2(t[8], t[10]))) : i === "XZY" && (e[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)),
    Math.abs(t[4]) < .99999 ? (e[0] = Math.atan2(t[6], t[5]),
    e[1] = Math.atan2(t[8], t[0])) : (e[0] = Math.atan2(-t[9], t[10]),
    e[1] = 0)),
    e
}
const Yt = new nt;
class bi extends Array {
    constructor(t=0, i=t, s=t, r="YXZ") {
        super(t, i, s),
        this.order = r,
        this.onChange = () => {}
        ,
        this._target = this;
        const n = ["0", "1", "2"];
        return new Proxy(this,{
            set(h, a) {
                const l = Reflect.set(...arguments);
                return l && n.includes(a) && h.onChange(),
                l
            }
        })
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(t) {
        this._target[0] = t,
        this.onChange()
    }
    set y(t) {
        this._target[1] = t,
        this.onChange()
    }
    set z(t) {
        this._target[2] = t,
        this.onChange()
    }
    set(t, i=t, s=t) {
        return t.length ? this.copy(t) : (this._target[0] = t,
        this._target[1] = i,
        this._target[2] = s,
        this.onChange(),
        this)
    }
    copy(t) {
        return this._target[0] = t[0],
        this._target[1] = t[1],
        this._target[2] = t[2],
        this.onChange(),
        this
    }
    reorder(t) {
        return this._target.order = t,
        this.onChange(),
        this
    }
    fromRotationMatrix(t, i=this.order) {
        return Ai(this._target, t, i),
        this.onChange(),
        this
    }
    fromQuaternion(t, i=this.order, s) {
        return Yt.fromQuaternion(t),
        this._target.fromRotationMatrix(Yt, i),
        s || this.onChange(),
        this
    }
    fromArray(t, i=0) {
        return this._target[0] = t[i],
        this._target[1] = t[i + 1],
        this._target[2] = t[i + 2],
        this
    }
    toArray(t=[], i=0) {
        return t[i] = this[0],
        t[i + 1] = this[1],
        t[i + 2] = this[2],
        t
    }
}
class Ri {
    constructor() {
        this.parent = null,
        this.children = [],
        this.visible = !0,
        this.matrix = new nt,
        this.worldMatrix = new nt,
        this.matrixAutoUpdate = !0,
        this.worldMatrixNeedsUpdate = !1,
        this.position = new z,
        this.quaternion = new ai,
        this.scale = new z(1),
        this.rotation = new bi,
        this.up = new z(0,1,0),
        this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0),
        this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)
    }
    setParent(t, i=!0) {
        this.parent && t !== this.parent && this.parent.removeChild(this, !1),
        this.parent = t,
        i && t && t.addChild(this, !1)
    }
    addChild(t, i=!0) {
        ~this.children.indexOf(t) || this.children.push(t),
        i && t.setParent(this, !1)
    }
    removeChild(t, i=!0) {
        ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
        i && t.setParent(null, !1)
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        this.worldMatrixNeedsUpdate = !1,
        t = !0);
        for (let i = 0, s = this.children.length; i < s; i++)
            this.children[i].updateMatrixWorld(t)
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale),
        this.worldMatrixNeedsUpdate = !0
    }
    traverse(t) {
        if (!t(this))
            for (let i = 0, s = this.children.length; i < s; i++)
                this.children[i].traverse(t)
    }
    decompose() {
        this.matrix.decompose(this.quaternion._target, this.position, this.scale),
        this.rotation.fromQuaternion(this.quaternion)
    }
    lookAt(t, i=!1) {
        i ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
        this.matrix.getRotation(this.quaternion._target),
        this.rotation.fromQuaternion(this.quaternion)
    }
}
function Ci(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[4],
    e[4] = t[5],
    e[5] = t[6],
    e[6] = t[8],
    e[7] = t[9],
    e[8] = t[10],
    e
}
function Si(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = i + i
      , a = s + s
      , l = r + r
      , c = i * h
      , o = s * h
      , u = s * a
      , f = r * h
      , d = r * a
      , g = r * l
      , p = n * h
      , m = n * a
      , _ = n * l;
    return e[0] = 1 - u - g,
    e[3] = o - _,
    e[6] = f + m,
    e[1] = o + _,
    e[4] = 1 - c - g,
    e[7] = d - p,
    e[2] = f - m,
    e[5] = d + p,
    e[8] = 1 - c - u,
    e
}
function Fi(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e
}
function Di(e, t, i, s, r, n, h, a, l, c) {
    return e[0] = t,
    e[1] = i,
    e[2] = s,
    e[3] = r,
    e[4] = n,
    e[5] = h,
    e[6] = a,
    e[7] = l,
    e[8] = c,
    e
}
function Li(e) {
    return e[0] = 1,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 1,
    e[5] = 0,
    e[6] = 0,
    e[7] = 0,
    e[8] = 1,
    e
}
function zi(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = t[4]
      , a = t[5]
      , l = t[6]
      , c = t[7]
      , o = t[8]
      , u = o * h - a * c
      , f = -o * n + a * l
      , d = c * n - h * l
      , g = i * u + s * f + r * d;
    return g ? (g = 1 / g,
    e[0] = u * g,
    e[1] = (-o * s + r * c) * g,
    e[2] = (a * s - r * h) * g,
    e[3] = f * g,
    e[4] = (o * i - r * l) * g,
    e[5] = (-a * i + r * n) * g,
    e[6] = d * g,
    e[7] = (-c * i + s * l) * g,
    e[8] = (h * i - s * n) * g,
    e) : null
}
function $t(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = t[4]
      , l = t[5]
      , c = t[6]
      , o = t[7]
      , u = t[8]
      , f = i[0]
      , d = i[1]
      , g = i[2]
      , p = i[3]
      , m = i[4]
      , _ = i[5]
      , T = i[6]
      , E = i[7]
      , x = i[8];
    return e[0] = f * s + d * h + g * c,
    e[1] = f * r + d * a + g * o,
    e[2] = f * n + d * l + g * u,
    e[3] = p * s + m * h + _ * c,
    e[4] = p * r + m * a + _ * o,
    e[5] = p * n + m * l + _ * u,
    e[6] = T * s + E * h + x * c,
    e[7] = T * r + E * a + x * o,
    e[8] = T * n + E * l + x * u,
    e
}
function Ui(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = t[4]
      , l = t[5]
      , c = t[6]
      , o = t[7]
      , u = t[8]
      , f = i[0]
      , d = i[1];
    return e[0] = s,
    e[1] = r,
    e[2] = n,
    e[3] = h,
    e[4] = a,
    e[5] = l,
    e[6] = f * s + d * h + c,
    e[7] = f * r + d * a + o,
    e[8] = f * n + d * l + u,
    e
}
function Ni(e, t, i) {
    let s = t[0]
      , r = t[1]
      , n = t[2]
      , h = t[3]
      , a = t[4]
      , l = t[5]
      , c = t[6]
      , o = t[7]
      , u = t[8]
      , f = Math.sin(i)
      , d = Math.cos(i);
    return e[0] = d * s + f * h,
    e[1] = d * r + f * a,
    e[2] = d * n + f * l,
    e[3] = d * h - f * s,
    e[4] = d * a - f * r,
    e[5] = d * l - f * n,
    e[6] = c,
    e[7] = o,
    e[8] = u,
    e
}
function Ii(e, t, i) {
    let s = i[0]
      , r = i[1];
    return e[0] = s * t[0],
    e[1] = s * t[1],
    e[2] = s * t[2],
    e[3] = r * t[3],
    e[4] = r * t[4],
    e[5] = r * t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e
}
function Pi(e, t) {
    let i = t[0]
      , s = t[1]
      , r = t[2]
      , n = t[3]
      , h = t[4]
      , a = t[5]
      , l = t[6]
      , c = t[7]
      , o = t[8]
      , u = t[9]
      , f = t[10]
      , d = t[11]
      , g = t[12]
      , p = t[13]
      , m = t[14]
      , _ = t[15]
      , T = i * a - s * h
      , E = i * l - r * h
      , x = i * c - n * h
      , y = s * l - r * a
      , w = s * c - n * a
      , A = r * c - n * l
      , C = o * p - u * g
      , S = o * m - f * g
      , b = o * _ - d * g
      , F = u * m - f * p
      , R = u * _ - d * p
      , D = f * _ - d * m
      , v = T * D - E * R + x * F + y * b - w * S + A * C;
    return v ? (v = 1 / v,
    e[0] = (a * D - l * R + c * F) * v,
    e[1] = (l * b - h * D - c * S) * v,
    e[2] = (h * R - a * b + c * C) * v,
    e[3] = (r * R - s * D - n * F) * v,
    e[4] = (i * D - r * b + n * S) * v,
    e[5] = (s * b - i * R - n * C) * v,
    e[6] = (p * A - m * w + _ * y) * v,
    e[7] = (m * x - g * A - _ * E) * v,
    e[8] = (g * w - p * x + _ * T) * v,
    e) : null
}
class Oi extends Array {
    constructor(t=1, i=0, s=0, r=0, n=1, h=0, a=0, l=0, c=1) {
        return super(t, i, s, r, n, h, a, l, c),
        this
    }
    set(t, i, s, r, n, h, a, l, c) {
        return t.length ? this.copy(t) : (Di(this, t, i, s, r, n, h, a, l, c),
        this)
    }
    translate(t, i=this) {
        return Ui(this, i, t),
        this
    }
    rotate(t, i=this) {
        return Ni(this, i, t),
        this
    }
    scale(t, i=this) {
        return Ii(this, i, t),
        this
    }
    multiply(t, i) {
        return i ? $t(this, t, i) : $t(this, this, t),
        this
    }
    identity() {
        return Li(this),
        this
    }
    copy(t) {
        return Fi(this, t),
        this
    }
    fromMatrix4(t) {
        return Ci(this, t),
        this
    }
    fromQuaternion(t) {
        return Si(this, t),
        this
    }
    fromBasis(t, i, s) {
        return this.set(t[0], t[1], t[2], i[0], i[1], i[2], s[0], s[1], s[2]),
        this
    }
    inverse(t=this) {
        return zi(this, t),
        this
    }
    getNormalMatrix(t) {
        return Pi(this, t),
        this
    }
}
let Bi = 0;
class Xi extends Ri {
    constructor(t, {geometry: i, program: s, mode: r=t.TRIANGLES, frustumCulled: n=!0, renderOrder: h=0}={}) {
        super(),
        t.canvas || console.error("gl not passed as first argument to Mesh"),
        this.gl = t,
        this.id = Bi++,
        this.geometry = i,
        this.program = s,
        this.mode = r,
        this.frustumCulled = n,
        this.renderOrder = h,
        this.modelViewMatrix = new nt,
        this.normalMatrix = new Oi,
        this.beforeRenderCallbacks = [],
        this.afterRenderCallbacks = []
    }
    onBeforeRender(t) {
        return this.beforeRenderCallbacks.push(t),
        this
    }
    onAfterRender(t) {
        return this.afterRenderCallbacks.push(t),
        this
    }
    draw({camera: t}={}) {
        t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
            modelMatrix: {
                value: null
            },
            viewMatrix: {
                value: null
            },
            modelViewMatrix: {
                value: null
            },
            normalMatrix: {
                value: null
            },
            projectionMatrix: {
                value: null
            },
            cameraPosition: {
                value: null
            }
        }),
        this.program.uniforms.projectionMatrix.value = t.projectionMatrix,
        this.program.uniforms.cameraPosition.value = t.worldPosition,
        this.program.uniforms.viewMatrix.value = t.viewMatrix,
        this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
        this.program.uniforms.modelMatrix.value = this.worldMatrix,
        this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
        this.program.uniforms.normalMatrix.value = this.normalMatrix),
        this.beforeRenderCallbacks.forEach(s => s && s({
            mesh: this,
            camera: t
        }));
        let i = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
            flipFaces: i
        }),
        this.geometry.draw({
            mode: this.mode,
            program: this.program
        }),
        this.afterRenderCallbacks.forEach(s => s && s({
            mesh: this,
            camera: t
        }))
    }
}
const qt = new Uint8Array(4);
function kt(e) {
    return (e & e - 1) === 0
}
let Yi = 1;
class Tt {
    constructor(t, {image: i, target: s=t.TEXTURE_2D, type: r=t.UNSIGNED_BYTE, format: n=t.RGBA, internalFormat: h=n, wrapS: a=t.CLAMP_TO_EDGE, wrapT: l=t.CLAMP_TO_EDGE, wrapR: c=t.CLAMP_TO_EDGE, generateMipmaps: o=s === (t.TEXTURE_2D || t.TEXTURE_CUBE_MAP), minFilter: u=o ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR, magFilter: f=t.LINEAR, premultiplyAlpha: d=!1, unpackAlignment: g=4, flipY: p=s == (t.TEXTURE_2D || t.TEXTURE_3D), anisotropy: m=0, level: _=0, width: T, height: E=T, length: x=1}={}) {
        this.gl = t,
        this.id = Yi++,
        this.image = i,
        this.target = s,
        this.type = r,
        this.format = n,
        this.internalFormat = h,
        this.minFilter = u,
        this.magFilter = f,
        this.wrapS = a,
        this.wrapT = l,
        this.wrapR = c,
        this.generateMipmaps = o,
        this.premultiplyAlpha = d,
        this.unpackAlignment = g,
        this.flipY = p,
        this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy),
        this.level = _,
        this.width = T,
        this.height = E,
        this.length = x,
        this.texture = this.gl.createTexture(),
        this.store = {
            image: null
        },
        this.glState = this.gl.renderer.state,
        this.state = {},
        this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
        this.state.magFilter = this.gl.LINEAR,
        this.state.wrapS = this.gl.REPEAT,
        this.state.wrapT = this.gl.REPEAT,
        this.state.anisotropy = 0
    }
    bind() {
        this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
        this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
    }
    update(t=0) {
        const i = !(this.image === this.store.image && !this.needsUpdate);
        if ((i || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t),
        this.bind()),
        !!i) {
            if (this.needsUpdate = !1,
            this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
            this.glState.flipY = this.flipY),
            this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
            this.glState.premultiplyAlpha = this.premultiplyAlpha),
            this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
            this.glState.unpackAlignment = this.unpackAlignment),
            this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
            this.state.minFilter = this.minFilter),
            this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
            this.state.magFilter = this.magFilter),
            this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
            this.state.wrapS = this.wrapS),
            this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
            this.state.wrapT = this.wrapT),
            this.wrapR !== this.state.wrapR && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR),
            this.state.wrapR = this.wrapR),
            this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
            this.state.anisotropy = this.anisotropy),
            this.image) {
                if (this.image.width && (this.width = this.image.width,
                this.height = this.image.height),
                this.target === this.gl.TEXTURE_CUBE_MAP)
                    for (let s = 0; s < 6; s++)
                        this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + s, this.level, this.internalFormat, this.format, this.type, this.image[s]);
                else if (ArrayBuffer.isView(this.image))
                    this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : (this.target === this.gl.TEXTURE_2D_ARRAY || this.target === this.gl.TEXTURE_3D) && this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                else if (this.image.isCompressedTexture)
                    for (let s = 0; s < this.image.length; s++)
                        this.gl.compressedTexImage2D(this.target, s, this.internalFormat, this.image[s].width, this.image[s].height, 0, this.image[s].data);
                else
                    this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!kt(this.image.width) || !kt(this.image.height)) ? (this.generateMipmaps = !1,
                this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target))
            } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let s = 0; s < 6; s++)
                    this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, qt);
            else
                this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, qt);
            this.store.image = this.image
        }
    }
}
class ft {
    constructor(t, {width: i=t.canvas.width, height: s=t.canvas.height, target: r=t.FRAMEBUFFER, color: n=1, depth: h=!0, stencil: a=!1, depthTexture: l=!1, wrapS: c=t.CLAMP_TO_EDGE, wrapT: o=t.CLAMP_TO_EDGE, wrapR: u=t.CLAMP_TO_EDGE, minFilter: f=t.LINEAR, magFilter: d=f, type: g=t.UNSIGNED_BYTE, format: p=t.RGBA, internalFormat: m=p, unpackAlignment: _, premultiplyAlpha: T}={}) {
        this.gl = t,
        this.width = i,
        this.height = s,
        this.depth = h,
        this.stencil = a,
        this.buffer = this.gl.createFramebuffer(),
        this.target = r,
        this.gl.renderer.bindFramebuffer(this),
        this.textures = [];
        const E = [];
        for (let x = 0; x < n; x++)
            this.textures.push(new Tt(t,{
                width: i,
                height: s,
                wrapS: c,
                wrapT: o,
                wrapR: u,
                minFilter: f,
                magFilter: d,
                type: g,
                format: p,
                internalFormat: m,
                unpackAlignment: _,
                premultiplyAlpha: T,
                flipY: !1,
                generateMipmaps: !1
            })),
            this.textures[x].update(),
            this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + x, this.gl.TEXTURE_2D, this.textures[x].texture, 0),
            E.push(this.gl.COLOR_ATTACHMENT0 + x);
        E.length > 1 && this.gl.renderer.drawBuffers(E),
        this.texture = this.textures[0],
        l && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new Tt(t,{
            width: i,
            height: s,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            format: this.stencil ? this.gl.DEPTH_STENCIL : this.gl.DEPTH_COMPONENT,
            internalFormat: t.renderer.isWebgl2 ? this.stencil ? this.gl.DEPTH24_STENCIL8 : this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
            type: this.stencil ? this.gl.UNSIGNED_INT_24_8 : this.gl.UNSIGNED_INT
        }),
        this.depthTexture.update(),
        this.gl.framebufferTexture2D(this.target, this.stencil ? this.gl.DEPTH_STENCIL_ATTACHMENT : this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (h && !a && (this.depthBuffer = this.gl.createRenderbuffer(),
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, i, s),
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
        a && !h && (this.stencilBuffer = this.gl.createRenderbuffer(),
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, i, s),
        this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
        h && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(),
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, i, s),
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
        this.gl.renderer.bindFramebuffer({
            target: this.target
        })
    }
    setSize(t, i) {
        if (!(this.width === t && this.height === i)) {
            this.width = t,
            this.height = i,
            this.gl.renderer.bindFramebuffer(this);
            for (let s = 0; s < this.textures.length; s++)
                this.textures[s].width = t,
                this.textures[s].height = i,
                this.textures[s].needsUpdate = !0,
                this.textures[s].update(),
                this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + s, this.gl.TEXTURE_2D, this.textures[s].texture, 0);
            this.depthTexture ? (this.depthTexture.width = t,
            this.depthTexture.height = i,
            this.depthTexture.needsUpdate = !0,
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, i)),
            this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, i)),
            this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, i))),
            this.gl.renderer.bindFramebuffer({
                target: this.target
            })
        }
    }
}
const Gt = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};
function Wt(e) {
    e.length === 4 && (e = e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t || console.warn(`Unable to convert hex string ${e} to rgb values`),
    [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255]
}
function $i(e) {
    return e = parseInt(e),
    [(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e & 255) / 255]
}
function Ht(e) {
    return e === void 0 ? [0, 0, 0] : arguments.length === 3 ? arguments : isNaN(e) ? e[0] === "#" ? Wt(e) : Gt[e.toLowerCase()] ? Wt(Gt[e.toLowerCase()]) : (console.warn("Color format not recognised"),
    [0, 0, 0]) : $i(e)
}
class Vt extends Array {
    constructor(t) {
        return Array.isArray(t) ? super(...t) : super(...Ht(...arguments))
    }
    get r() {
        return this[0]
    }
    get g() {
        return this[1]
    }
    get b() {
        return this[2]
    }
    set r(t) {
        this[0] = t
    }
    set g(t) {
        this[1] = t
    }
    set b(t) {
        this[2] = t
    }
    set(t) {
        return Array.isArray(t) ? this.copy(t) : this.copy(Ht(...arguments))
    }
    copy(t) {
        return this[0] = t[0],
        this[1] = t[1],
        this[2] = t[2],
        this
    }
}
function qi(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e
}
function ki(e, t, i) {
    return e[0] = t,
    e[1] = i,
    e
}
function Zt(e, t, i) {
    return e[0] = t[0] + i[0],
    e[1] = t[1] + i[1],
    e
}
function jt(e, t, i) {
    return e[0] = t[0] - i[0],
    e[1] = t[1] - i[1],
    e
}
function Gi(e, t, i) {
    return e[0] = t[0] * i[0],
    e[1] = t[1] * i[1],
    e
}
function Wi(e, t, i) {
    return e[0] = t[0] / i[0],
    e[1] = t[1] / i[1],
    e
}
function ut(e, t, i) {
    return e[0] = t[0] * i,
    e[1] = t[1] * i,
    e
}
function Hi(e, t) {
    var i = t[0] - e[0]
      , s = t[1] - e[1];
    return Math.sqrt(i * i + s * s)
}
function Vi(e, t) {
    var i = t[0] - e[0]
      , s = t[1] - e[1];
    return i * i + s * s
}
function Qt(e) {
    var t = e[0]
      , i = e[1];
    return Math.sqrt(t * t + i * i)
}
function Zi(e) {
    var t = e[0]
      , i = e[1];
    return t * t + i * i
}
function ji(e, t) {
    return e[0] = -t[0],
    e[1] = -t[1],
    e
}
function Qi(e, t) {
    return e[0] = 1 / t[0],
    e[1] = 1 / t[1],
    e
}
function Ki(e, t) {
    var i = t[0]
      , s = t[1]
      , r = i * i + s * s;
    return r > 0 && (r = 1 / Math.sqrt(r)),
    e[0] = t[0] * r,
    e[1] = t[1] * r,
    e
}
function Ji(e, t) {
    return e[0] * t[0] + e[1] * t[1]
}
function Kt(e, t) {
    return e[0] * t[1] - e[1] * t[0]
}
function ts(e, t, i, s) {
    var r = t[0]
      , n = t[1];
    return e[0] = r + s * (i[0] - r),
    e[1] = n + s * (i[1] - n),
    e
}
function es(e, t, i, s, r) {
    const n = Math.exp(-s * r);
    let h = t[0]
      , a = t[1];
    return e[0] = i[0] + (h - i[0]) * n,
    e[1] = i[1] + (a - i[1]) * n,
    e
}
function is(e, t, i) {
    var s = t[0]
      , r = t[1];
    return e[0] = i[0] * s + i[3] * r + i[6],
    e[1] = i[1] * s + i[4] * r + i[7],
    e
}
function ss(e, t, i) {
    let s = t[0]
      , r = t[1];
    return e[0] = i[0] * s + i[4] * r + i[12],
    e[1] = i[1] * s + i[5] * r + i[13],
    e
}
function rs(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
class U extends Array {
    constructor(t=0, i=t) {
        return super(t, i),
        this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set(t, i=t) {
        return t.length ? this.copy(t) : (ki(this, t, i),
        this)
    }
    copy(t) {
        return qi(this, t),
        this
    }
    add(t, i) {
        return i ? Zt(this, t, i) : Zt(this, this, t),
        this
    }
    sub(t, i) {
        return i ? jt(this, t, i) : jt(this, this, t),
        this
    }
    multiply(t) {
        return t.length ? Gi(this, this, t) : ut(this, this, t),
        this
    }
    divide(t) {
        return t.length ? Wi(this, this, t) : ut(this, this, 1 / t),
        this
    }
    inverse(t=this) {
        return Qi(this, t),
        this
    }
    len() {
        return Qt(this)
    }
    distance(t) {
        return t ? Hi(this, t) : Qt(this)
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(t) {
        return t ? Vi(this, t) : Zi(this)
    }
    negate(t=this) {
        return ji(this, t),
        this
    }
    cross(t, i) {
        return i ? Kt(t, i) : Kt(this, t)
    }
    scale(t) {
        return ut(this, this, t),
        this
    }
    normalize() {
        return Ki(this, this),
        this
    }
    dot(t) {
        return Ji(this, t)
    }
    equals(t) {
        return rs(this, t)
    }
    applyMatrix3(t) {
        return is(this, this, t),
        this
    }
    applyMatrix4(t) {
        return ss(this, this, t),
        this
    }
    lerp(t, i) {
        return ts(this, this, t, i),
        this
    }
    smoothLerp(t, i, s) {
        return es(this, this, t, i, s),
        this
    }
    clone() {
        return new U(this[0],this[1])
    }
    fromArray(t, i=0) {
        return this[0] = t[i],
        this[1] = t[i + 1],
        this
    }
    toArray(t=[], i=0) {
        return t[i] = this[0],
        t[i + 1] = this[1],
        t
    }
}
const K = `precision highp float;

attribute vec2 position;
varying vec2 v_uv;

void main () {
    v_uv = position * .5 + .5;
    gl_Position = vec4(position, 0., 1.);
}
`
  , ns = `precision highp float;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main () {
    gl_FragColor = texture2D(u_texture, v_uv);
}
`
  , hs = `precision highp float;

uniform sampler2D u_atlasTexture;
uniform vec2 u_atlasTextureSize;
uniform vec2 u_resolution;
uniform vec2 u_viewportResolution;
uniform vec2 u_charColRowCount;
uniform vec2 u_charSize;

uniform vec3 u_textColor;
uniform vec3 u_bgColor;

uniform sampler2D u_drawCombineTexture;

varying vec2 v_uv;

float linearstep(float edge0, float edge1, float x) {
    return clamp((x - edge0) / (edge1 - edge0), 0., 1.);
}

vec4 hash43(vec3 p) {
	vec4 p4 = fract(vec4(p.xyzx)  * vec4(.1031, .1030, .0973, .1099));
    p4 += dot(p4, p4.wzxy+33.33);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}

void main () {
    float charScale = mix(0.5, 1., linearstep(0.5, 1., u_viewportResolution.x / 1920.));
    float dpr = u_resolution.x / u_viewportResolution.x;
    vec2 screenChar = gl_FragCoord.xy / u_charSize / dpr / charScale;
    vec2 screenCharXY = floor(screenChar);
    vec2 drawUv = (screenCharXY + .5) / u_charColRowCount * charScale;

    vec4 draw = texture2D(u_drawCombineTexture, drawUv);

    vec4 rands = hash43(vec3(screenCharXY, 0.));

    vec2 shade2 = vec2(draw.xy);
    shade2 = floor(shade2 * 8.999);
    vec2 shadeUv = vec2(floor(shade2.x / 3.), shade2.y);
    float shadeChannel = mod(shade2.x, 3.);
    vec3 shadeRGB = vec3(shadeChannel < .5 ? 1. : 0., abs(shadeChannel - 1.) < .5 ? 1. : 0., shadeChannel > 1.5 ? 1. : 0.);

    vec2 charUv = fract(screenChar) + shadeUv;
    charUv /= vec2(3., 9.);

    vec4 tex = texture2D(u_atlasTexture, charUv);
    float shade = dot(tex.rgb, shadeRGB) * 0.08;

    vec3 color = mix(u_bgColor, u_textColor, shade);

    gl_FragColor = vec4(color, 1.);
}
`
  , as = `precision highp float;

uniform sampler2D u_drawTexture;

uniform vec2 u_prevMouseXY;
uniform vec2 u_currMouseXY;
uniform vec2 u_charColRowCount;
uniform vec2 u_charSize;
uniform float u_damp;
uniform float u_mouseStrength;

varying vec2 v_uv;

float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

void main () {
    vec2 charAspect = vec2(u_charSize.x / u_charSize.y, 1.);
    vec2 topXY = (floor(gl_FragCoord.xy) + vec2(0.5, 0.75)) * charAspect;
    vec2 bottomXY = (floor(gl_FragCoord.xy) + vec2(0.5, 0.25)) * charAspect;

    vec2 prevMouseXY = (u_prevMouseXY * .5 + .5) * u_charColRowCount * charAspect;
    vec2 currMouseXY = (u_currMouseXY * .5 + .5) * u_charColRowCount * charAspect;

    float topDist = sdSegment(topXY, prevMouseXY, currMouseXY);
    float bottomDist = sdSegment(bottomXY, prevMouseXY, currMouseXY);

    vec2 shades = smoothstep(vec2(2.5), vec2(1.), vec2(topDist, bottomDist));
    shades *= shades * u_mouseStrength;

    vec3 color = texture2D(u_drawTexture, v_uv).rgb;
    color.rg = max(color.rg * u_damp, shades);

    gl_FragColor = vec4(color, 1.);
}
`
  , ls = `precision highp float;
uniform sampler2D u_drawTexture;
uniform vec2 u_charColRowCount;
uniform vec2 u_charSize;

uniform vec3 u_pulses[PULSE_COUNT]; // x, y, life

varying vec2 v_uv;

vec2 linearstep(vec2 edge0, vec2 edge1, vec2 x) {
    return clamp((x - edge0) / (edge1 - edge0), vec2(0.), vec2(1.));
}

float sdHexagon( in vec2 p, in float r ) {
    const vec3 k = vec3(-0.866025404,0.5,0.577350269);
    p = abs(p);
    p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p)*sign(p.y);
}

vec2 rotate30 (vec2 p) {
    return mat2(0.866025, -0.5, 0.5, 0.866025) * p;
}

void main () {
    vec2 charAspect = vec2(u_charSize.x / u_charSize.y, 1.);
    vec2 topXY = (floor(gl_FragCoord.xy) + vec2(0.5, 0.75)) * charAspect;
    vec2 bottomXY = (floor(gl_FragCoord.xy) + vec2(0.5, 0.25)) * charAspect;

    vec2 shades = vec2(0.);

    for (int i = 0; i < PULSE_COUNT; i++) {
        vec3 pulse = u_pulses[i];
        vec2 pulseXY = (pulse.xy * .5 + .5) * u_charColRowCount * charAspect;
        float pulseLife = pulse.z;

        float pulseRadius = (1. - pulseLife * pulseLife) * u_charColRowCount.y * 0.4;

        float topDist = abs(sdHexagon(rotate30(topXY - pulseXY), pulseRadius));
        float bottomDist = abs(sdHexagon(rotate30(bottomXY - pulseXY), pulseRadius));

        shades = max(linearstep(vec2(7.5 - pulseLife * 5.), vec2(0.), vec2(topDist, bottomDist)) * pulseLife * pulseLife * 0.4, shades);
    }

    vec3 color = texture2D(u_drawTexture, v_uv).rgb;
    color.rg = max(color.rg, shades);

    gl_FragColor = vec4(color, 1.);

}
`;
function ce(e, t, i) {
    return e < t ? t : e > i ? i : e
}
function cs(e, t, i) {
    return ce((i - e) / (t - e), 0, 1)
}
function os(e) {
    return ce(e, 0, 1)
}
function fs(e, t, i, s, r) {
    return e = cs(t, i, e),
    s + e * (r - s)
}
function us(e, t, i) {
    return e + (t - e) * i
}
let L, B, dt, gt, pt, P, st = new U, I = new U, mt = new U, N, _t = !1, rt = new U(-100,0), V = new U(-100,0), q, X, J;
const tt = 3;
let Z = []
  , xt = -1;
const oe = 16
  , fe = 26;
let k, G, et = !0, W = !0, M = {
    u_drawTexture: {
        value: null
    },
    u_drawCombineTexture: {
        value: null
    },
    u_charColRowCount: {
        value: new U
    },
    u_charSize: {
        value: new U(oe,fe)
    },
    u_prevMouseXY: {
        value: rt
    },
    u_currMouseXY: {
        value: V
    },
    u_mouseStrength: {
        value: 0
    },
    u_viewportResolution: {
        value: I
    },
    u_resolution: {
        value: st
    },
    u_bgColor: {
        value: new Vt
    },
    u_textColor: {
        value: new Vt
    },
    u_pulses: {
        value: Z
    }
};
class ds {
    preInit() {
        B = new $e({
            alpha: !1,
            canvas: document.querySelector("#bg")
        }),
        L = B.gl,
        N = new Tt(L,{
            image: new Image,
            generateMipmaps: !1,
            minFilter: L.LINEAR
        }),
        N.image.src = "/images/atlas.png",
        N.image.complete ? this.init() : N.image.onload = () => {
            this.init()
        }
        ,
        window.addEventListener("touchmove", t => {
            let i = t.touches[0];
            this._setMouseXY(i),
            et && (et = !1,
            W = !0)
        }
        ),
        window.addEventListener("touchstart", t => {
            let i = t.touches[0];
            this._setMouseXY(i),
            W = !0
        }
        ),
        window.addEventListener("mousemove", t => {
            this._setMouseXY(t),
            et && (et = !1,
            W = !0)
        }
        ),
        window.addEventListener("click", t => {
            this.triggerPulse(t)
        }
        );
        for (let t = 0; t < tt; t++)
            Z.push(new z)
    }
    _setMouseXY(t) {
        this._setMouseXYTo(t, V)
    }
    _setMouseXYTo(t, i) {
        i.set(t.clientX / I.x * 2 - 1, 1 - t.clientY / I.y * 2)
    }
    triggerPulse(t) {
        this._setMouseXYTo(t, mt),
        xt = (xt + 1) % tt,
        Z[xt].set(mt.x, mt.y, 1)
    }
    init() {
        N.needsUpdate = !0,
        q = new ft(L,{
            width: 1,
            height: 1
        }),
        X = new ft(L,{
            width: 1,
            height: 1
        }),
        J = new ft(L,{
            width: 1,
            height: 1
        }),
        M.u_drawCombineTexture.value = J.texture;
        const t = new Ie(L,{
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            }
        });
        dt = new Q(L,{
            uniforms: {
                u_atlasTexture: {
                    value: N
                },
                u_atlasTextureSize: {
                    value: new U(N.image.width,N.image.height)
                },
                u_drawCombineTexture: M.u_drawCombineTexture,
                u_resolution: M.u_resolution,
                u_viewportResolution: M.u_viewportResolution,
                u_charColRowCount: M.u_charColRowCount,
                u_charSize: M.u_charSize,
                u_bgColor: M.u_bgColor,
                u_textColor: M.u_textColor
            },
            vertex: K,
            fragment: hs
        }),
        gt = new Q(L,{
            uniforms: {
                u_drawTexture: M.u_drawTexture,
                u_charColRowCount: M.u_charColRowCount,
                u_charSize: M.u_charSize,
                u_prevMouseXY: M.u_prevMouseXY,
                u_currMouseXY: M.u_currMouseXY,
                u_mouseStrength: M.u_mouseStrength,
                u_damp: {
                    value: .5
                }
            },
            vertex: K,
            fragment: as
        }),
        pt = new Q(L,{
            uniforms: {
                u_drawTexture: {
                    value: null
                },
                u_charColRowCount: M.u_charColRowCount,
                u_charSize: M.u_charSize,
                u_pulses: M.u_pulses
            },
            vertex: K,
            fragment: ls.replaceAll("PULSE_COUNT", tt)
        }),
        new Q(L,{
            uniforms: {
                u_texture: {
                    value: null
                }
            },
            vertex: K,
            fragment: ns
        }),
        P = new Xi(L,{
            geometry: t,
            program: dt
        }),
        L.canvas.style.display = "block",
        _t = !0,
        this.resize()
    }
    resize() {
        if (!_t)
            return;
        const t = Math.min(window.devicePixelRatio || 1, 1.5);
        st.set(~~(window.innerWidth * t), ~~(window.innerHeight * t)),
        I.set(window.innerWidth, window.innerHeight),
        B.setSize(st.x, st.y),
        L.canvas.style.width = I.x + "px",
        L.canvas.style.height = I.y + "px",
        k = Math.ceil(I.x / oe),
        G = Math.ceil(I.y / fe),
        q.setSize(k, G),
        X.setSize(k, G),
        J.setSize(k, G),
        M.u_charColRowCount.value.set(k, G)
    }
    _swapDrawTargets() {
        let t = q;
        q = X,
        X = t,
        M.u_drawTexture.value = q.texture
    }
    update(t) {
        if (_t) {
            this._swapDrawTargets(),
            W && (rt.copy(V),
            W = !1),
            P.program = gt,
            gt.uniforms.u_damp.value = Math.exp(-t * 5),
            M.u_mouseStrength.value = os(M.u_mouseStrength.value + (rt.distance(V) > 0 ? 1 : -(1 - Math.exp(-t * 2)))),
            B.render({
                scene: P,
                target: X
            }),
            P.program = pt,
            pt.uniforms.u_drawTexture.value = X.texture;
            for (let i = 0; i < tt; i++) {
                let s = Z[i].z;
                Z[i].z = Math.max(0, s - t * .75)
            }
            B.render({
                scene: P,
                target: J
            }),
            xe() 
            ? (M.u_bgColor.value.set("#141414"), M.u_textColor.value.set("#FFFFFF")) 
            : (M.u_bgColor.value.set("#FCFCFC"), M.u_textColor.value.set("#000000")),
            P.program = dt,
            B.render({
                scene: P
            }),
            rt.copy(V)
        }
    }
}
const bt = new ds;
const it = document.querySelector("#terminal-input")
  , Ts = document.querySelector("#terminal-command")?.textContent
  , Ms = document.querySelector("#mobile-menu-btn");
let Mt, ie = !1, O = window.scrollY, ht = [], At = window.innerHeight, se = window.innerWidth;
const Rt = document.createElement("div");
Rt.style.cssText = "position:fixed;height:100svh;width:0;visibility:hidden;pointer-events:none";
document.documentElement.appendChild(Rt);
function Et() {
    ie || (ie = !0,
    Rs())
}
function As() {
    let e = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver"in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        for (let i of e)
            i.classList.add("is-visible");
        return
    }
    let t = new IntersectionObserver(i => {
        for (let s of i)
            s.isIntersecting && (s.target.classList.add("is-visible"),
            t.unobserve(s.target))
    }
    );
    for (let i of e)
        t.observe(i)
}
function bs() {
    if (Ms?.addEventListener("click", () => {
        document.body.classList.toggle("is-menu-enabled")
    }
    ),
    document.querySelector("#mobile-menu-close")?.addEventListener("click", () => {
        document.body.classList.remove("is-menu-enabled")
    }
    ),
    it) {
        let e;
        it.addEventListener("click", () => {
            navigator.clipboard.writeText(Ts).then( () => {
                clearTimeout(e),
                it.classList.add("copied"),
                e = setTimeout( () => {
                    it.classList.remove("copied")
                }
                , 1200)
            }
            )
        }
        )
    }
    ht = document.querySelectorAll(".image-wrapper");
    for (let e of ht)
        e.img = e.querySelector("img"),
        e.y = -6,
        e.targetY = -6;
    document.fonts ? (document.fonts.ready.then(Et),
    document.fonts.addEventListener("loadingdone", Et)) : Et()
}
function Rs() {
    O = window.scrollY,
    Mt = performance.now() / 1e3,
    As(),
    document.documentElement.classList.add("is-ready");
    let e = document.querySelectorAll(".hover-effect");
    for (let t of e)
        new _e(t);
    window.addEventListener("resize", re),
    re(),
    ue(),
    requestAnimationFrame( () => bt.preInit())
}
// Auto-initialize when loaded as a client module and the background canvas exists
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading')
        window.addEventListener('DOMContentLoaded', () => {
            if (document.querySelector('#bg'))
                Rs();
        });
    else
        document.querySelector('#bg') && Rs();
}
function re() {
    O = window.scrollY;
    let e = Rt.offsetHeight;
    e > 0 ? At = e : Math.abs(window.innerWidth - se) > 1 && (At = window.innerHeight,
    se = window.innerWidth);
    for (let t of ht) {
        let i = t.getBoundingClientRect();
        t.top = i.top + O,
        t.bottom = i.bottom + O
    }
    bt.resize()
}
function ue() {
    O = window.scrollY,
    requestAnimationFrame(ue);
    let e = performance.now() / 1e3
      , t = e - Mt;
    Mt = e;
    for (let i of ht) {
        let s = fs(i.top, O + At, O - (i.bottom - i.top), 0, 1);
        i.targetY = -6 + s * -12,
        i.y = us(i.y, i.targetY, 1 - Math.exp(-t * 18)),
        i.img.style.transform = `translateY(${i.y}%)`
    }
    bt.update(t)
}
bs();
export { Rs };
