(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./wasm_bindgen_paint.js":
/*!*******************************!*\
  !*** ./wasm_bindgen_paint.js ***!
  \*******************************/
/*! exports provided: start, __widl_f_set_property_CSSStyleDeclaration, __widl_instanceof_CanvasRenderingContext2D, __widl_f_begin_path_CanvasRenderingContext2D, __widl_f_stroke_CanvasRenderingContext2D, __widl_f_line_to_CanvasRenderingContext2D, __widl_f_move_to_CanvasRenderingContext2D, __widl_f_create_element_Document, __widl_f_body_Document, __widl_f_add_event_listener_with_callback_EventTarget, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_f_set_width_HTMLCanvasElement, __widl_f_set_height_HTMLCanvasElement, __widl_f_style_HTMLElement, __widl_f_offset_x_MouseEvent, __widl_f_offset_y_MouseEvent, __widl_f_append_child_Node, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_6a80f84471205fc8, __wbg_call_582b20dfcad7fee4, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_cb_drop, __wbindgen_cb_forget, __wbindgen_rethrow, __wbindgen_closure_wrapper14, __wbindgen_defer_start, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_property_CSSStyleDeclaration\", function() { return __widl_f_set_property_CSSStyleDeclaration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_CanvasRenderingContext2D\", function() { return __widl_instanceof_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_begin_path_CanvasRenderingContext2D\", function() { return __widl_f_begin_path_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_stroke_CanvasRenderingContext2D\", function() { return __widl_f_stroke_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_line_to_CanvasRenderingContext2D\", function() { return __widl_f_line_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_move_to_CanvasRenderingContext2D\", function() { return __widl_f_move_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_element_Document\", function() { return __widl_f_create_element_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_body_Document\", function() { return __widl_f_body_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_add_event_listener_with_callback_EventTarget\", function() { return __widl_f_add_event_listener_with_callback_EventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_width_HTMLCanvasElement\", function() { return __widl_f_set_width_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_height_HTMLCanvasElement\", function() { return __widl_f_set_height_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_style_HTMLElement\", function() { return __widl_f_style_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_offset_x_MouseEvent\", function() { return __widl_f_offset_x_MouseEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_offset_y_MouseEvent\", function() { return __widl_f_offset_y_MouseEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_append_child_Node\", function() { return __widl_f_append_child_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_6a80f84471205fc8\", function() { return __wbg_newnoargs_6a80f84471205fc8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_582b20dfcad7fee4\", function() { return __wbg_call_582b20dfcad7fee4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper14\", function() { return __wbindgen_closure_wrapper14; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_defer_start\", function() { return __wbindgen_defer_start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bindgen_paint_bg */ \"./wasm_bindgen_paint_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction start() {\n    return _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __widl_f_set_property_CSSStyleDeclaration(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    let varg3 = getStringFromWasm(arg3, arg4);\n    try {\n        getObject(arg0).setProperty(varg1, varg3);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_CanvasRenderingContext2D(idx) {\n    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;\n}\n\nfunction __widl_f_begin_path_CanvasRenderingContext2D(arg0) {\n    getObject(arg0).beginPath();\n}\n\nfunction __widl_f_stroke_CanvasRenderingContext2D(arg0) {\n    getObject(arg0).stroke();\n}\n\nfunction __widl_f_line_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    getObject(arg0).lineTo(arg1, arg2);\n}\n\nfunction __widl_f_move_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    getObject(arg0).moveTo(arg1, arg2);\n}\n\nfunction __widl_f_create_element_Document(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(getObject(arg0).createElement(varg1));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_body_Document(arg0) {\n\n    const val = getObject(arg0).body;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_f_add_event_listener_with_callback_EventTarget(arg0, arg1, arg2, arg3, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).addEventListener(varg1, getObject(arg3));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = getObject(arg0).getContext(varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {\n    getObject(arg0).width = arg1;\n}\n\nfunction __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {\n    getObject(arg0).height = arg1;\n}\n\nfunction __widl_f_style_HTMLElement(arg0) {\n    return addHeapObject(getObject(arg0).style);\n}\n\nfunction __widl_f_offset_x_MouseEvent(arg0) {\n    return getObject(arg0).offsetX;\n}\n\nfunction __widl_f_offset_y_MouseEvent(arg0) {\n    return getObject(arg0).offsetY;\n}\n\nfunction __widl_f_append_child_Node(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).appendChild(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = getObject(arg0).document;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_newnoargs_6a80f84471205fc8(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction __wbg_call_582b20dfcad7fee4(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction __wbindgen_cb_drop(i) {\n    const obj = getObject(i).original;\n    dropObject(i);\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return 1;\n    }\n    return 0;\n}\n\nconst __wbindgen_cb_forget = dropObject;\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_closure_wrapper14(a, b, _ignored) {\n    const f = _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(6);\n    const d = _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(7);\n    const cb = function(arg0) {\n        this.cnt++;\n        let a = this.a;\n        this.a = 0;\n        try {\n            return f(a, b, addHeapObject(arg0));\n\n        } finally {\n            this.a = a;\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_defer_start() {\n    Promise.resolve().then(() => _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]());\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./wasm_bindgen_paint.js?");

/***/ }),

/***/ "./wasm_bindgen_paint_bg.wasm":
/*!************************************!*\
  !*** ./wasm_bindgen_paint_bg.wasm ***!
  \************************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, start, __wbindgen_start, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_bindgen_paint */ \"./wasm_bindgen_paint.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./wasm_bindgen_paint_bg.wasm?");

/***/ })

}]);