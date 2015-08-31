<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	 
	public function __construct(){
			parent::__construct();
			$this->load->helper('url');
	 }
	public function index()
	{
		//die('here...');
            //$_REQUEST['lan'] = 'fr';
            //$_REQUEST['lan'] = 'hg';
            if(isset($_REQUEST['lan']) && $_REQUEST['lan'] == 'fr'){
                $this->load->view('fr/header');
		$this->load->view('fr/content');
		$this->load->view('fr/footer');
            }elseif(isset($_REQUEST['lan']) && $_REQUEST['lan'] == 'hg'){
                $this->load->view('hg/header');
		$this->load->view('hg/content');
		$this->load->view('hg/footer');
            }else{
		$this->load->view('header');
		$this->load->view('content');
		$this->load->view('footer');
            }
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */