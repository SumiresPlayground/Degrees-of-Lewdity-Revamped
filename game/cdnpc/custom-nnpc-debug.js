function customNNPCErrorReportStack(){
    let ret = ``;

    for (let i = 0; i < V.customNNPC.errorStack.length; i++) {
        ret += `<span class="red">${V.customNNPC.errorStack[i]}</span><br>`
    }

    V.customNNPC.errorStack = [];

    return ret;
}

DefineMacroS("custom-nnpc-DEBUG-report-stack", customNNPCErrorReportStack);