import { test } from "node:test";
import { strictEqual } from "node:assert";
import { add,sub } from "../src/index.js";
test("Test ops",async t => {
    
    await t.test("add",()=>{
        strictEqual(add(5,5),10)
    })

    await t.test("sub",()=>{
        strictEqual(sub(15,5),10)
    })
})