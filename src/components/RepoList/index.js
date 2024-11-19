import React from "react";
import "./style.css"

function RepoList({repoList}) {
    return (
      repoList?.length ? 
        <div className="repoListComponent">
            <h4>Repositórios</h4>
            { 
            repoList.map(
                repo => (
                    <>
                        <div className="repoItem">
                            <strong>{repo.name}</strong>
                            <p>{repo.description}</p>
                        </div>
                        <hr/>
                    </>
                )
              )
            }
         
        </div>
       : 
       <div className="repoListComponent">
            <h4> Sem Repositório </h4>
        </div>
    )
}

export default RepoList;