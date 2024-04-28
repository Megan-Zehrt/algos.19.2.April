// 797. All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).


var allPathsSourceTarget = function(graph) {
    
    let list = []

    function backtracking(currentNode, currentArr){

        currentArr.push(currentNode)

        if(currentNode === graph.length-1){
            list.push([...currentArr])
        }

        let neighbours = graph[currentNode]

        for(let n of neighbours){
            backtracking(n, currentArr)
        }

        currentArr.pop()
    }

    backtracking(0, [])

    return list
};