//
//  ViewController.swift
//  createTable
//
//  Created by 양성호 on 2021/06/16.
//

import UIKit

class ViewController: UIViewController,UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var tableviewMain: UITableView!
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 100
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell.init(style: .default, reuseIdentifier: "tablecellType1")
        
        cell.textLabel?.text = "\(indexPath.row+1)"
        
        return cell
    }
    
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        tableviewMain.delegate = self
        tableviewMain.dataSource = self
    }


}

