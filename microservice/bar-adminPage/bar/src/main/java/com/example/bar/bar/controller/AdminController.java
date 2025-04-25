package com.example.bar.bar.controller;

import com.example.bar.bar.entity.Customer;
import com.example.bar.bar.entity.Product;
import com.example.bar.bar.repository.CustomerRepository;
import com.example.bar.bar.repository.ProductRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private CustomerRepository customerRepo;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("products", productRepo.findAll());
        model.addAttribute("customers", customerRepo.findAll());
        return "admin/home";
    }

    @GetMapping("/products/add")
    public String showAddProductForm(Model model) {
        model.addAttribute("product", new Product());
        return "admin/add-product";
    }

    @PostMapping("/products/add")
    public String addProduct(@Valid @ModelAttribute("product") Product product, BindingResult result) {
        if (result.hasErrors()) {
            return "admin/add-product";
        }
        productRepo.save(product);
        return "redirect:/admin";
    }

    @GetMapping("/products/edit/{id}")
    public String showEditProductForm(@PathVariable Long id, Model model) {
        Product product = productRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid product Id"));
        model.addAttribute("product", product);
        return "admin/edit-product";
    }

    @PostMapping("/products/edit/{id}")
    public String editProduct(@PathVariable Long id, @Valid @ModelAttribute("product") Product product, BindingResult result) {
        if (result.hasErrors()) {
            return "admin/edit-product";
        }
        product.setId(id);
        productRepo.save(product);
        return "redirect:/admin";
    }

    @GetMapping("/products/delete/{id}")
    public String deleteProduct(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        productRepo.deleteById(id);
        redirectAttributes.addFlashAttribute("message", "Xóa sản phẩm thành công!");
        return "redirect:/admin";
    }

    @GetMapping("/customers/add")
    public String showAddCustomerForm(Model model) {
        model.addAttribute("customer", new Customer());
        return "admin/add-customer";
    }

    @PostMapping("/customers/add")
    public String addCustomer(@Valid @ModelAttribute("customer") Customer customer, BindingResult result) {
        if (result.hasErrors()) {
            return "admin/add-customer";
        }
        customerRepo.save(customer);
        return "redirect:/admin";
    }

    @GetMapping("/customers/edit/{id}")
    public String showEditCustomerForm(@PathVariable Integer id, Model model) {
        Customer customer = customerRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid customer Id"));
        model.addAttribute("customer", customer);
        return "admin/edit-customer";
    }

    @PostMapping("/customers/edit/{id}")
    public String editCustomer(@PathVariable Integer id, @Valid @ModelAttribute("customer") Customer customer, BindingResult result) {
        if (result.hasErrors()) {
            return "admin/edit-customer";
        }
        customer.setId(id);
        customerRepo.save(customer);
        return "redirect:/admin";
    }

    @GetMapping("/customers/delete/{id}")
    public String deleteCustomer(@PathVariable Integer id) {
        customerRepo.deleteById(id);
        return "redirect:/admin";
    }
}
