package com.example.bar.bar.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.Set;
import java.util.logging.Logger;

public class SuccessHandler implements AuthenticationSuccessHandler {
    private static final Logger logger = Logger.getLogger(SuccessHandler.class.getName());

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
        logger.info("User roles: " + roles); // In ra quyền của người dùng

        if (roles.contains("ROLE_MANAGER")) {
            response.sendRedirect("/system");
        } else if (roles.contains("ROLE_ADMIN")) {
            response.sendRedirect("/admin");
        } else if (roles.contains("ROLE_STUDENT")) {
            response.sendRedirect("/");
        } else {
            response.sendRedirect("/access-denied");
        }
    }
}
