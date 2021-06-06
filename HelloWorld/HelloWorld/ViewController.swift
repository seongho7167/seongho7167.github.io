//
//  ViewController.swift
//  HelloWorld
//
//  Created by 양성호 on 2021/06/06.
//

import UIKit

class ViewController: UIViewController {
    
    @IBAction func click_movebtn(_ sender: Any) {
        if let controller = self.storyboard?.instantiateViewController(withIdentifier: "detail_view_controller") {
            self.navigationController?.pushViewController(controller, animated: true)
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

   
    
}

